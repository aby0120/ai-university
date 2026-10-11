/** Authorization only: this does not determine mathematical correctness. */
export function contributionDecision({ pull, reviews, owner, repository }) {
  if (!pull || pull.state !== 'open' || pull.base?.repo?.full_name !== repository || pull.base?.ref !== 'main') {
    return { allowed: false, reason: 'Only an open PR targeting this repository main can pass.' };
  }
  const sha = pull.head?.sha;
  if (!/^[a-f0-9]{40}$/.test(sha ?? '')) return { allowed: false, reason: 'Missing current commit identity.' };
  if (pull.draft) return { allowed: false, reason: 'Draft contributions cannot enter the published textbook.' };
  // The owner remains responsible for work authored under their account.
  // No new writer is trusted through author_association, labels or PR text.
  if (pull.user?.login === owner && pull.head?.repo?.full_name === repository) {
    return { allowed: true, reason: 'Owner-authored change; textbook CI and protected-branch merge still required.' };
  }
  const decisions = (reviews ?? []).filter(review =>
    review.user?.login === owner && ['APPROVED', 'CHANGES_REQUESTED', 'DISMISSED'].includes(review.state)
  ).sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  const latest = decisions.at(-1);
  if (latest?.state === 'APPROVED' && latest.commit_id === sha) {
    return { allowed: true, reason: 'Repository owner approved this exact contribution commit.' };
  }
  return { allowed: false, reason: 'External changes require owner approval of the current commit. After review, add/remove a label or rerun this workflow.' };
}
