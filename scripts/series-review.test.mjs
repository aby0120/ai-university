import test from 'node:test';
import assert from 'node:assert/strict';
import { calculus3Frame } from '../packages/visuals/calculus3.mjs';
import { simpson } from '../packages/visuals/calculus2.mjs';

const near=(a,b,tol=1e-7)=>assert(Math.abs(a-b)<tol,`${a} differs from ${b}`);
const derivative=(f,x)=>(f(x+1e-5)-f(x-1e-5))/2e-5;
const stats=f=>Object.fromEntries(f.stats.map(s=>[s.label,Number(s.value)]));

test('new radical and quadratic-factor primitives differentiate back on every real branch',()=>{
  const radical=x=>x*Math.sqrt(x*x+4)/2-2*Math.log(x+Math.sqrt(x*x+4));
  const rational=x=>3*Math.log(Math.abs(x))-1.5*Math.log(x*x+1)+2*Math.atan(x);
  for(const x of [-5,-1,-0.2,0.2,1,5]){
    near(derivative(radical,x),x*x/Math.sqrt(x*x+4));
    near(derivative(rational,x),(2*x+3)/(x*(x*x+1)),3e-7);
    near(3/x+(-3*x+2)/(x*x+1),(2*x+3)/(x*(x*x+1)));
  }
  near(simpson(x=>x*x/Math.sqrt(x*x+4),-2,3,400),radical(3)-radical(-2));
});

test('both displayed partials agree with independent coordinate difference quotients and tangent geometry',()=>{
  const f=(x,y)=>x*x+y*y;
  for(const a of [-1,0,0.5,1])for(const b of [-1,0,0.5,1]){
    const frame=calculus3Frame('c3-partials',{a,b}),s=stats(frame);
    near(s['横向偏导'],derivative(x=>f(x,b),a));
    near(s['纵向偏导'],derivative(y=>f(a,y),b));
    for(const [label,axis] of [['横向切线',0],['纵向切线',1]]){
      const line=frame.lines.find(l=>l.label===label),p=line.points[0],q=line.points.at(-1);
      near((q[2]-p[2])/(q[axis]-p[axis]),axis===0?s['横向偏导']:s['纵向偏导']);
      near(p[1-axis],axis===0?b:a);
    }
  }
});

test('nonlinear Jacobian readouts agree with finite differences, polygon area and Cartesian moments',()=>{
  for(const c of [0,0.4,1,2])for(const u of [0,0.3,1]){
    const s=stats(calculus3Frame('c3-change-variables',{c,x:u}));
    const v=0.5,dxdu=derivative(t=>t,u),dydv=derivative(t=>(1+c*u)*t,v);
    near(s['当前位置的 Jacobian'],dxdu*dydv);
    const corners=[[0,0],[1,0],[1,1+c],[0,1]],area=Math.abs(corners.reduce((sum,p,i)=>{
      const q=corners[(i+1)%4];return sum+p[0]*q[1]-q[0]*p[1];
    },0))/2;
    near(s['像的总面积'],area);
    near(s['像区域的纵向一阶矩'],simpson(x=>(1+c*x)**2/2,0,1,100));
  }
  const s=stats(calculus3Frame('c3-change-variables',{c:1,x:0.5}));
  near(s['像的总面积'],1.5);near(s['像区域的纵向一阶矩'],7/6);
});

test('an eventually monotone alternating tail cannot justify a premature next-term error bound',()=>{
  const b=n=>n===1?1:n===2?100:1/n;
  const partial=N=>Array.from({length:N},(_,i)=>(i%2?-1:1)*b(i+1)).reduce((a,b)=>a+b,0);
  const sum=partial(100000);
  assert(Math.abs(sum)>b(1));
  for(const N of [2,3,10,99])assert(Math.abs(sum-partial(N))<=b(N+1));
});
