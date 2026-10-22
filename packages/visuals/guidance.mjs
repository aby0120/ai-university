import {calculus2Bounds,calculus2Controls} from './calculus2.mjs';
import {calculus3Bounds} from './calculus3.mjs';
import {linearBounds} from './linear-algebra.mjs';
import {odeBounds} from './ode.mjs';
import {analysisBounds} from './analysis.mjs';
import {discreteBounds} from './discrete.mjs';
import {probabilityBounds} from './probability.mjs';
import { functions } from './math.mjs';
export function guidanceBounds(lesson, preset) {
  const k=lesson.interactiveVisual.kind,f=lesson.interactiveVisual.function;
  if(k==='analysis')return analysisBounds(f);
  if(k==='discrete')return discreteBounds(f);
  if(k==='probability')return probabilityBounds(f);
  if(k==='ode')return odeBounds(f);
  if(k==='linear-algebra')return linearBounds(f);
  if(k==='calculus3')return calculus3Bounds(f);
  if(k==='calculus2')return calculus2Bounds(f);
  const range=functions[f].range;
  if(preset.dimension==='3d')return {degrees:[0,360],slice:[0,1],model:['disk','washer'],dimension:['3d']};
  const tangentA=f==='circle'?[-1.95,1.95]:[Math.max(range[0],f==='sqrt'?.2:range[0]+.1),range[1]-.1];
  const groups={graph:{x:[range[0],range[1]]},transform:{a:[-3,3],c:[-2,5]},limit:{h:[.0001,1.5],side:[-1,1],comparison:['original','jump','filled'],c:[0,4]},epsilon:{eps:[.05,2]},derivative:{a:tangentA,h:[.0001,1.5],side:[-1,1],comparison:['original','corner']},linearization:{a:[.3,5],x:[.01,6]},chain:{x:[-1.5,1.5]},substitution:{x:[0,1]},related:{x:[.1,4.9]},mvt:{b:[.3,3.2]},optimization:{x:[.1,11.9]},newton:{x:[-1.8,2.8],n:[1,6]},antiderivative:{c:[-2,2]},riemann:{n:[1,80],method:['left','right','midpoint','trapezoid']},'signed-area':{b:f==='velocity'?[.01,3]:[-.99,2]},accumulation:{x:[0,1]},'area-between':{x:[0,1]},disk:{x:[.01,1],dimension:['2d']},shell:{x:[.01,1],dimension:['2d']},arc:{n:[1,80],dimension:['2d']}};
  return groups[k];
}
export function validateGuidance(lesson) {
  for(const step of lesson.teaching.steps){
    const p=step.preset,bounds=guidanceBounds(lesson,p);
    if(p.dimension==='3d'&&!['disk','shell','arc'].includes(lesson.interactiveVisual.kind))throw Error(`${lesson.id}: unexpected 3D preset`);
    if(p.model && lesson.interactiveVisual.kind!=='disk')throw Error(`${lesson.id}: unexpected disk model`);
    if(p.comparison && !['limit-intuition','derivative-definition','continuity'].includes(lesson.id))throw Error(`${lesson.id}: unavailable comparison`);
    if(p.c!==undefined&&lesson.interactiveVisual.kind==='limit'&&lesson.id!=='continuity')throw Error(`${lesson.id}: unavailable point value`);
    if(p.comparison==='filled'&&lesson.id!=='continuity')throw Error(`${lesson.id}: unavailable point repair`);
    for(const [key,value] of Object.entries(p)){
      const constraint=bounds[key];
      if(!constraint)throw Error(`${lesson.id}: unsupported parameter ${key}`);
      const numeric=typeof constraint[0]==='number';
      if(numeric?(!Number.isFinite(value)||value<constraint[0]||value>constraint[1]):!constraint.includes(value))throw Error(`${lesson.id}: preset ${key} outside available controls`);
      if(key==='n'&&lesson.interactiveVisual.kind==='calculus2'&&calculus2Controls(lesson.id).find(c=>c.key==='n')?.step===2&&value%2)throw Error(`${lesson.id}: needs even subdivisions`);
      if(key==='n'&&!Number.isInteger(value))throw Error(`${lesson.id}: subdivision count must be integer`);
    }
    if(lesson.interactiveVisual.function==='circle'&&p.dimension!=='3d'&&p.h!==undefined){const a=p.a??lesson.interactiveVisual.a??1,side=p.side??1;if(Math.abs(a+side*p.h)>2)throw Error(`${lesson.id}: preset leaves circle domain`);}
  }
}
