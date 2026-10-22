import catalog from './linear-algebra-models.json' with { type: 'json' };

export const transpose=A=>A[0].map((_,j)=>A.map(r=>r[j]));
export const matvec=(A,x)=>A.map(r=>r.reduce((s,v,i)=>s+v*x[i],0));
export const multiply=(A,B)=>A.map(r=>transpose(B).map(c=>r.reduce((s,v,i)=>s+v*c[i],0)));
export const identity=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j)));
export const determinant2=A=>A[0][0]*A[1][1]-A[0][1]*A[1][0];
export const norm=x=>Math.hypot(...x);
const dot=(x,y)=>x.reduce((s,v,i)=>s+v*y[i],0);
const add=(x,y)=>x.map((v,i)=>v+y[i]);
const scale=(x,c)=>x.map(v=>v*c);
const p3=x=>[x[0]??0,x[1]??0,x[2]??0];

export function rref(matrix,tolerance=1e-12,pivotColumns=matrix[0]?.length??0) {
  const A=matrix.map(r=>[...r]), pivots=[];
  if(!A.length)return {matrix:A,pivots};
  const threshold=tolerance*Math.max(0,...A.flatMap(r=>r.slice(0,pivotColumns)).map(Math.abs));
  let row=0;
  for(let col=0;col<pivotColumns&&row<A.length;col++){
    let best=row;
    for(let i=row+1;i<A.length;i++)if(Math.abs(A[i][col])>Math.abs(A[best][col]))best=i;
    if(Math.abs(A[best][col])<=threshold)continue;
    [A[row],A[best]]=[A[best],A[row]];
    const pivot=A[row][col];A[row]=A[row].map(x=>x/pivot);
    for(let i=0;i<A.length;i++)if(i!==row){const factor=A[i][col];A[i]=A[i].map((x,j)=>x-factor*A[row][j]);}
    pivots.push(col);row++;
  }
  return {matrix:A,pivots};
}
export function solve(A,b){
  const n=A.length;
  if(!n||A.some(r=>r.length!==n)||b.length!==n)throw Error('Square dimensions required');
  const r=rref(A.map((row,i)=>[...row,b[i]]),1e-12,n);
  if(r.pivots.filter(j=>j<n).length!==n)throw Error('No unique solution');
  const x=r.matrix.map(row=>row[n]);
  if(!x.every(Number.isFinite))throw Error('Solution exceeds finite floating-point range');
  return x;
}
export function pivotedLU(A){
  const n=A.length,U=A.map(r=>[...r]),L=identity(n),P=identity(n);
  const threshold=1e-12*Math.max(0,...A.flat().map(Math.abs));
  if(A.some(r=>r.length!==n))throw Error('Square dimensions required');
  for(let k=0;k<n;k++){
    let p=k;for(let i=k+1;i<n;i++)if(Math.abs(U[i][k])>Math.abs(U[p][k]))p=i;
    if(Math.abs(U[p][k])<=threshold)throw Error('Singular numerical pivot');
    [U[k],U[p]]=[U[p],U[k]];[P[k],P[p]]=[P[p],P[k]];
    for(let j=0;j<k;j++)[L[k][j],L[p][j]]=[L[p][j],L[k][j]];
    for(let i=k+1;i<n;i++){L[i][k]=U[i][k]/U[k][k];for(let j=k;j<n;j++)U[i][j]-=L[i][k]*U[k][j];}
  }
  return {P,L,U};
}
export function qr(A){
  const cols=transpose(A),Q=[],R=Array.from({length:cols.length},()=>cols.map(()=>0));
  for(let j=0;j<cols.length;j++){
    let v=[...cols[j]];
    for(let i=0;i<j;i++){R[i][j]=dot(Q[i],v);v=add(v,scale(Q[i],-R[i][j]));}
    R[j][j]=norm(v);if(R[j][j]<=1e-12*norm(cols[j]))throw Error('Dependent numerical column');
    Q.push(scale(v,1/R[j][j]));
  }
  return {Q:transpose(Q),R};
}
export function svd2(A){
  const magnitude=Math.max(...A.flat().map(Math.abs));
  if(magnitude===0)return {U:identity(2),V:identity(2),sigma:[0,0]};
  const B=A.map(row=>row.map(x=>x/magnitude));
  const [x,y]=transpose(B),p=dot(x,x),q=dot(x,y),r=dot(y,y);
  const angle=.5*Math.atan2(2*q,p-r),v1=[Math.cos(angle),Math.sin(angle)],v2=[-Math.sin(angle),Math.cos(angle)];
  const s1=Math.sqrt(Math.max(0,(p+r+Math.hypot(p-r,2*q))/2));
  const det=determinant2(B),s2=Math.abs(det)/s1;
  const u1=scale(matvec(B,v1),1/s1),orientation=det<0?-1:1;
  const u2=scale([-u1[1],u1[0]],orientation);
  return {U:transpose([u1,u2]),V:transpose([v1,v2]),sigma:[s1*magnitude,s2*magnitude]};
}
export function matrixPower(A,n){
  if(!Number.isInteger(n)||n<0)throw Error('Nonnegative integer exponent required');
  let out=identity(A.length),base=A;
  for(;n;n=Math.floor(n/2)){if(n%2)out=multiply(out,base);base=multiply(base,base);}
  return out;
}
export function linearControls(id){
  const model=catalog.models[id];if(!model)throw Error('Unknown linear algebra model '+id);
  return catalog.families[model.family].controls.map(c=>({...c}));
}
export const linearDefaults=id=>Object.fromEntries(linearControls(id).map(c=>[c.key,c.value]));
export const linearBounds=id=>Object.fromEntries(linearControls(id).map(c=>[c.key,[c.min,c.max]]));
export function assertLinearParameters(id,p){
  for(const c of linearControls(id))if(!Number.isFinite(p[c.key])||p[c.key]<c.min||p[c.key]>c.max||(c.step>=1&&!Number.isInteger(p[c.key])))throw Error(id+': invalid '+c.key);
}
export function linearPlayback(id,seed,elapsed){
  const controls=linearControls(id),c=controls.find(c=>!c.options)??controls[0],t=Math.max(0,Math.min(1,elapsed/6));
  let value=seed[c.key]+(c.max-seed[c.key])*t;
  if(c.step>=1)value=Math.round(value);
  return {key:c.key,value:t===1?c.max:value,done:t===1};
}
const green='#b0d5a2',blue='#7dc9db',gold='#f1c779',red='#e8968a';
const fmt=x=>Math.abs(x)<1e-12&&x!==0?x.toExponential(3):Number(x.toPrecision(7)).toString();
const tex=x=>{const s=fmt(x);return /e/.test(s)?s.replace(/e([+-]?\d+)/,'\\times10^{$1}'):s;};
export const matrixLatex=A=>'\\begin{pmatrix}'+A.map(r=>r.map(tex).join('&')).join('\\\\')+'\\end{pmatrix}';
const vectorLatex=x=>matrixLatex(x.map(v=>[v]));

export function linearFrame(id,params={}){
  const p={...linearDefaults(id),...params};assertLinearParameters(id,p);
  const family=catalog.models[id].family;
  const f={dimension:catalog.models[id].dimension,lines:[],polygons:[],arrows:[],dots:[],stats:[],formula:'',matrix:'',note:'图形使用有限网格；数学结论还须满足正文条件。',extent:3.2,focus:[0,0,0]};
  const line=(label,points,color=green,dash=false)=>f.lines.push({label,points:points.map(p3),color,dash});
  const poly=(points,color=green,opacity=.13)=>f.polygons.push({points:points.map(p3),color,opacity});
  const arrow=(label,at,vector,color=green)=>f.arrows.push({label,at:p3(at),vector:p3(vector),color});
  const point=(at,label='',color=gold)=>f.dots.push({at:p3(at),label,color});
  const stat=(label,value)=>f.stats.push({label,value:typeof value==='number'?fmt(value):value});
  const path=(fn,a=0,b=2*Math.PI,n=80)=>Array.from({length:n+1},(_,i)=>fn(a+(b-a)*i/n));
  const circle=A=>path(t=>matvec(A,[Math.cos(t),Math.sin(t)]));
  const plane=(u,v,color=green)=>poly([add(scale(u,-1.5),scale(v,-1.5)),add(scale(u,1.5),scale(v,-1.5)),add(scale(u,1.5),scale(v,1.5)),add(scale(u,-1.5),scale(v,1.5))],color,.1);
  const grid=(A,color,label='')=>{
    for(let i=-2;i<=2;i++){line(i===-2?label:'',[matvec(A,[-2,i]),matvec(A,[2,i])],color);line('',[matvec(A,[i,-2]),matvec(A,[i,2])],color);}
  };
  const mapped=(A,showInput=true)=>{
    if(showInput){grid(identity(2),blue,'原网格');line('原单位圆',circle(identity(2)),blue,true);}
    grid(A,green,'变换后网格');line('单位圆的像',circle(A),green);
    arrow('第一列',[0,0],transpose(A)[0],green);arrow('第二列',[0,0],transpose(A)[1],blue);
  };
  if(family==='combination'||family==='orthogonal'){
    const u=family==='orthogonal'?[1,1]:[1,0],v=family==='orthogonal'?[1,-1]:[1,1],a=scale(u,p.a),b=scale(v,p.b),w=add(a,b);
    arrow('第一部分',[0,0],a,green);arrow('第二部分',a,b,blue);arrow('合向量',[0,0],w,gold);
    line('另一种相加顺序',[[0,0],b,w],blue,true);
    stat('第一系数',p.a);stat('第二系数',p.b);stat('结果坐标','$'+vectorLatex(w)+'$');
    if(family==='orthogonal')stat('两部分点积',dot(a,b));
    f.formula=family==='orthogonal'?'v=a(1,1)+b(1,-1)':'w=a(1,0)+b(1,1)';
    f.extent=4.5;
  } else if(family==='systems'){
    line('第一条约束',[[-3,5],[5,-3]],blue);
    line('第二条约束',[[p.b+3*p.c,-3],[p.b-3*p.c,3]],green);
    const det=p.c-1;
    f.matrix=matrixLatex([[1,1],[1,p.c]]);
    f.formula='x+y=2,\\qquad x+cy=b';
    stat('系数行列式',det);stat('系数秩',det===0?1:2);
    if(det===0){stat('解的情况',p.b===2?'无穷多解':'无解');stat('增广矩阵秩',p.b===2?1:2);}
    else{
      // The symbolic quotient remains available even if it would overflow or lie outside the plot.
      const y=(p.b-2)/det,x=2-y;
      if(Number.isFinite(x)&&Number.isFinite(y))stat('唯一解','$'+vectorLatex([x,y])+'$');
      else stat('唯一解',"$y=\\frac{b-2}{c-1},\\ x=2-y$");
      if(Math.abs(x)<6&&Math.abs(y)<6)point([x,y]);else f.note+=' 交点超出当前视窗；没有画出的交点仍可能存在。';
      stat('增广矩阵秩',2);
    }
    f.extent=3.8;f.focus=[1,1,0];
  } else if(family==='elimination'){
    const matrices=[[[1,1,3],[2,3,8]],[[1,1,3],[0,1,2]],[[1,0,1],[0,1,2]]];
    const M=matrices[p.n];
    for(let i=0;i<2;i++){const [a,b,c]=M[i];line(i===0?'第一条等价约束':'第二条等价约束',b!==0?[[-3,(c+3*a)/b],[4,(c-4*a)/b]]:[[c/a,-3],[c/a,4]],i===0?blue:green);}
    point([1,2]);f.matrix="\\left[\\begin{array}{cc|c}"+M.map(r=>r.map(tex).join('&')).join('\\\\')+"\\end{array}\\right]";
    f.formula='\\text{每一步的解集相同}';stat('当前步骤',p.n+1);stat('唯一解',"$(1,2)$");stat('系数秩',2);
    f.extent=3.8;f.focus=[1,1,0];
  } else if(family==='affine'){
    line('全部解的直线',[[-1,1,2],[3,1,-2]],green);arrow('特解',[0,0,0],[1,1,0],blue);
    const x=[1-p.x,1,p.x];point(x);arrow('齐次位移',[1,1,0],[-p.x,0,p.x],gold);
    stat('第一式左侧',x[0]+x[1]+x[2]);stat('第二式左侧',x[0]-x[1]+x[2]);stat('解坐标','$'+vectorLatex(x)+'$');
    f.formula='x_p=(1,1,0),\\quad z=t(-1,0,1)';
  } else if(['transform','inverse','det-shear','coordinates','jordan','diagonalization','cholesky'].includes(family)){
    let A;
    if(family==='transform')A=[[p.a,p.b],[p.c,p.h]];
    if(family==='inverse')A=[[1,p.c],[0,p.a]];
    if(family==='det-shear'||family==='coordinates'||family==='jordan')A=[[1,p.c],[0,1]];
    if(family==='diagonalization')A=[[2,-p.c],[0,1]];
    if(family==='cholesky')A=[[1,p.c],[0,1]]; // L transpose, used to display ||L^T x||.
    if(family==='coordinates'){
      const first=[1-p.c,0],second=[p.c,1];
      arrow('第一基向量',[0,0],[1,0],green);arrow('第二基向量',[0,0],second,blue);
      arrow('第一坐标贡献',[0,0],first,green);arrow('第二坐标贡献',first,second,blue);arrow('固定向量',[0,0],[1,1],gold);
      f.matrix=matrixLatex(A);f.formula='v=P_B[v]_B';stat('基坐标','$'+vectorLatex([1-p.c,1])+'$');stat('标准坐标',"$(1,1)$");
    }else if(family==='diagonalization'){
      mapped(A);arrow('第二特征方向',[0,0],[p.c,1],gold);
      f.formula='A=S\\operatorname{diag}(2,1)S^{-1},\\quad S='+matrixLatex([[1,p.c],[0,1]]);
      f.matrix=matrixLatex(A);stat('特征值一',2);stat('特征值二',1);stat('特征基行列式',1);
    }else if(family==='cholesky'){
      mapped(A);f.formula='q(x,y)=(x+cy)^2+y^2=\\|L^T(x,y)\\|^2';
      const B=multiply(transpose(A),A);f.matrix='A='+matrixLatex(B)+',\\quad L='+matrixLatex(transpose(A));
      stat('行列式',1);stat('最小特征值',2/(2+p.c*p.c+Math.hypot(p.c*p.c,2*p.c)));stat('正定性','正定');
    }else{
      mapped(A);const y=matvec(A,[1,1]);arrow('输入 $(1,1)$ 的像',[0,0],y,gold);f.matrix='A='+matrixLatex(A);
      const det=determinant2(A);stat('行列式',det);
      if(family==='inverse'){
        f.formula=p.a===0?'\\ker A\\ne\\{0\\},\\quad A^{-1}\\text{ 不存在}':'A^{-1}=\\begin{pmatrix}1&-c/a\\\\0&1/a\\end{pmatrix}';
        stat('可逆性',p.a===0?'不可逆':'可逆');stat('输出坐标','$'+vectorLatex(y)+'$');
      }else if(family==='jordan'){
        f.formula='p_A(\\lambda)=(\\lambda-1)^2';stat('代数重数',2);stat('几何重数',p.c===0?2:1);stat('可对角化',p.c===0?'可以':'不可以');
        if(p.c!==0)line('唯一特征直线',[[-3,0],[3,0]],gold);
      }else if(family==='det-shear'){
        poly([[0,0],[1,0],[1+p.c,1],[p.c,1]],green,.2);f.formula='\\det A=1,\\quad\\text{面积}=1';stat('面积倍率',1);stat('剪切系数',p.c);
      }else{
        const s=svd2(A).sigma,threshold=1e-9*Math.max(1,s[0]);
        stat('数值秩',s.filter(x=>x>threshold).length);stat('最大奇异值',s[0]);stat('最小奇异值',s[1]);
        f.formula='Ax=x_1a_1+x_2a_2';f.note+=' 此通用矩阵面板的数值秩使用相对尺度 1e-9 的阈值；接近退化时不把它当精确秩证明。';
      }
    }
    f.extent=4.5;
  } else if(family==='composition'){
    const u=[Math.cos(p.a),Math.sin(p.a)],S=[[1,1],[0,1]],D=[[2,0],[0,1]],first=p.n===0?S:D,last=p.n===0?D:S,y=matvec(first,u),z=matvec(last,y);
    arrow('原输入',[0,0],u,blue);arrow('中间向量',[0,0],y,green);arrow('最终输出',[0,0],z,gold);
    f.matrix=p.n===0?'DS='+matrixLatex(multiply(D,S)):'SD='+matrixLatex(multiply(S,D));f.formula=p.n===0?'x\\mapsto Sx\\mapsto DSx':'x\\mapsto Dx\\mapsto SDx';
    stat('中间坐标','$'+vectorLatex(y)+'$');stat('最终坐标','$'+vectorLatex(z)+'$');
  } else if(family==='span'){
    const u=[1,0,0],v=[1,p.c,0];arrow('第一生成向量',[0,0,0],u,green);arrow('第二生成向量',[0,0,0],v,blue);
    poly([[0,0,0],u,add(u,v),v],gold,.18);
    if(p.c!==0)plane([1,0,0],[0,1,0]);else line('张成直线',[[-2,0,0],[2,0,0]],green);
    stat('生成向量个数',2);stat('张成维数',p.c===0?1:2);stat('线性无关',p.c===0?'否':'是');f.formula='\\operatorname{span}((1,0,0),(1,c,0))';
  } else if(family==='rank'){
    const A=[[1,0,0],[0,p.c,0],[0,0,0]];f.matrix=matrixLatex(A);
    if(p.c===0){line('像：横轴',[[-2,0,0],[2,0,0]],green);plane([0,1,0],[0,0,1],blue);}
    else{plane([1,0,0],[0,1,0],green);line('核：竖轴',[[0,0,-2],[0,0,2]],blue);}
    stat('输入维数',3);stat('秩',p.c===0?1:2);stat('零度',p.c===0?2:1);f.formula='\\operatorname{rank}A+\\dim\\ker A=3';
  } else if(family==='kernel'){
    const v=[-p.c,1],x=scale(v,p.x);line('核直线',[scale(v,-2),scale(v,2)],green);arrow('输入核向量',[0,0],x,gold);arrow('行方向',[0,0],[1,p.c],blue);point([0,0],'输出');
    f.matrix=matrixLatex([[1,p.c],[0,0]]);f.formula='A(-ct,t)^T=0';stat('输入','$'+vectorLatex(x)+'$');stat('输出',"$(0,0)$");stat('与行方向点积',dot(x,[1,p.c]));
  } else if(family==='fundamental'){
    f.matrix=matrixLatex([[1,1,0],[0,0,1]]);
    const names=['零空间','行空间','列空间','左零空间'];stat('当前空间',names[p.n]);stat('维数',[1,2,2,0][p.n]);stat('所在空间',p.n<2?"$\\mathbb R^3$ · 输入端":"$\\mathbb R^2$ · 输出端");
    if(p.n===0)line('核方向',[[-2,2,0],[2,-2,0]],gold);
    if(p.n===1){plane([1,1,0],[0,0,1]);arrow('第一行',[0,0,0],[1,1,0],green);arrow('第二行',[0,0,0],[0,0,1],blue);}
    if(p.n===2){f.dimension=2;plane([1,0,0],[0,1,0]);arrow('第一列',[0,0],[1,0],green);arrow('第三列',[0,0],[0,1],blue);}
    if(p.n===3){f.dimension=2;point([0,0],'仅零向量');}
    f.formula=p.n===0?'\\ker A=\\operatorname{span}((1,-1,0))':p.n===1?'\\operatorname{row}A=\\{(t,t,s)\\}':p.n===2?'\\operatorname{col}A=\\mathbb R^2':'\\ker A^T=\\{0\\}';
  } else if(family==='det-volume'||family==='cofactor'){
    const A=family==='cofactor'?[[1,2,0],[0,3,1],[2,0,1]]:[[1,0,p.c],[0,1,0],[0,0,p.a]];
    const cols=transpose(A),u=cols[0],v=cols[1],w=cols[2],o=[0,0,0],uv=add(u,v),uw=add(u,w),vw=add(v,w),uvw=add(uv,w);
    for(const face of [[o,u,uv,v],[o,u,uw,w],[o,v,vw,w],[w,uw,uvw,vw],[u,uv,uvw,uw],[v,uv,uvw,vw]])poly(face,green,.12);
    cols.forEach((v,i)=>arrow('第 '+(i+1)+' 列',o,v,[green,blue,gold][i]));
    f.matrix=matrixLatex(A);stat('有向体积',family==='cofactor'?7:p.a);stat('几何体积',family==='cofactor'?7:Math.abs(p.a));
    if(family==='cofactor'){stat('当前展开项',[3,4,0][p.n]);f.formula='\\det A=1(3)-2(-2)+0(-6)=7';}
    else f.formula='\\det A=a,\\quad V=|a|';
    f.extent=4;f.focus=[1,1,.5];
  } else if(family==='eigen'){
    const A=[[2,p.c],[p.c,2]],v=[Math.cos(p.a),Math.sin(p.a)],w=matvec(A,v);
    line('第一特征方向',[[-2,-2],[2,2]],green,true);line('第二特征方向',[[-2,2],[2,-2]],green,true);arrow('单位输入',[0,0],v,blue);arrow('输出',[0,0],w,gold);
    f.matrix=matrixLatex(A);f.formula='\\lambda_1=2+c,\\quad\\lambda_2=2-c';stat('特征值一',2+p.c);stat('特征值二',2-p.c);stat('输入与输出的有向面积',v[0]*w[1]-v[1]*w[0]);
    f.extent=3.8;
  } else if(family==='complex'){
    f.axisLabels=['Re','Im'];line('复单位圆',circle(identity(2)),green);point([Math.cos(p.a),Math.sin(p.a)],'λ₊',gold);point([Math.cos(p.a),-Math.sin(p.a)],'λ₋',blue);
    f.matrix=matrixLatex([[Math.cos(p.a),-Math.sin(p.a)],[Math.sin(p.a),Math.cos(p.a)]]);f.formula='\\lambda_\\pm=\\cos\\theta\\pm i\\sin\\theta';
    stat('实部',Math.cos(p.a));stat('虚部幅度',Math.sin(p.a));stat('模长',1);f.extent=1.7;f.note+=' 此图为复平面：横轴实部，纵轴虚部。';
  } else if(family==='dot'){
    const v=[p.b*Math.cos(p.a),p.b*Math.sin(p.a)];arrow('固定单位方向',[0,0],[1,0],green);arrow('另一向量',[0,0],v,blue);
    line('有向水平分量',[[0,0],[v[0],0]],gold);line('垂直辅助线',[[v[0],0],v],gold,true);
    stat('点积',v[0]);stat('另一向量长度',p.b);stat('夹角',p.b===0?'零向量无夹角':'$'+tex(p.a)+'\\,\\mathrm{rad}$');f.formula='u^Tv=b\\cos\\theta';
  } else if(family==='projection'){
    const b=[1,p.a],c=(1+p.a)/2,q=[c,c],r=add(b,scale(q,-1));
    line('目标子空间',[[-2,-2],[2,2]],green);arrow('目标向量',[0,0],b,blue);arrow('正交投影',[0,0],q,green);arrow('余量',q,r,gold);point(q);
    stat('投影系数',c);stat('距离',norm(r));stat('余量与目标方向点积',r[0]+r[1]);f.formula='p=\\frac{1+a}{2}(1,1),\\quad r=(1,a)-p';
  } else if(family==='gram'){
    const r=[0,p.c],a2=[1,p.c];arrow('第一单位方向',[0,0],[1,0],green);arrow('原第二列',[0,0],a2,blue);
    if(p.n>0)arrow('投影后的余量',[0,0],r,gold);
    if(p.n===2&&p.c!==0)arrow('第二单位方向',[0,0],[0,Math.sign(p.c)],gold);
    stat('余量长度',Math.abs(p.c));stat('本步可归一化',p.c===0?'不能：零余量':'可以');stat('列秩',p.c===0?1:2);
    f.matrix='A='+matrixLatex([[1,1],[0,p.c]]);f.formula=p.c===0?'r_2=0\\quad\\text{不能除以零}':'q_2=(0,\\operatorname{sgn}(c)),\\quad R='+matrixLatex([[1,1],[0,Math.abs(p.c)]]);
  } else if(family==='least-squares'){
    const data=[[0,1],[1,2],[2,2]],res=data.map(([x,y])=>y-(p.a*x+p.b));
    line('拟合直线',[[-1,p.b-p.a],[3,3*p.a+p.b]],green);
    data.forEach(([x,y],i)=>{point([x,y],'',blue);line(i===0?'残差':'',[[x,y],[x,p.a*x+p.b]],gold);});
    stat('残差平方和',dot(res,res));stat('最小可能平方和',1/6);stat('常数列与残差点积',res.reduce((a,b)=>a+b,0));stat('横坐标列与残差点积',res[1]+2*res[2]);
    f.formula='\\widehat y=ax+b,\\quad \\min\\sum_i(y_i-ax_i-b)^2';f.extent=3;f.focus=[1,1.5,0];
  } else if(family==='quadratic'){
    const q=(x,y)=>x*x+p.c*y*y;
    for(let i=0;i<12;i++)for(let j=0;j<12;j++){
      const x=-1+i/6,y=-1+j/6,d=1/6;poly([[x,y,q(x,y)],[x+d,y,q(x+d,y)],[x+d,y+d,q(x+d,y+d)],[x,y+d,q(x,y+d)]],green,.14);
    }
    const v=[Math.cos(p.a),Math.sin(p.a)],value=q(...v);line('单位圆',path(t=>[Math.cos(t),Math.sin(t),0]),blue);line('当前二次型高度',[[...v,0],[...v,value]],gold);point([...v,value]);
    f.matrix=matrixLatex([[1,0],[0,p.c]]);f.formula='q=x^2+cy^2,\\quad\\|v\\|=1';stat('当前单位方向值',value);stat('最小特征值',Math.min(1,p.c));stat('最大特征值',Math.max(1,p.c));stat('类型',p.c>0?'正定':p.c===0?'半正定、非正定':'不定');f.extent=2.6;f.focus=[0,0,.3];
  } else if(family==='svd'||family==='low-rank'){
    const a=family==='svd'?p.a:0,s=p.b,R=[[Math.cos(a),-Math.sin(a)],[Math.sin(a),Math.cos(a)]],A=multiply(R,[[2,0],[0,s]]);
    line('原单位圆',circle(identity(2)),blue,true);line('原矩阵的像',circle(A),green);arrow('第一奇异半轴',[0,0],matvec(R,[2,0]),gold);arrow('第二奇异半轴',[0,0],matvec(R,[0,s]),blue);
    f.matrix=matrixLatex(A);stat('第一奇异值',2);stat('第二奇异值',s);stat('原矩阵秩',s===0?1:2);
    if(family==='low-rank'){
      const B=[[2,0],[0,p.n===1?0:s]];line('近似矩阵的像',circle(B),gold);stat('谱范数误差',p.n===1?s:0);f.formula='A_k=\\sum_{i\\le k}\\sigma_i u_iv_i^T';
    }else f.formula='A=R_\\theta\\operatorname{diag}(2,s),\\quad\\sigma_1=2,\\ \\sigma_2=s';
  } else if(family==='pseudoinverse'){
    const d=p.n===0?1:0,A=[[2,0],[0,d]],Ap=[[.5,0],[0,d]],b=[1,p.b],x=[.5,d*p.b],y=matvec(A,x);
    arrow('右端',[0,0],b,blue);arrow('最小范数输入',[0,0],x,gold);arrow('最优输出',[0,0],y,green);line('残差',[y,b],red);
    f.matrix='A='+matrixLatex(A)+',\\quad A^+='+matrixLatex(Ap);f.formula='x_{\\min}=A^+b';stat('最小范数输入','$'+vectorLatex(x)+'$');stat('残差长度',Math.abs(p.b)*(1-d));stat('输入长度',norm(x));
  } else if(family==='conditioning'){
    const original=[1,1],changed=[1,1+p.eps/p.c];arrow('原解',[0,0],original,blue);arrow('扰动后解',[0,0],changed,gold);line('解的改变',[original,changed],red);
    f.matrix=matrixLatex([[1,0],[0,p.c]]);f.formula='b=(1,c),\\quad\\delta b=(0,\\delta),\\quad\\delta x=(0,\\delta/c)';
    stat('条件数',1/p.c);stat('右端扰动长度',Math.abs(p.eps));stat('解扰动长度',Math.abs(p.eps/p.c));stat('解的相对扰动',Math.abs(p.eps/p.c)/Math.SQRT2);
    f.extent=Math.max(3,Math.abs(changed[1])*1.15);f.focus=[0,0,0];
  } else if(family==='markov'){
    f.axisLabels=['p₁','p₂'];const state=n=>[.6+(.5**n)*(p.a-.6),.4-(.5**n)*(p.a-.6)],v=state(p.n);
    line('概率总和为一',[[0,1],[1,0]],green);line('更新轨迹',Array.from({length:p.n+1},(_,n)=>state(n)),blue);
    point([.6,.4],'稳态',green);point(v,'当前分布',gold);stat('第一状态概率',v[0]);stat('第二状态概率',v[1]);stat('总概率',v[0]+v[1]);stat('更新次数',p.n);
    f.matrix=matrixLatex([[.8,.3],[.2,.7]]);f.formula='p_n=(0.6,0.4)+0.5^n(p_0-(0.6,0.4))';f.extent=1;f.focus=[.5,.5,0];
  } else if(family==='recurrence'){
    const state=n=>[p.a**n,.5**n],points=Array.from({length:p.n+1},(_,n)=>state(n));line('迭代轨迹',points,blue);point(points.at(-1),'当前状态');
    f.matrix=matrixLatex([[p.a,0],[0,.5]]);f.formula='x_n=(a^n,2^{-n})';stat('第一分量',points.at(-1)[0]);stat('第二分量',points.at(-1)[1]);stat('迭代次数',p.n);f.extent=Math.max(2,...points.flat().map(x=>Math.abs(x)*1.1));
  } else if(family==='network'){
    const positions=[[0,1.5],[-1.5,-1],[1.5,-1]],flows=[p.a,p.b,p.c];
    positions.forEach((at,i)=>point(at,'节点 '+(i+1),green));
    for(let i=0;i<3;i++){
      const from=positions[i],to=positions[(i+1)%3];line('边 '+(i+1),[from,to],blue);
      const mid=scale(add(from,to),.5),v=scale(add(to,scale(from,-1)),flows[i]/3);arrow('流量 '+(i+1),add(mid,scale(v,-.5)),v,gold);
    }
    const balance=[p.c-p.a,p.a-p.b,p.b-p.c];stat('节点一净流入',balance[0]);stat('节点二净流入',balance[1]);stat('节点三净流入',balance[2]);stat('全网净流入',balance.reduce((a,b)=>a+b,0));
    f.matrix=matrixLatex([[-1,0,1],[1,-1,0],[0,1,-1]]);f.formula='b=Bf=(c-a,a-b,b-c)';f.extent=2.4;f.note+=' 箭头按流量统一缩放显示，负流量反向。';
  } else if(family==='pca'){
    const v=[Math.cos(p.a),Math.sin(p.a)],data=[[2,0],[-2,0],[0,1],[0,-1]];line('投影直线',[scale(v,-2.5),scale(v,2.5)],green);
    let error=0;data.forEach(b=>{const q=scale(v,dot(b,v));point(b,'',blue);point(q,'',green);line('重建残差',[q,b],gold);error+=norm(add(b,scale(q,-1)))**2;});
    const variance=2*v[0]**2+.5*v[1]**2;stat('保留方差',variance);stat('总重建平方误差',error);stat('解释方差比例',variance/2.5);
    f.matrix='C='+matrixLatex([[2,0],[0,.5]]);f.formula='\\operatorname{var}(Xv)=v^TCv,\\quad\\mathrm{SSE}=10-4v^TCv';
  }else throw Error('Unimplemented family '+family);
  if(f.dimension===2){
    for(let i=-3;i<=3;i++){line('',[[-3,i],[3,i]],'#527269');line('',[[i,-3],[i,3]],'#527269');}
  }
  return f;
}
