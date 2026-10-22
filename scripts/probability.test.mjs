import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as stats from '../packages/visuals/statistics.mjs';
import * as visual from '../packages/visuals/probability.mjs';
import {contentBooks} from './content-utils.mjs';
import {validateGuidance} from '../packages/visuals/guidance.mjs';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root)));
const near=(a,b,tol=1e-10)=>assert(Math.abs(a-b)<=tol*Math.max(1e-50,Math.abs(b))+1e-15,`${a} differs from ${b}`);
test('complete probability course is registered and linked, with actual content in every section',()=>{
 const c=contentBooks.find(c=>c.book.id==='probability-statistics');assert(c);assert.equal(c.book.chapters.length,10);assert.equal(c.allLessons.length,50);assert.equal(c.allLessons.reduce((s,l)=>s+l.workedExamples.length,0),100);assert.equal(c.allLessons.reduce((s,l)=>s+l.practice.length,0)+c.extra.reviews.flatMap(r=>r.questions).length+c.extra.exam.length,230);
 for(const l of c.allLessons){validateGuidance(l);assert.equal(l.interactiveVisual.kind,'probability');assert.equal(l.interactiveVisual.function,l.id);assert.equal(l.teaching.steps.length,3);assert.equal(l.provenance.humanReviewed,false);assert.notEqual(l.teaching.explain,l.intuition);}
});
test('distribution kernels agree with 113 independent high-precision incomplete-integral reference cases',()=>{
 const oracle=read('scripts/fixtures/probability-reference.json');assert.equal(oracle.cases.length,113);for(const c of oracle.cases)near(stats[c.function](...c.args),c.value,2e-10);
});
test('discrete models preserve mass, moments, deterministic boundaries and the sampling correction',()=>{
 for(const n of [1,5,20,80])for(const p of [0,.01,.3,.9,1]){const probs=Array.from({length:n+1},(_,k)=>stats.binomialPMF(k,n,p));near(probs.reduce((a,b)=>a+b,0),1);near(probs.reduce((s,v,k)=>s+k*v,0),n*p);near(probs.reduce((s,v,k)=>s+(k-n*p)**2*v,0),n*p*(1-p));}
 for(const n of [1,8,20,30]){const probs=Array.from({length:n+1},(_,k)=>stats.hypergeometricPMF(k,30,12,n)),m=probs.reduce((s,v,k)=>s+k*v,0);near(probs.reduce((a,b)=>a+b,0),1);near(m,.4*n);near(probs.reduce((s,v,k)=>s+(k-m)**2*v,0),n*.4*.6*(30-n)/29);}
 near(stats.binomialTail(4,4,.5),1/16);near(stats.binomialTail(3,4,.5),5/16);
});
test('Wilson retains uncertainty at zero or all successes and never leaves the parameter space',()=>{
 for(const n of [5,10,50,100])for(let k=0;k<=n;k++){const [lo,hi]=stats.wilson(k,n);assert(lo>=0&&hi<=1&&lo<=k/n&&hi>=k/n);if(k===0){near(lo,0);assert(hi>0);}if(k===n){near(hi,1);assert(lo<1);}}
 near(stats.wilson(0,10)[1],.2775327998628892,2e-10);
});
test('Welch, regression, ANOVA and contingency readouts match independent elementary calculations',()=>{
 const w=stats.welch(2,3,25,0,4,25);near(w.se,1);near(w.df,625/(81/24+256/24));
 const points=[[0,1],[1,2],[2,1],[3,3],[4,3]],r=stats.regression(points);near(r.slope,.5);near(r.intercept,1);near(r.sse,1.5);near(r.residuals.reduce((s,v)=>s+v,0),0);near(r.residuals.reduce((s,v,i)=>s+v*points[i][0],0),0);
 const q=stats.regressionIntervals(points,2);assert(q.predictionHalf>q.meanHalf);near(q.predictionHalf**2-q.meanHalf**2,stats.studentQuantile(.975,3)**2*r.variance);
 const a=stats.anova([[1,2,3],[3,4,5],[5,6,7]]);near(a.ssb,24);near(a.ssw,6);near(a.F,12);near(a.p,.008);
 const chi=stats.chiSquare([[20,10],[10,20]]);near(chi.stat,20/3);assert.equal(chi.df,1);near(chi.p,.009823274507519247);
});
test('exact permutation enumeration respects the design, ties and the prescribed two-sided ordering',()=>{
 const all=stats.permutationMeans([1,2,3,4],2);assert.equal(all.length,6);assert.equal(new Set(all.map(x=>x.indices.join(','))).size,6);assert.equal(all.filter(x=>Math.abs(x.delta)>=2).length,2);near(all.reduce((s,r)=>s+r.delta,0),0);
});
function finiteFrame(f){
 assert(f.range.every(Number.isFinite));for(const s of [...f.series,...f.shades])for(const p of s.points)assert(p.every(Number.isFinite));for(const p of f.dots)assert(Number.isFinite(p.x)&&Number.isFinite(p.y));for(const b of f.bars)assert(Number.isFinite(b.y)&&b.y>=0);for(const m of f.metrics)assert(!/NaN|Infinity|未定义/.test(m.value));if(f.table)for(const row of f.table.values)assert(row.every(v=>Number.isFinite(v)&&v>=0));if(f.secondary)finiteFrame(f.secondary);
}
test('all 50 visual models remain finite at every corner of their exposed parameter domains',()=>{
 const map=read('packages/visuals/probability-lessons.json');assert.equal(Object.keys(map).length,50);
 for(const id of Object.keys(map)){const cs=visual.probabilityControls(id);function visit(i,p){if(i===cs.length){finiteFrame(visual.probabilityFrame(id,p));return;}for(const v of [cs[i].min,cs[i].max])visit(i+1,{...p,[cs[i].key]:v});}visit(0,{});const def=visual.probabilityDefaults(id);finiteFrame(visual.probabilityFrame(id,def));assert.throws(()=>visual.probabilityFrame(id,{...def,[cs[0].key]:NaN}));assert.throws(()=>visual.probabilityFrame(id,{...def,[cs[0].key]:cs[0].max+1}));const end=visual.probabilityPlayback(id,def,6);assert.equal(end.value,cs.find(c=>c.key===end.key).max);assert.equal(end.done,true);}
});
test('seeded simulations are reproducible, and extending a frequency path preserves its original prefix',()=>{
 const id='ps-lln',a=visual.probabilityDefaults(id),first=visual.probabilityFrame(id,a);assert.deepEqual(first,visual.probabilityFrame(id,a));const extended=visual.probabilityFrame(id,{...a,n:a.n+10});assert.deepEqual(first.series[0].points,extended.series[0].points.slice(0,a.n));assert.notDeepEqual(first.series[0].points,visual.probabilityFrame(id,{...a,c:a.c+1}).series[0].points);
 const ci=visual.probabilityFrame('ps-mean-interval',visual.probabilityDefaults('ps-mean-interval'));for(const r of ci.intervals)assert.equal(r.contains,r.low<=0&&r.high>=0);near(Number(ci.metrics[1].value),ci.intervals.filter(r=>r.contains).length/100);
});
test('coincident support points and zero effects retain the mathematical boundary meaning',()=>{
 const d=visual.probabilityDefaults('ps-expectation'),frame=visual.probabilityFrame('ps-expectation',{...d,a:0});assert.equal(frame.bars.length,1);near(frame.bars[0].y,1);
 const p=visual.probabilityDefaults('ps-power'),power=visual.probabilityFrame('ps-power',{...p,a:0});near(Number(power.metrics[1].value),p.b,1e-5);
 const joint=visual.probabilityFrame('ps-joint',{a:.25});for(const row of joint.table.values)for(const value of row)near(value,.25);
});
test('invalid statistical inputs do not silently produce a plausible result',()=>{
 assert.throws(()=>stats.wilson(11,10));assert.throws(()=>stats.welch(1,0,10,2,1,10));assert.throws(()=>stats.regression([[1,1],[1,2],[1,3]]));assert.throws(()=>stats.anova([[1,1],[2,2]]));assert.throws(()=>stats.betaCDF(.5,0,1));assert.throws(()=>stats.mean([]));
});
