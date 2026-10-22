import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import {contentBooks} from './content-utils.mjs';
import {validateGuidance} from '../packages/visuals/guidance.mjs';
import {odeControls,odeDefaults,odeFrame,odePlayback,assertOdeParameters,odeStep,integrateOde,adaptiveHeun,dampedState,forcedResponse,besselJ0,bifurcationSolution} from '../packages/visuals/ode.mjs';
const volume=contentBooks.find(c=>c.book.id==='ordinary-differential-equations');
const near=(x,y,tol=1e-7)=>assert(Math.abs(x-y)<tol,`${x} differs from ${y}`);
const derivative=(f,t,h=1e-5)=>(f(t+h)-f(t-h))/(2*h);
const second=(f,t,h=1e-4)=>(f(t+h)-2*f(t)+f(t-h))/(h*h);
test('ODE is a full eleven-chapter course with 110 examples and 275 distinct exercises',()=>{
 assert.equal(volume.book.chapters.length,11);assert.equal(volume.allLessons.length,55);
 assert.equal(volume.allLessons.flatMap(l=>l.workedExamples).length,110);
 assert.equal(volume.allLessons.flatMap(l=>l.practice).length,220);
 assert.equal(volume.extra.reviews.flatMap(r=>r.questions).length,33);assert.equal(volume.extra.exam.length,22);
 const prompts=[...volume.allLessons.flatMap(l=>l.practice),...volume.extra.reviews.flatMap(r=>r.questions),...volume.extra.exam].map(q=>q.problem);
 assert.equal(new Set(prompts).size,275);
 for(const l of volume.allLessons){validateGuidance(l);assert(l.prerequisites.every(p=>p.startsWith('ode-')||p.startsWith('la-')||['derivative-definition','antiderivatives','c3-partials','c2-taylor'].includes(p)));assert.notEqual(l.teaching.explain,l.intuition);}
});
test('165 teaching presets and every ODE parameter corner produce finite typesettable frames',()=>{
 for(const l of volume.allLessons){const cs=odeControls(l.id),base=odeDefaults(l.id),cases=[base,...l.teaching.steps.map(s=>({...base,...s.preset}))];
  for(let mask=0;mask<2**cs.length;mask++)cases.push(Object.fromEntries(cs.map((c,i)=>[c.key,mask&(1<<i)?c.max:c.min])));
  for(const p of cases){const f=odeFrame(l.id,p);assert.equal(f.dimension,2);assert(f.extent>0&&Number.isFinite(f.extent));assert(f.stats.length>=2,l.id);if(f.motion){assert(Object.values(f.motion).every(Number.isFinite));assert(f.motion.range>0&&Math.abs(f.motion.position)<=f.motion.range);}
   for(const text of [f.formula,f.matrix].filter(Boolean))katex.renderToString(text,{throwOnError:true,strict:'ignore'});
   const points=[...f.lines.flatMap(l=>l.points),...f.polygons.flatMap(p=>p.points),...f.arrows.flatMap(a=>[a.at,a.vector]),...f.dots.map(d=>d.at)];
   assert(points.length,l.id);for(const p of points)assert(p.length===3&&p.every(Number.isFinite),l.id);for(const s of f.stats)assert(!/NaN|Infinity/.test(s.value));
  }
  assert.throws(()=>assertOdeParameters(l.id,{...base,[cs[0].key]:NaN}));
 }
});
test('ODE playback reaches its exact endpoint, handles integer controls, and never loops',()=>{
 for(const l of volume.allLessons){const p=odeDefaults(l.id),end=odePlayback(l.id,p,6),c=odeControls(l.id).find(c=>c.key===end.key);assert(end.done);assert.equal(end.value,c.max);assert.deepEqual(end,odePlayback(l.id,p,100));assert(!odePlayback(l.id,p,1).done);odeFrame(l.id,{...p,[end.key]:end.value});}
 assert.throws(()=>odePlayback('ode-meaning',odeDefaults('ode-meaning'),NaN));
});
test('canonical first-order solutions satisfy their equations by independent differences',()=>{
 const cases=[ [t=>2*Math.exp(t*t/2),(t,y)=>t*y], [t=>3-2*Math.exp(-2*t),(_t,y)=>6-2*y], [t=>2/(1+Math.exp(-t)),(_t,y)=>y*(1-y/2)], [t=>t*Math.log(t),(t,y)=>1+y/t], [t=>1/(1-t),(_t,y)=>y*y] ];
 for(const [f,rhs] of cases)for(const t of [.2,.4,.6])near(derivative(f,t),rhs(t,f(t)),2e-6);
});
test('waiting solutions genuinely share an initial value and satisfy the nonsmooth equation',()=>{
 for(const c of [0,.5,1]){const f=t=>Math.max(0,t-c)**3;near(f(0),0);for(const t of [c-.1,c,c+.2])near(derivative(f,t),3*Math.abs(f(t))**(2/3),1e-7);}
});
test('damped exact solutions obey motion, initial data and energy dissipation across critical damping',()=>{
 for(const c of [0,.5,1.999,2,2.001,4]){near(dampedState(c,0)[0],1);near(dampedState(c,0)[1],0);
  for(const t of [.2,1,3]){const [y,v]=dampedState(c,t);near(derivative(t=>dampedState(c,t)[0],t),v,2e-6);near(derivative(t=>dampedState(c,t)[1],t),-c*v-y,2e-6);const E=s=>{const [x,w]=dampedState(c,s);return (x*x+w*w)/2;};near(derivative(E,t),-c*v*v,2e-6);}
 }
});
test('forced response remains continuous through resonance and obeys zero initial data',()=>{
 for(const w of [.25,.5,.999999999,1,1.000000001,2]){near(forcedResponse(w,0),0);near(derivative(t=>forcedResponse(w,t),0),0);for(const t of [.3,1,2])near(second(t=>forcedResponse(w,t),t)+forcedResponse(w,t),Math.cos(w*t),2e-6);}
 for(const t of [.2,1,3])near(forcedResponse(1,t),t*Math.sin(t)/2);
});
test('Laplace shift examples, delayed steps and impulse jumps obey the original equations',()=>{
 const step=t=>t<1?0:1-Math.exp(-(t-1));for(const t of [.5,1.5,2])near(derivative(step,t)+step(t),t<1?0:1);
 const impulse=t=>t<2?0:Math.sin(t-2);near(impulse(2),0);near((impulse(2+1e-6)-impulse(2))/1e-6,1);near((impulse(2)-impulse(2-1e-6))/1e-6,0);
 const particular=t=>t*Math.log(t)-t;for(const t of [.5,1,2])near(second(particular,t),1/t,2e-7);
});
test('linear state propagation, nilpotent exponentials and spiral radius agree independently',()=>{
 const f=(_t,[x,y])=>[-x+y,-y],r=integrateOde(f,[0,1],3).points.at(-1);near(r[1],3*Math.exp(-3),1e-9);near(r[2],Math.exp(-3),1e-9);
 const rotation=integrateOde((_t,[x,y])=>[-.5*x-2*y,2*x-.5*y],[1,0],2).points.at(-1);near(Math.hypot(rotation[1],rotation[2]),Math.exp(-1),1e-8);
 const shear=integrateOde((_t,[x,y])=>[y,0],[1,2],3).points.at(-1);near(shear[1],7);near(shear[2],2);
});
test('predator and pendulum numerical paths preserve independently derived invariants',()=>{
 const pred=integrateOde((_t,[x,y])=>[x*(1-y),y*(x-1)],[1.5,.5],8,{steps:1600});const H=([_t,x,y])=>x-Math.log(x)+y-Math.log(y),initial=H(pred.points[0]);for(const q of pred.points){assert(q[1]>0&&q[2]>0);near(H(q),initial,1e-8);}
 const pen=integrateOde((_t,[theta,v])=>[v,-Math.sin(theta)],[1.5,0],8,{steps:1600}),E=([_t,t,v])=>v*v/2+1-Math.cos(t),start=E(pen.points[0]);for(const q of pen.points)near(E(q),start,1e-8);
});
test('bifurcation exact solutions keep equilibrium roots and stop at genuine finite endpoints',()=>{
 for(const mu of [-1,0,.3,1])for(const y0 of [-1,-.2,0,.5,1]){const end=bifurcationSolution(mu,y0,0).end;for(const t of [.1,.2].filter(t=>t<end-.01)){const f=t=>bifurcationSolution(mu,y0,t).value;near(derivative(f,t),mu-f(t)**2,1e-6);}}
 near(bifurcationSolution(1,-2,0).end,Math.log(3)/2);
 const f=odeFrame('ode-initial-values',{a:1,b:2});assert(f.stats.some(s=>s.value.includes('端点')));assert(!f.dots.some(d=>d.at[0]>=1));
});
test('Bessel recurrence satisfies its equation and preserves normalization',()=>{
 near(besselJ0(0),1);near(derivative(besselJ0,0),0);for(const t of [.2,1,2,4])near(t*t*second(besselJ0,t)+t*derivative(besselJ0,t)+t*t*besselJ0(t),0,3e-6);
 near(besselJ0(2),.2238907791412357,1e-13);
});
test('Euler, Heun and RK4 exhibit their independent observed global orders',()=>{
 const exact=Math.exp(1),error=(method,steps)=>Math.abs(integrateOde((_t,v)=>v,[1],1,{method,steps}).points.at(-1)[1]-exact);
 for(const [method,ratio] of [['euler',2],['heun',4],['rk4',16]]){const r=error(method,40)/error(method,80);assert(Math.abs(r-ratio)<ratio*.07,method+': '+r);}
 near(odeStep((_t,v)=>v,0,[1],1,'rk4')[0],65/24);near(odeStep((_t,v)=>v,0,[1],1,'heun')[0],2.5);
});
test('absolute stability distinguishes a decaying exact solution from unstable numerical dynamics',()=>{
 const unstable=integrateOde((_t,[y])=>[-10*y],[1],3,{method:'euler',steps:10});near(unstable.points.at(-1)[1],1024);assert(Math.exp(-30)<1e-10);
 for(const h of [.05,.1,.19])assert(Math.abs(1-10*h)<1);assert.equal(Math.abs(1-10*.2),1);
});
test('adaptive accepted steps meet local estimates, reach the exact target and report real failures',()=>{
 let lastCount=0,lastError=Infinity;for(const tol of [.01,.001,.00001]){const r=adaptiveHeun(3,tol);assert(r.done);assert.equal(r.points.at(-1)[0],3);assert(r.estimates.every(e=>e<=tol));assert(r.points.length>lastCount);lastCount=r.points.length;const error=Math.abs(r.points.at(-1)[1]-Math.exp(3));assert(error<lastError);lastError=error;}
 assert(!adaptiveHeun(3,1e-12,{minStep:.5}).done);assert(!adaptiveHeun(3,1e-12,{maxSteps:1}).done);
});
test('numerical integration rejects invalid requests and never silently labels early termination complete',()=>{
 assert.throws(()=>integrateOde((_t,v)=>v,[1],-1));assert.throws(()=>odeStep((_t,v)=>v,0,[1],0));assert.throws(()=>odeStep(()=>[NaN],0,[1],1));
 const r=integrateOde((_t,[y])=>[y*y],[2],3,{steps:300,limit:10});assert(!r.done);assert(r.time<3);assert(r.points.flat().every(Number.isFinite));
});
