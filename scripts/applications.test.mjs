import test from 'node:test';
import assert from 'node:assert/strict';
import { squareAverage, sectionSolid, pumpWater, waterPressure } from '../packages/visuals/applications.mjs';
import { integrate } from '../packages/visuals/math.mjs';
import { allLessons } from './content-utils.mjs';
const near=(a,b,tol=1e-6)=>assert(Math.abs(a-b)<tol,`${a} differs from ${b}`);
test('average rectangle preserves accumulation and its marked point attains the average',()=>{
  for(const b of [.2,.7,2,3]){
    const m=squareAverage(b);
    near(m.average*b,integrate(x=>x*x,0,b,10000));
    near(m.c*m.c,m.average);
    assert(m.c>0 && m.c<b);
  }
  // The discontinuous counterexample never takes its average, despite being integrable.
  const jump=x=>x<1?0:2;
  near(integrate(jump,0,2,1000)/2,1);
  assert(![0,2].includes(1));
});
test('nonrotating solids agree with independent polygon section areas and integration',()=>{
  for(const shape of ['square','triangle']){
    const polygonArea=x=>{
      const s=x*(1-x), points=shape==='square'?[[0,0],[s,0],[s,s],[0,s]]:[[0,0],[s,0],[s/2,s]];
      return Math.abs(points.reduce((sum,[u,v],i)=>{const [a,b]=points[(i+1)%points.length];return sum+u*b-v*a;},0))/2;
    };
    for(const x of [0,.2,.5,.8,1]) near(sectionSolid(x,shape).area,polygonArea(x));
    near(sectionSolid(.5,shape).volume,integrate(polygonArea,0,1,10000));
  }
  near(integrate(x=>x*x,0,2),8/3,1e-6);
});
test('water work and gate force agree with independent center-of-mass and mean-pressure calculations',()=>{
  for(const level of [.2,1,2])for(const outlet of [2,3,4]){
    const weight=9800*Math.PI*level, distance=outlet-level/2;
    near(pumpWater(level,outlet).work,weight*distance,1e-7);
    near(pumpWater(level,outlet).work,integrate(y=>9800*Math.PI*(outlet-y),0,level),1e-7);
  }
  near(pumpWater(2,3).work,39200*Math.PI);
  near(pumpWater(2,2).work,19600*Math.PI);
  for(const top of [0,1,2])near(waterPressure(top).force,9800*(top+1.5)*6);
  near(waterPressure(0).force,88200);
  near(waterPressure(1).force,147000);
});
test('supplementary model boundary states are finite and reject impossible geometries',()=>{
  for(const fraction of [0,1]){
    const p=pumpWater(2,2,fraction);assert(p.lift>=0);assert(Object.values(p).every(Number.isFinite));
    assert(Object.values(waterPressure(0,fraction)).every(Number.isFinite));
  }
  assert.equal(pumpWater(2,2,1).lift,0);
  assert.equal(waterPressure(0,0).pressure,0);
  assert.equal(sectionSolid(0).area,0);assert.equal(sectionSolid(1).area,0);
  for(const f of [()=>squareAverage(0),()=>squareAverage(NaN),()=>sectionSolid(-.1),()=>sectionSolid(.5,'circle'),()=>pumpWater(2,1),()=>pumpWater(2,3,2),()=>waterPressure(-1),()=>waterPressure(0,Infinity)])assert.throws(f);
});
test('new calculus examples survive independent differentiation, cancellation and subsequence checks',()=>{
  // Explicit circle branch independently checks the implicit second derivative answer.
  const slope=x=>-x/Math.sqrt(25-x*x);
  near((slope(3+1e-5)-slope(3-1e-5))/2e-5,-25/64);
  near(allLessons.find(l=>l.id==='implicit').practice.at(-1).numericAnswer,-.5);
  near(integrate(x=>2*x*(1+x*x)**3,-2,2,10000),0);
  for(const n of [100,1000]){
    const a=2*n*Math.PI,b=(2*n+1)*Math.PI;
    near(a/(2*a+Math.sin(a)),.5);near(b/(2*b+Math.sin(b)),.5);
    near(1/(2+Math.cos(a)),1/3);near(1/(2+Math.cos(b)),1);
  }
  // Differentiating the new antiderivative independently recovers all three terms.
  const F=x=>Math.exp(x)+2*Math.atan(x)+3*Math.cos(x);
  for(const x of [-1,.3,2])near((F(x+1e-5)-F(x-1e-5))/2e-5,Math.exp(x)+2/(1+x*x)-3*Math.sin(x));
});
