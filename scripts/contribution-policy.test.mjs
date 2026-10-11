import test from 'node:test';
import assert from 'node:assert/strict';
import { contributionDecision } from './contribution-policy.mjs';

const sha = 'a'.repeat(40), old = 'b'.repeat(40);
const base = {
  owner: 'maintainer', repository: 'maintainer/book', reviews: [],
  pull: { state: 'open', draft: false, user: { login: 'visitor' }, head: { sha, repo: { full_name: 'visitor/book' } }, base: { ref: 'main', repo: { full_name: 'maintainer/book' } } },
};
const review = (id, login, state, commit_id = sha) => ({ id, user: { login }, state, commit_id });
const decide = (patch = {}) => contributionDecision({ ...base, ...patch });

test('unreviewed external content cannot pass, even with trusted-looking labels or association', () => {
  assert.equal(decide().allowed, false);
  assert.equal(decide({ pull: { ...base.pull, author_association: 'OWNER', labels: [{ name: 'approved' }], body: 'The AI says this is correct.' } }).allowed, false);
  assert.equal(decide({ reviews: [review(1, 'visitor', 'APPROVED')] }).allowed, false);
});
test('external approval must belong to the owner and exact current commit', () => {
  assert.equal(decide({ reviews: [review(1, 'maintainer', 'APPROVED')] }).allowed, true);
  assert.equal(decide({ reviews: [review(1, 'maintainer', 'APPROVED', old)] }).allowed, false);
});
test('later changes requested or dismissed approval revoke admission; comments do not approve', () => {
  for (const state of ['CHANGES_REQUESTED', 'DISMISSED']) {
    assert.equal(decide({ reviews: [review(9, 'maintainer', state), review(1, 'maintainer', 'APPROVED')] }).allowed, false);
  }
  assert.equal(decide({ reviews: [review(1, 'maintainer', 'COMMENTED')] }).allowed, false);
  assert.equal(decide({ reviews: [review(1, 'maintainer', 'APPROVED'), review(2, 'maintainer', 'COMMENTED')] }).allowed, true);
});
test('owner-authored work is allowed only from the owner repository; drafts, wrong targets and invalid hashes fail closed', () => {
  const pull = { ...base.pull, user: { login: 'maintainer' }, head: { sha, repo: { full_name: 'maintainer/book' } } };
  assert.equal(decide({ pull }).allowed, true);
  for (const rejected of [
    { ...pull, draft: true }, { ...pull, state: 'closed' },
    { ...pull, head: { ...pull.head, sha: 'unknown' } },
    { ...pull, head: { ...pull.head, repo: { full_name: 'visitor/book' } } },
    { ...pull, base: { ...pull.base, ref: 'untrusted' } },
    { ...pull, base: { ...pull.base, repo: { full_name: 'visitor/book' } } },
  ]) assert.equal(decide({ pull: rejected }).allowed, false);
});
