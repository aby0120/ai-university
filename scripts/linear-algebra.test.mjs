import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import {contentBooks,libraryLessons} from './content-utils.mjs';
import {validateGuidance} from '../packages/visuals/guidance.mjs';
import {linearFrame,linearControls,linearDefaults,linearPlayback,assertLinearParameters,transpose,multiply,matvec,identity,determinant2,norm,solve,rref,pivotedLU,qr,svd2,matrixPower} from '../packages/visuals/linear-algebra.mjs';
const book=contentBooks.find(c=>c.book.id==='linear-algebra');
const near=(a,b,tol=1e-8)=>assert(Math.abs(a-b)<tol,`${a} differs from ${b}`);
const matrixNear=(A,B,tol=1e-8)=>{assert.equal(A.length,B.length);for(let i=0;i<A.length;i++){assert.equal(A[i].length,B[i].length);for(let j=0;j<A[i].length;j++)near(A[i][j],B[i][j],tol);}};
const read=(id,p)=>Object.fromEntries(linearFrame(id,p).stats.map(s=>[s.label,s.value]));

test('linear algebra is an independent full course with linked examples, exercises and local prerequisites',()=>{
  assert.equal(book.book.chapters.length,10);assert.equal(book.allLessons.length,50);
  assert.equal(book.allLessons.flatMap(l=>l.workedExamples).length,100);
  assert.equal(book.allLessons.flatMap(l=>l.practice).length,200);
  assert.equal(book.extra.reviews.flatMap(r=>r.questions).length,30);assert.equal(book.extra.exam.length,20);
  assert.equal(new Set(libraryLessons.map(l=>l.id)).size,215);
  const prompts=new Set(book.allLessons.flatMap(l=>l.practice).map(q=>q.problem));
  for(const q of [...book.extra.exam,...book.extra.reviews.flatMap(r=>r.questions)])assert(!prompts.has(q.problem),'review must not repeat section prompts');
  for(const l of book.allLessons){validateGuidance(l);assert(l.prerequisites.every(id=>id.startsWith('la-')));assert.notEqual(l.intuition,l.teaching.explain);}
});
test('all 150 presets and every control corner produce finite, typesettable geometry',()=>{
  for(const l of book.allLessons){
    const cs=linearControls(l.id),base=linearDefaults(l.id);
    const cases=[base,...l.teaching.steps.map(s=>({...base,...s.preset}))];
    for(let mask=0;mask<2**cs.length;mask++)cases.push(Object.fromEntries(cs.map((c,i)=>[c.key,mask&(1<<i)?c.max:c.min])));
    for(const p of cases){
      const f=linearFrame(l.id,p);assert([2,3].includes(f.dimension));assert(f.stats.length>=2);assert(f.formula);
      for(const formula of [f.formula,f.matrix].filter(Boolean))katex.renderToString(formula,{throwOnError:true,strict:'ignore'});
      const points=[...f.lines.flatMap(l=>l.points),...f.polygons.flatMap(p=>p.points),...f.arrows.flatMap(a=>[a.at,a.vector]),...f.dots.map(d=>d.at)];
      assert(points.length>0,l.id);for(const p of points)assert(p.length===3&&p.every(Number.isFinite),l.id);
      for(const s of f.stats)assert(!/NaN|Infinity/.test(s.value),l.id+': '+s.label);
    }
    assert.throws(()=>assertLinearParameters(l.id,{...base,[cs[0].key]:NaN}));
  }
});
test('every animation terminates at a valid exact endpoint without restarting itself',()=>{
  for(const l of book.allLessons){const p=linearDefaults(l.id),end=linearPlayback(l.id,p,6),c=linearControls(l.id).find(c=>c.key===end.key);
    assert(end.done);assert.equal(end.value,c.max);assert.deepEqual(end,linearPlayback(l.id,p,100));assert(!linearPlayback(l.id,p,2).done);linearFrame(l.id,{...p,[end.key]:end.value});}
});
test('row reduction preserves independently checked textbook solutions and distinguishes singular systems',()=>{
  for(const [A,b,expected] of [
    [[[1,2],[3,5]],[7,18],[1,3]],
    [[[2,1],[1,1]],[5,3],[2,1]],
    [[[0,2],[1,1]],[4,3],[1,2]],
    [[[4,2],[2,3]],[6,5],[1,1]],
  ]){const x=solve(A,b);matrixNear([x],[expected]);matrixNear([matvec(A,x)],[b]);}
  assert.throws(()=>solve([[1,1],[2,2]],[1,2]));
  matrixNear([solve(identity(2),[1e15,-1e15])],[[1e15,-1e15]]);
  matrixNear([solve([[1e-15,0],[0,1e-15]],[2e-15,3e-15])],[[2,3]]);
  const A=[[1,0,2],[0,1,-1]],v=[-2,1,1];matrixNear([matvec(A,v)],[[0,0]]);
  assert.deepEqual(rref(A).pivots,[0,1]);
});
test('pivoted LU and orthogonal QR reconstruct source matrices including row swaps',()=>{
  for(const A of [[[0,2],[1,3]],[[1,1],[2,3]],[[2,1,0],[4,3,1],[1,0,2]]]){
    const {P,L,U}=pivotedLU(A);matrixNear(multiply(P,A),multiply(L,U));
  }
  for(const A of [[[1,1],[1,0]],[[1,0],[1,1],[0,1]],[[2,1],[0,-3]]]){
    const {Q,R}=qr(A);matrixNear(multiply(Q,R),A);matrixNear(multiply(transpose(Q),Q),identity(A[0].length));
  }
  assert.throws(()=>qr([[1,2],[0,0]]));
});
test('two-dimensional SVD reconstructs nonsymmetric, reflected, singular and zero matrices',()=>{
  for(const magnitude of [1e-200,1e200]){const s=svd2([[-3*magnitude,0],[0,2*magnitude]]).sigma;near(s[0]/magnitude,3);near(s[1]/magnitude,2);}
  for(const A of [[[1,2],[3,4]],[[-3,0],[0,2]],[[1,1],[0,0]],[[0,0],[0,0]],[[1,1],[1,1+1e-8]],[[0,-1],[1,0]]]){
    const {U,V,sigma}=svd2(A);assert(sigma[0]>=sigma[1]&&sigma[1]>=0);
    matrixNear(multiply(multiply(U,[[sigma[0],0],[0,sigma[1]]]),transpose(V)),A,1e-7);
    matrixNear(multiply(transpose(U),U),identity(2));matrixNear(multiply(transpose(V),V),identity(2));
    near(sigma[0]*sigma[1],Math.abs(determinant2(A)),1e-7);
  }
});
test('projection geometry satisfies orthogonality, closest-point inequality and Pythagoras',()=>{
  for(const a of [-2,-1,0,.4,2]){
    const b=[1,a],c=(1+a)/2,p=[c,c],r=[1-c,a-c],s=read('la-projection',{a});
    near(Number(s['距离']),norm(r),1e-6);near(r[0]+r[1],0);near(norm(b)**2,norm(p)**2+norm(r)**2);
    for(const t of [-3,0,2])assert(norm([1-t,a-t])>=norm(r)-1e-12);
  }
});
test('least-squares readouts agree with independently solved normal equations and residual orthogonality',()=>{
  const A=[[1,0],[1,1],[1,2]],b=[1,2,2],At=transpose(A),x=solve(multiply(At,A),matvec(At,b));
  near(x[0],7/6);near(x[1],.5);
  const residual=b.map((v,i)=>v-matvec(A,x)[i]);near(norm(residual)**2,1/6);matrixNear([matvec(At,residual)],[[0,0]]);
  const s=read('la-least-squares',{a:x[1],b:x[0]});near(Number(s['残差平方和']),norm(residual)**2,1e-7);
});
test('Cholesky factors, quadratic extrema and singular-rank transitions match algebra',()=>{
  const L=[[2,0],[1,Math.sqrt(2)]];matrixNear(multiply(L,transpose(L)),[[4,2],[2,3]]);
  for(const c of [-1,0,.5,2]){
    const s=read('la-quadratic-forms',{c,a:Math.PI/2});near(Number(s['当前单位方向值']),c);
    assert.equal(read('la-rank-nullity',{c:Math.min(1,c)})['零度'],c===0?'2':'1');
  }
  for(const c of [-2,-1,0,1,2]){const s=read('la-cholesky',{c});assert(Number(s['最小特征值'])>0);}
});
test('matrix power, Markov invariants and graph balances are independently reproducible',()=>{
  matrixNear(matrixPower([[1,2],[0,1]],5),[[1,10],[0,1]]);
  const P=[[.8,.3],[.2,.7]];
  for(const a of [0,.3,1])for(const n of [0,1,8,20]){
    const actual=matvec(matrixPower(P,n),[a,1-a]),s=read('la-markov',{a,n});
    near(Number(s['第一状态概率']),actual[0],1e-7);near(actual[0]+actual[1],1);
  }
  const B=[[-1,0,1],[1,-1,0],[0,1,-1]],flows=[-1,.5,2],balance=matvec(B,flows),s=read('la-networks',{a:flows[0],b:flows[1],c:flows[2]});
  near(Number(s['节点一净流入']),balance[0]);near(balance.reduce((x,y)=>x+y,0),0);
  const graphL=multiply(B,transpose(B));matrixNear([matvec(graphL,[1,1,1])],[[0,0,0]]);assert.equal(rref(B).pivots.length,2);
});
test('PCA variance and reconstruction errors agree with direct pointwise projection',()=>{
  const data=[[2,0],[-2,0],[0,1],[0,-1]];
  for(const a of [0,.3,Math.PI/4,Math.PI/2]){
    const v=[Math.cos(a),Math.sin(a)],scores=data.map(x=>x[0]*v[0]+x[1]*v[1]);
    const variance=scores.reduce((s,x)=>s+x*x,0)/data.length;
    const error=data.reduce((s,x,i)=>s+(x[0]-scores[i]*v[0])**2+(x[1]-scores[i]*v[1])**2,0),s=read('la-pca',{a});
    near(Number(s['保留方差']),variance,1e-6);near(Number(s['总重建平方误差']),error,1e-6);near(error+4*variance,10);
  }
});
test('near-singular finite parameters never create invalid geometry or silently claim no solution',()=>{
  for(const tiny of [1e-12,1e-100,1e-320]){
    const f=linearFrame('la-inverse',{a:tiny,c:1});assert.equal(f.stats.find(s=>s.label==='可逆性').value,'可逆');
    for(const p of f.lines.flatMap(l=>l.points))assert(p.every(Number.isFinite));
  }
  const f=linearFrame('la-equations',{c:1+1e-12,b:3});assert(f.note.includes('交点超出'));assert(f.stats.some(s=>s.label==='唯一解'));
});
