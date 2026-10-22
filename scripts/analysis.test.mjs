import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import * as a from '../packages/visuals/analysis.mjs';
import {contentBooks} from './content-utils.mjs';
import {validateGuidance} from '../packages/visuals/guidance.mjs';
const registry=JSON.parse(fs.readFileSync(new URL('../packages/visuals/analysis-models.json',import.meta.url)));
const volume=contentBooks.find(v=>v.book.id==='real-analysis');
const near=(x,y,t=1e-12)=>assert(Math.abs(x-y)<=t*Math.max(1,Math.abs(y)),`${x} != ${y}`);
const values=f=>Object.fromEntries(f.metrics.map(m=>[m.label,m.value]));
test('analysis is a complete 40-lesson volume with original proof exercises and 120 valid teaching presets',()=>{
 assert.equal(volume.book.chapters.length,8);assert.equal(volume.allLessons.length,40);assert.equal(volume.allLessons.reduce((s,l)=>s+l.workedExamples.length,0),80);assert.equal(volume.allLessons.reduce((s,l)=>s+l.practice.length,0)+volume.extra.reviews.flatMap(r=>r.questions).length+volume.extra.exam.length,184);
 for(const l of volume.allLessons){validateGuidance(l);assert.equal(l.interactiveVisual.kind,'analysis');assert.equal(l.provenance.humanReviewed,false);assert(l.practice[3].solution.length>=3);assert.equal(new Set(l.teaching.steps.map(s=>s.title)).size,3);for(const s of l.teaching.steps)a.analysisFrame(l.id,s.preset);}
});
test('all analysis control corners, defaults, presets and playback frames render finite data and valid TeX',()=>{
 function check(id,p){const f=a.analysisFrame(id,p);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(f)),id);katex.renderToString(f.formula,{throwOnError:true,trust:false});for(const q of f.panels){assert(q.range.every(Number.isFinite));assert(q.range[1]>q.range[0]&&q.range[3]>q.range[2]);for(const c of q.curves)assert(c.points.every(v=>v.every(Number.isFinite)));}if(f.table){assert(f.table.headers.every(x=>typeof x==='string'));assert(f.table.rows.every(r=>r.length===f.table.headers.length&&r.every(x=>typeof x==='string')));}}
 for(const id of Object.keys(registry)){const cs=a.analysisControls(id);function corners(i,p){if(i===cs.length)return check(id,p);for(const v of [cs[i].min,cs[i].max])corners(i+1,{...p,[cs[i].key]:v});}corners(0,{});check(id,{});for(const c of cs){assert.throws(()=>a.analysisFrame(id,{[c.key]:NaN}));assert.throws(()=>a.analysisFrame(id,{[c.key]:c.max+1}));if(c.step>=1)assert.throws(()=>a.analysisFrame(id,{[c.key]:c.min+.5}));if(c.options)assert.equal(c.options.length,(c.max-c.min)/c.step+1);}for(const t of [0,1.7,5.999,6,60]){const p=a.analysisPlayback(id,{},t),c=cs.find(c=>c.key===p.key);check(id,{[p.key]:p.value});assert.equal(p.done,t>=6);if(t>=6)assert.equal(p.value,['h','eps'].includes(c.key)?c.min:c.max);}}
});
test('square root dyadic brackets retain sign and halve width independently of the displayed midpoint',()=>{
 const rows=a.bisectionTrace(24);assert.equal(rows.length,25);rows.forEach(([l,r],k)=>{assert(l*l<=2&&r*r>=2);near(r-l,2**(-k));assert(Math.sqrt(2)>=l&&Math.sqrt(2)<=r);if(k){assert(l>=rows[k-1][0]&&r<=rows[k-1][1]);}});
 const cube=x=>x*x*x-x-1;for(const [l,r] of a.bisectionTrace(20,cube,1,2))assert(cube(l)<=0&&cube(r)>=0);assert.throws(()=>a.bisectionTrace(3,()=>1));assert.throws(()=>a.bisectionTrace(2.5));
});
test('strict epsilon cutoff controls every tail term and never accepts equality',()=>{
 for(const eps of [.01,.02,.04,.1,.125,.2,.25,.5,1,.37]){const N=a.sequenceCutoff(eps);assert(1/N<eps);if(N>1)assert(1/(N-1)>=eps);for(let n=N;n<N+200;n++)assert(1/n<eps);}assert.equal(a.sequenceCutoff(.25),5);assert.throws(()=>a.sequenceCutoff(0));
});
test('Darboux sums match independent closed forms, preserve jump endpoints and detect dense nonintegrability',()=>{
 for(let n=1;n<=80;n++){const square=a.darbouxData(0,n);near(square.lower,(n-1)*(2*n-1)/(6*n*n));near(square.upper,(n+1)*(2*n+1)/(6*n*n));near(square.gap,1/n);assert(square.lower<=1/3&&square.upper>=1/3);const step=a.darbouxData(1,n);near(step.gap,1/n);assert(step.lower<=.5+1e-14&&step.upper>=.5-1e-14);for(const r of step.rows){if(r.r===.5){assert.equal(r.high,1);assert.equal(r.low,0);}}const dense=a.darbouxData(2,n);near(dense.lower,0);near(dense.upper,1);assert.equal(dense.integral,null);const linear=a.darbouxData(3,n);near(linear.lower,(n-1)/(2*n));near(linear.upper,(n+1)/(2*n));}assert.throws(()=>a.darbouxData(0,0));
});
test('moving spike critical points survive rendering even when they miss a uniform plotting grid',()=>{
 for(const n of [3,7,31,59,80]){near(a.tent(0,n),0);near(a.tent(1/n,n),1);near(a.tent(2/n,n),0);near(a.uniformError(2,n),1);const f=a.analysisFrame('ra-pointwise-uniform',{a:2,n});assert(f.panels[0].curves[0].points.some(([x,y])=>x===1/n&&y===1));assert.equal(values(f)['解析全域上确界误差'],'1');}
 for(const x of [.1,.25,.6,1])near(a.tent(x,Math.ceil(2/x)+1),0);
 for(const n of [2,3,17,60]){const f=a.analysisFrame('ra-interchange',{a:1,n}),curve=f.panels[0].curves[0];assert(curve.points.some(([x,y])=>x===1/n&&y===n));const vertices=[[0,0],[1/n,n],[2/n,0]];let area=0;for(let i=1;i<vertices.length;i++)area+=(vertices[i][0]-vertices[i-1][0])*(vertices[i][1]+vertices[i-1][1])/2;near(area,1);assert.equal(values(f)['每项积分'],'1');}
});
test('pointwise counterexamples retain analytical global errors and correct limiting endpoint',()=>{
 for(const n of [2,5,33,80]){const f=a.analysisFrame('ra-pointwise-uniform',{a:0,n});assert.equal(values(f)['解析全域上确界误差'],'1');near(Number(values(f)['该点误差']),.5,1e-6);assert(f.panels[0].points.some(p=>p.x===1&&p.y===0&&p.open));assert(f.panels[0].points.some(p=>p.x===1&&p.y===1&&!p.open));near(a.uniformError(1,n),1/n);const u=a.analysisFrame('ra-uniform-continuity',{a:0,n});near(Number(values(u)['输出差']),2+1/(n*n),1e-6);}
});
test('Taylor polynomial values agree with a separate exponential recurrence fixture and satisfy the remainder bound',()=>{
 const fixtures=[[.5,3,1.6458333333333333],[-1,4,.375],[1,6,2.7180555555555556],[-.5,2,.625]];for(const [x,n,y] of fixtures)near(a.expPolynomial(x,n),y);
 for(let n=0;n<=12;n++)for(const x of [-1,-.75,-.25,0,.1,.7,1]){const actual=Math.abs(Math.exp(x)-a.expPolynomial(x,n)),bound=Math.exp(Math.abs(x))*Math.abs(x)**(n+1)/a.factorial(n+1);assert(actual<=bound+3e-15);}
});
test('geometric tail budgets equal independent long-tail summations for both signs and local uniform bounds',()=>{
 for(const r of [-.8,-.3,.1,.5,.9,.99])for(const n of [1,8,40]){let sum=0;for(let k=n+1;k<12000;k++)sum+=r**k;near(a.geometricTail(r,n),sum,1e-11);}
 for(const [r,n] of [[.5,1],[.8,8],[.99,40]]){const f=a.analysisFrame('ra-power-series',{a:r,n});near(Number(values(f)['精确统一尾部界']),a.geometricTail(r,n),1e-6);for(let j=0;j<=100;j++){const x=-r+2*r*j/100;assert(Math.abs(a.geometricTail(x,n))<=a.geometricTail(r,n)+1e-12);}}
});
test('difference quotients, noncontinuous derivative subsequences and signed accumulation agree with independent formulas',()=>{
 for(const center of [-1,0,.6,1])for(const h of [.0001,.1,.4])for(const c of [0,1]){const dh=(c?1:-1)*h,f=a.analysisFrame('ra-derivative',{a:center,h,c,b:0});near(Number(values(f)['当前差商']),((center+dh)**2-center**2)/dh,1e-6);const af=a.analysisFrame('ra-derivative',{a:0,h,c,b:1});near(Number(values(af)['当前差商']),c?1:-1);}
 for(const n of [1,5,50])for(const k of [2*n,2*n+1]){const x=1/(k*Math.PI),v=2*x*Math.sin(1/x)-Math.cos(1/x);near(v,k%2?1:-1,1e-11);}
 const left=values(a.analysisFrame('ra-ftc-derivative',{a:1,x:.5,h:.1,c:0})),right=values(a.analysisFrame('ra-ftc-derivative',{a:1,x:.5,h:.1,c:1}));near(Number(left['差商 / 局部平均']),0);near(Number(right['差商 / 局部平均']),1);assert.equal(left['中心可保证导数'],'此跳点无导数');
});
test('Newton Leibniz cell areas telescope while midpoint sums are correctly separate approximations',()=>{
 for(const mode of [0,1])for(const n of [1,2,7,40]){const f=a.analysisFrame('ra-ftc-evaluation',{a:mode,n}),target=mode?1-Math.cos(1):1/3,metrics=values(f);near(Number(metrics['原函数端点差']),target,1e-6);near(Number(metrics['中值标记和（恒等）']),target,1e-6);const rows=f.table.rows;near(rows.reduce((s,r)=>s+Number(r[1]),0),target,1e-6);if(mode===0)near(Number(metrics['中点和（近似）']),1/3-1/(12*n*n),1e-6);}
});
