import test from 'node:test';
import { parseParameter } from '../packages/visuals/parameter-input.mjs';
import assert from 'node:assert/strict';
import { allLessons } from './content-utils.mjs';
import { validateGuidance } from '../packages/visuals/guidance.mjs';
import { functions,secant,integrate,newton,epsilonDelta } from '../packages/visuals/math.mjs';
import { solidReadout } from '../packages/visuals/solid-models.mjs';
const lesson=id=>allLessons.find(l=>l.id===id), p=(id,i)=>lesson(id).teaching.steps[i].preset;
const near=(a,b,tol=1e-7)=>assert(Math.abs(a-b)<tol,`${a} differs from ${b}`);
test('all 105 authored experiments map to actual controls and legal domains',()=>{
  assert.equal(allLessons.reduce((n,l)=>n+l.teaching.steps.length,0),105);
  allLessons.forEach(validateGuidance);
  const bad=structuredClone(lesson('riemann-sums'));bad.teaching.steps[0].preset.n=2.5;assert.throws(()=>validateGuidance(bad),/integer/);
  bad.teaching.steps[0].preset.n=1000;assert.throws(()=>validateGuidance(bad),/outside/);
  const badPoint=structuredClone(lesson('limit-intuition'));badPoint.teaching.steps[0].preset.c=2;assert.throws(()=>validateGuidance(badPoint),/point value/);
  const wrong=structuredClone(lesson('domain'));wrong.teaching.steps[0].preset.model='washer';assert.throws(()=>validateGuidance(wrong),/unexpected/);
});
test('guided finite differences, counterexamples and guarantees match their stated values',()=>{
  const smooth=p('derivative-definition',1);near(secant(functions.square.f,smooth.a,smooth.h),2.01);
  const corner=p('derivative-definition',2);near(secant(Math.abs,0,corner.h),1);near(secant(Math.abs,0,-corner.h),-1);
  const e=p('epsilon-delta',2);near(epsilonDelta(e.eps),.01);
  assert(Number.isNaN(functions.sqrt.f(p('domain',2).x)));
});
test('integral, Newton and 3D presets preserve independently known results',()=>{
  const right=p('riemann-sums',0),left=p('riemann-sums',1);
  near(integrate(x=>x*x,0,1,right.n,right.method),5/8);near(integrate(x=>x*x,0,1,left.n,left.method),1/8);
  const n=p('newton',0);near(newton(x=>x*x-2,x=>2*x,n.x,n.n).rows[0].next,1.5);
  assert(newton(x=>x*x-2,x=>2*x,p('newton',2).x,1).error);
  const a=p('disk-washer',0),b=p('disk-washer',1),w=p('disk-washer',2);
  near(solidReadout(a.model,a.slice,a.degrees).density,Math.PI/4);
  near(solidReadout(b.model,b.slice,b.degrees).density,Math.PI);
  near(solidReadout(w.model,w.slice,w.degrees).density,3*Math.PI);
});

test('precise mathematical parameter input supports fractions and radians without executing expressions',()=>{
  near(parseParameter('1/3'),1/3);near(parseParameter('pi/2'),Math.PI/2);near(parseParameter('-3π/2'),-3*Math.PI/2);near(parseParameter('2*pi'),2*Math.PI);near(parseParameter('1e-3'),.001);
  for(const s of ['', '1/0','0/0','1/2/3','Infinity','alert(1)','globalThis','2+3','Math.PI'])assert(!Number.isFinite(parseParameter(s)));
});
