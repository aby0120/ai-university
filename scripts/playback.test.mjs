import test from 'node:test';
import assert from 'node:assert/strict';
import { playbackStep, MIN_APPROACH_DISTANCE, MAX_REFINEMENT } from '../packages/visuals/playback.mjs';
import { secant } from '../packages/visuals/math.mjs';

test('approach passes the old 8-second cutoff and finishes without a zero denominator', () => {
  assert.equal(playbackStep('approach', 1, 8).done, false);
  let previous = 1;
  for (let i = 0; i <= 120; i++) {
    const { value } = playbackStep('approach', 1, i / 10);
    assert(value > 0 && value <= previous);
    previous = value;
  }
  const final = playbackStep('approach', 1, 12);
  assert.deepEqual(final, { value: MIN_APPROACH_DISTANCE, done: true });
  assert(Math.abs(secant(x => x*x, 1, final.value) - 2.0001) < 1e-9);
  assert.notEqual(secant(x => x*x, 1, final.value), 2);
});
test('refinement reaches 80 rather than stopping at 76, preserving a finite approximation', () => {
  assert.deepEqual(playbackStep('refine', 4, 8), { value: 76, done: false });
  assert.deepEqual(playbackStep('refine', 4, 9), { value: MAX_REFINEMENT, done: true });
  assert.deepEqual(playbackStep('refine', 70, 2), { value: MAX_REFINEMENT, done: true });
});
test('a sweep finishes at its endpoint and never wraps back to zero', () => {
  assert.deepEqual(playbackStep('sweep', 0, 2), { value: 0.5, done: false });
  assert.deepEqual(playbackStep('sweep', 0, 4), { value: 1, done: true });
  assert.deepEqual(playbackStep('sweep', 0, 8), { value: 1, done: true });
  assert.deepEqual(playbackStep('sweep', 0.5, 2), { value: 1, done: true });
});
test('playback rejects invalid inputs instead of producing non-finite geometry', () => {
  for (const [mode, initial, elapsed] of [['approach',0,1],['approach',2,1],['refine',2.5,1],['refine',81,1],['sweep',-1,1],['sweep',2,1],['sweep',0,-1],['sweep',0,Infinity],['approach',NaN,1],['unknown',0,1]])
    assert.throws(() => playbackStep(mode, initial, elapsed), RangeError);
});
