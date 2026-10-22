import registry from './ode-models.json' with {type:'json'};
const GOLD='#e9c184',BLUE='#78d3e4',GREEN='#b6dcad',PINK='#df9ebc',GRID='#56756a';
const factorial=n=>{let r=1;for(let k=2;k<=n;k++)r*=k;return r;};
const finite=x=>Number.isFinite(x);
const fmt=x=>finite(x)?Math.abs(x)<1e-12?'0':Math.abs(x)<.0001?x.toExponential(3):Number(x.toPrecision(7)).toString():'超出数值范围';
const family=id=>{const f=registry.lessons[id];if(!f)throw Error('Unknown ODE lesson '+id);return f;};
export function odeControls(id){return registry.families[family(id)].controls.map(c=>({...c}));}
export function odeDefaults(id){return Object.fromEntries(odeControls(id).map(c=>[c.key,c.value]));}
export function odeBounds(id){return Object.fromEntries(odeControls(id).map(c=>[c.key,[c.min,c.max]]));}
export function assertOdeParameters(id,p){for(const c of odeControls(id)){const v=p[c.key];if(!finite(v)||v<c.min-1e-12||v>c.max+1e-12||(c.step===1&&!Number.isInteger(v)))throw Error(id+': invalid '+c.key);}}
export function odePlayback(id,seed,elapsed){if(!finite(elapsed)||elapsed<0)throw Error('Invalid elapsed time');const cs=odeControls(id),c=cs.find(c=>c.key==='b')??cs.find(c=>c.key==='n')??cs[0],done=elapsed>=6;let v=seed[c.key]+(c.max-seed[c.key])*Math.min(1,elapsed/6);if(c.step===1)v=Math.round(v);return {key:c.key,value:done?c.max:Math.min(c.max,Math.max(c.min,v)),done};}

export function odeStep(f,t,y,h,method='rk4'){
  if(!finite(t)||!finite(h)||h<=0||!Array.isArray(y)||!y.every(finite))throw Error('Invalid numerical step');
  const evalF=(s,v)=>{const q=f(s,v);if(!Array.isArray(q)||q.length!==y.length||!q.every(finite))throw Error('Non-finite right hand side');return q;};
  const plus=(v,k,scale)=>v.map((x,i)=>x+scale*k[i]);
  const k1=evalF(t,y);if(method==='euler')return plus(y,k1,h);
  if(method==='heun'){const k2=evalF(t+h,plus(y,k1,h));return y.map((v,i)=>v+h*(k1[i]+k2[i])/2);}
  if(method==='midpoint'){const k2=evalF(t+h/2,plus(y,k1,h/2));return plus(y,k2,h);}
  if(method==='implicit-euler')throw Error('Implicit method requires a specific equation solver');
  if(method!=='rk4')throw Error('Unknown method');
  const k2=evalF(t+h/2,plus(y,k1,h/2)),k3=evalF(t+h/2,plus(y,k2,h/2)),k4=evalF(t+h,plus(y,k3,h));
  const next=y.map((v,i)=>v+h*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6);if(!next.every(finite))throw Error('Non-finite step result');return next;
}
export function integrateOde(f,y0,T,{method='rk4',steps=400,limit=1e4}={}){
  if(!finite(T)||T<0||!Number.isInteger(steps)||steps<1||steps>100000||!y0.every(finite))throw Error('Invalid integration request');
  let y=[...y0],t=0;const points=[[0,...y]],h=T/steps;if(T===0)return {points,done:true,time:0};
  for(let i=0;i<steps;i++){let next;try{next=odeStep(f,t,y,h,method);}catch{return {points,done:false,time:t,reason:'右端或更新产生非有限值'};}
    if(next.some(v=>!finite(v)||Math.abs(v)>limit))return {points,done:false,time:t,reason:'状态超过指定数值范围'};
    y=next;t=i===steps-1?T:(i+1)*h;points.push([t,...y]);}
  return {points,done:true,time:T};
}
export function adaptiveHeun(T,tol,{initialStep=.5,minStep=1e-7,maxSteps=20000}={}){
  if(!finite(T)||T<0||!finite(tol)||tol<=0||!finite(initialStep)||initialStep<=0||!finite(minStep)||minStep<=0||!Number.isInteger(maxSteps)||maxSteps<1)throw Error('Invalid adaptive request');
  const f=(_t,v)=>v;let t=0,y=[1],h=initialStep,rejected=0,maxEstimate=0;const points=[[0,1]],estimates=[];
  for(let i=0;i<maxSteps&&t<T;i++){
    h=Math.min(h,T-t);if(h<minStep)return {points,done:false,rejected,maxEstimate,estimates,reason:'步长低于下限'};
    const coarse=odeStep(f,t,y,h,'heun'),half=odeStep(f,t,y,h/2,'heun'),fine=odeStep(f,t+h/2,half,h/2,'heun'),err=Math.abs(fine[0]-coarse[0])/3;
    const accepted=err<=tol;if(accepted){t=Math.min(T,t+h);y=fine;points.push([t,y[0]]);estimates.push(err);maxEstimate=Math.max(maxEstimate,err);}else rejected++;
    const factor=err===0?2:Math.max(.2,Math.min(2,.9*Math.cbrt(tol/err)));h*=factor;
  }
  return {points,done:t===T,rejected,maxEstimate,estimates,...(t<T?{reason:'超过最大尝试步数'}:{})};
}
export function dampedState(c,t){
  if(c<0||!finite(c)||!finite(t))throw Error('Invalid damping');
  if(Math.abs(c-2)<1e-10)return [(1+t)*Math.exp(-t),-t*Math.exp(-t)];
  if(c<2){const d=c/2,w=Math.sqrt(1-d*d),e=Math.exp(-d*t);return [e*(Math.cos(w*t)+d/w*Math.sin(w*t)),-e*Math.sin(w*t)/w];}
  const d=Math.sqrt(c*c-4),r1=(-c+d)/2,r2=(-c-d)/2,C=-r2/(r1-r2),D=r1/(r1-r2);return [C*Math.exp(r1*t)+D*Math.exp(r2*t),C*r1*Math.exp(r1*t)+D*r2*Math.exp(r2*t)];
}
export function forcedResponse(w,t){
  if(!finite(w)||!finite(t)||w<=0)throw Error('Invalid forcing');
  // Stable product-of-sines form has the correct resonant limit.
  const sinc=x=>Math.abs(x)<1e-5?1-x*x/6+x**4/120:Math.sin(x)/x;
  return t*Math.sin((1+w)*t/2)*sinc((1-w)*t/2)/(1+w);
}
export function besselJ0(t,terms=40){let term=1,sum=1;for(let k=1;k<terms;k++){term*=-t*t/(4*k*k);sum+=term;}return sum;}
export function bifurcationSolution(mu,y0,t){
  if(mu===0)return {value:y0/(1+y0*t),end:y0<0?-1/y0:Infinity};
  if(mu<0){const k=Math.sqrt(-mu),angle=Math.atan(y0/k),end=(angle+Math.PI/2)/k;return {value:k*Math.tan(angle-k*t),end};}
  const k=Math.sqrt(mu),end=y0< -k?-Math.log((y0+k)/(y0-k))/(2*k):Infinity,e=Math.exp(-2*k*t);
  return {value:k*((y0+k)+(y0-k)*e)/((y0+k)-(y0-k)*e),end};
}

export function odeFrame(id,params={}){
  const p={...odeDefaults(id),...params};assertOdeParameters(id,p);const k=family(id),spec=registry.families[k],{a=0,b=1,c=0,n=4,h=.1,eps=.1}=p;
  const frame={dimension:2,axisLabels:['t','y'],lines:[],polygons:[],arrows:[],dots:[],stats:[],formula:spec.formula,note:'有限图示用于比较模型；局部结论、收敛和稳定性仍须满足正文条件。',extent:4,focus:[2,0,0]};
  let outsideWindow=false;
  const line=(label,points,color=GOLD,dash=false)=>{let run=[];for(const q of points){const v=q.length===2?[...q,0]:q;if(v.every(finite)&&Math.abs(v[0])<=1e3&&Math.abs(v[1])<=30){run.push(v);}else{outsideWindow=true;if(run.length>1)frame.lines.push({label,points:run,color,dash});run=[];}}if(run.length>1)frame.lines.push({label,points:run,color,dash});};
  const curve=(label,fn,T=4,color=GOLD,start=0)=>line(label,Array.from({length:241},(_,i)=>{const t=start+(T-start)*i/240;return [t,fn(t)];}),color);
  const stat=(label,value)=>frame.stats.push({label,value:typeof value==='number'?fmt(value):value});
  const dot=(x,y,label='',color=GOLD)=>{if([x,y].every(finite)&&Math.abs(y)<=30)frame.dots.push({at:[x,y,0],label,color});};
  const scalar=(fn,{T=4,start=0,label='解析解',color=GOLD,current=b,end=Infinity}={})=>{curve(label,t=>t<end?fn(t):NaN,Math.min(T,end>0?end*.9999:T),color,start);if(current<end){stat('当前函数值',fn(current));dot(current,fn(current),'当前状态',color);if(Math.abs(fn(current))>30)frame.note+=' 当前状态超过绘图范围，读数仍保留。';}else{stat('解的状态','请求时间已达解端点');stat('前向端点',end);frame.note+=' 未在解端点之后继续生成状态。';}};
  const horizontal=(value,label,color=GREEN)=>line(label,[[0,value],[6,value]],color,true);
  const field=(f,xlo=0,xhi=4,ylo=-2,yhi=3,phase=false)=>{for(let i=0;i<=10;i++)for(let j=0;j<=10;j++){const x=xlo+(xhi-xlo)*i/10,y=ylo+(yhi-ylo)*j/10,v=phase?f(x,y):[1,f(x,y)],len=Math.hypot(...v);if(len>1e-12&&finite(len))line('',[[x-.09*v[0]/len,y-.09*v[1]/len],[x+.09*v[0]/len,y+.09*v[1]/len]],GRID);}};
  const phase=(f,y0,{exact=null,T=b}={})=>{
    frame.axisLabels=['x','y'];frame.focus=[0,0,0];frame.extent=3;field((x,y)=>f(0,[x,y]),-2,2,-2,2,true);
    if(exact){const ps=Array.from({length:321},(_,i)=>exact(T*i/320));line('相轨迹',ps);const q=exact(T);dot(...q,'当前状态');stat('第一状态',q[0]);stat('第二状态',q[1]);}
    else{const result=integrateOde(f,y0,T,{steps:800,limit:30});line('RK4 近似轨迹',result.points.map(q=>q.slice(1)));const last=result.points.at(-1);dot(last[1],last[2],'最后接受状态');stat('第一状态',last[1]);stat('第二状态',last[2]);stat('到达时间',result.time);stat('求解状态',result.done?'已到目标时间':result.reason);if(!result.done)frame.note+=' 数值轨迹提前停止，未宣称到达目标。';}
    dot(...y0,'初始状态',BLUE);
  };
  switch(k){
    case 'exponential':scalar(t=>c*Math.exp(a*t),{T:3});stat('比例系数',a);break;
    case 'field':field((t,y)=>y-t);scalar(t=>t+1+(a-1)*Math.exp(t),{T:3});dot(0,a,'初始值',BLUE);stat('当前斜率',1+(a-1)*Math.exp(b));break;
    case 'blowup':{const end=1/a;scalar(t=>a/(1-a*t),{T:3,end});stat('爆破时间',end);horizontal(0,'零平衡');break;}
    case 'separable':scalar(t=>a*Math.exp(t*t/2),{T:3});horizontal(0,'零解');stat('当前变化率',b*a*Math.exp(b*b/2));break;
    case 'linear':scalar(t=>1+(a-1)*Math.exp(-t));horizontal(1,'稳态');stat('距稳态',Math.abs(a-1)*Math.exp(-b));break;
    case 'exact':{frame.focus=[0,0,0];frame.extent=3;line('隐式等值线',Array.from({length:241},(_,i)=>[a*Math.cos(2*Math.PI*i/240),a*Math.sin(2*Math.PI*i/240)]));dot(a*Math.cos(b),a*Math.sin(b),'等值线上的点');stat('势函数值',a*a);stat('当前横坐标',a*Math.cos(b));stat('当前纵坐标',a*Math.sin(b));break;}
    case 'homogeneous':scalar(t=>t*(Math.log(t)+a),{start:.05,T:3});stat('当前比值',Math.log(b)+a);break;
    case 'logistic':scalar(t=>1/(1+(1/a-1)*Math.exp(-t)),{T:6});horizontal(1,'承载量');horizontal(0,'零平衡');stat('当前变化率',(()=>{const v=1/(1+(1/a-1)*Math.exp(-b));return v*(1-v);})());break;
    case 'nonunique':scalar(t=>Math.max(0,t-a)**3,{T:3,label:'等待后离开的解'});horizontal(0,'零解',BLUE);stat('等待时间',a);break;
    case 'picard':{const fn=t=>Array.from({length:n+1},(_,j)=>t**j/factorial(j)).reduce((x,y)=>x+y,0);scalar(fn,{T:2,label:'Picard 近似'});curve('精确指数',Math.exp,2,BLUE);stat('当前绝对误差',Math.abs(Math.exp(b)-fn(b)));break;}
    case 'sensitivity':scalar(t=>Math.exp(a*t),{T:3,label:'初值一'});curve('偏移初值',t=>(1+eps)*Math.exp(a*t),3,BLUE);stat('实际初值差',eps);stat('当前绝对差',eps*Math.exp(a*b));break;
    case 'oscillator':scalar(t=>Math.cos(a*t),{T:6,label:'位移'});curve('速度',t=>-a*Math.sin(a*t),6,BLUE);stat('周期',2*Math.PI/a);stat('当前速度',-a*Math.sin(a*b));frame.motion={position:Math.cos(a*b),velocity:-a*Math.sin(a*b),time:b,range:1};break;
    case 'wronskian':scalar(Math.cos,{T:6,label:'第一基解'});curve('第二基解',Math.sin,6,BLUE);stat('Wronskian',1);stat('第二基值',Math.sin(b));break;
    case 'real-roots':scalar(t=>Math.exp(a*t),{T:3,label:'第一指数'});curve('第二指数',t=>Math.exp(c*t),3,BLUE);stat('Wronskian',(c-a)*Math.exp((a+c)*b));stat('独立性',a===c?'根相同，不能作为独立基':'两根不同，独立');break;
    case 'repeated':scalar(t=>t*Math.exp(a*t),{label:'时间乘指数'});curve('指数基解',t=>Math.exp(a*t),4,BLUE);stat('Wronskian',Math.exp(2*a*b));break;
    case 'forcing':scalar(t=>forcedResponse(a,t),{T:8,label:'零初值响应'});curve('外力',t=>Math.cos(a*t),8,BLUE);stat('驱动角频率',a);stat('共振状态',a===1?'严格共振':'非共振');frame.motion={position:forcedResponse(a,b),velocity:(forcedResponse(a,b+1e-5)-forcedResponse(a,b-1e-5))/2e-5,time:b,range:5};break;
    case 'variation':scalar(t=>t*Math.log(t)-t,{T:3,start:.05,label:'特解'});curve('一阶导数',Math.log,3,BLUE,.05);stat('二阶导数',1/b);break;
    case 'damping':{scalar(t=>dampedState(a,t)[0],{T:8,label:'位移'});const [y,v]=dampedState(a,b);stat('当前速度',v);stat('机械能',(y*y+v*v)/2);stat('耗散率',-a*v*v);stat('阻尼类型',a<2?'欠阻尼':a===2?'临界阻尼':'过阻尼');frame.motion={position:y,velocity:v,time:b,range:1};break;}
    case 'frequency':{frame.axisLabels=['ω','A'];const fn=w=>1/Math.hypot(1-w*w,c*w);curve('稳态幅值',fn,3);dot(a,fn(a),'所选频率');stat('稳态幅值',fn(a));stat('相位滞后',Math.atan2(c*a,1-a*a));stat('正频率峰',c*c<2?fmt(Math.sqrt(1-c*c/2)):'没有');break;}
    case 'higher':scalar(t=>Math.exp(t),{label:'增长基解'});curve('衰减基解',t=>Math.exp(-t),4,BLUE);horizontal(1,'常数基解');stat('衰减基值',Math.exp(-b));break;
    case 'cauchy':case 'log-series':scalar(t=>1+a*Math.log(t),{T:3,start:.05});stat('当前一阶导数',a/b);break;
    case 'state':phase((_t,[x,v])=>[v,-x],[a,c],{exact:t=>[a*Math.cos(t)+c*Math.sin(t),-a*Math.sin(t)+c*Math.cos(t)]});frame.axisLabels=['x','v'];stat('机械能',(a*a+c*c)/2);break;
    case 'boundary':scalar(t=>Math.sin(n*Math.PI*t),{T:1});frame.extent=1.3;frame.focus=[.5,0,0];stat('特征值',(n*Math.PI)**2);stat('模式编号',n);break;
    case 'laplace':{const d=a-c,fn=t=>Math.exp(d*t),I=Math.abs(d)<1e-8?b*Math.expm1(d*b)/(d*b||1):Math.expm1(d*b)/d;scalar(fn,{T:6,label:'被积函数'});stat('截断积分',d===0?b:I);stat('无穷积分',c>a?fmt(1/(c-a)):'发散');stat('收敛条件',c>a?'已满足':'未满足');break;}
    case 'laplace-ivp':scalar(t=>1-Math.exp(-t),{label:'解析响应'});horizontal(1,'恒定输入',BLUE);stat('初值',0);break;
    case 'step':{const fn=t=>t<a?0:1-Math.exp(-(t-a));scalar(fn,{T:6,label:'连续响应'});line('阶跃输入',[[0,0],[a,0]],BLUE);line('阶跃输入',[[a,1],[6,1]],BLUE);stat('开关时刻',a);stat('已开启时长',Math.max(0,b-a));break;}
    case 'impulse':scalar(t=>t<a?0:c*Math.sin(t-a),{T:6,label:'位移响应'});frame.arrows.push({label:'冲激时刻（符号）',at:[a,0,0],vector:[0,c,0],color:BLUE});stat('当前速度',b<a?0:c*Math.cos(b-a));stat('速度跳跃',c);break;
    case 'convolution':{frame.axisLabels=['τ','输入贡献'];const fn=tau=>Math.exp(-(a-tau));curve('卷积被积函数',fn,a);const ps=Array.from({length:81},(_,i)=>[a*i/80,fn(a*i/80),0]);frame.polygons.push({points:[[0,0,0],...ps,[a,0,0]],color:GOLD,opacity:.18});stat('当前时刻',a);stat('累积响应',1-Math.exp(-a));break;}
    case 'phase':phase((_t,[x,y])=>[a*x,c*y],[1,1],{exact:t=>[Math.exp(a*t),Math.exp(c*t)]});stat('类型',a*c<0?'鞍点':a<0&&c<0?'吸引节点':a>0&&c>0?'排斥节点':'包含零特征值');break;
    case 'matrix-exp':phase((_t,[x,y])=>[y,0],[a,c],{exact:t=>[a+c*t,c]});frame.matrix=String.raw`e^{At}=\begin{pmatrix}1&${fmt(b)}\\0&1\end{pmatrix}`;break;
    case 'defective':phase((_t,[x,y])=>[a*x+y,a*y],[0,1],{exact:t=>[t*Math.exp(a*t),Math.exp(a*t)]});stat('重复特征值',a);break;
    case 'spiral':phase((_t,[x,y])=>[a*x-c*y,c*x+a*y],[1,0],{exact:t=>[Math.exp(a*t)*Math.cos(c*t),Math.exp(a*t)*Math.sin(c*t)]});stat('当前半径',Math.exp(a*b));break;
    case 'system-forcing':phase((_t,[x,y])=>[1-x,2-2*y],[a,c],{exact:t=>[1+(a-1)*Math.exp(-t),1+(c-1)*Math.exp(-2*t)]});dot(1,1,'稳态',GREEN);break;
    case 'nonlinear':{const end=a>1?Math.log(a/(a-1)):Infinity,fn=t=>[a/(a+(1-a)*Math.exp(t)),c*Math.exp(-t)];phase((_t,[x,y])=>[-x+x*x,-y],[a,c],{exact:fn,T:Math.min(b,end*.999)});line('局部线性轨迹',Array.from({length:161},(_,i)=>{const t=b*i/160;return [a*Math.exp(-t),c*Math.exp(-t)];}),BLUE);if(b>=end){stat('解的状态','请求时间已达爆破端点');stat('端点时间',end);}break;}
    case 'predator':phase((_t,[x,y])=>[x*(1-y),y*(x-1)],[a,c]);line('横分量零增长线',[[-2,1],[3,1]],GREEN,true);line('纵分量零增长线',[[1,-2],[1,3]],PINK,true);break;
    case 'pendulum':{phase((_t,[theta,v])=>[v,-Math.sin(theta)-c*v],[a,0]);frame.axisLabels=['θ','v'];const s=frame.stats,theta=Number(s.find(x=>x.label==='第一状态').value),v=Number(s.find(x=>x.label==='第二状态').value);stat('机械能',v*v/2+1-Math.cos(theta));stat('能量变化率',-c*v*v);break;}
    case 'bifurcation':{const end=bifurcationSolution(a,c,0).end;scalar(t=>bifurcationSolution(a,c,t).value,{T:3,end});if(a>=0){horizontal(Math.sqrt(a),'稳定侧平衡');if(a>0)horizontal(-Math.sqrt(a),'不稳定平衡',PINK);}stat('固定参数',a);if(a===0)frame.note+=' 零参数的重平衡整体不稳定，正侧吸引。';break;}
    case 'series':{const fn=t=>Array.from({length:Math.floor(n/2)+1},(_,j)=>(-1)**j*t**(2*j)/factorial(2*j)).reduce((x,y)=>x+y,0);scalar(fn,{T:3,label:'Taylor 截断'});curve('精确余弦',Math.cos,3,BLUE);stat('绝对误差',Math.abs(fn(b)-Math.cos(b)));const m=Math.floor(n/2);stat('方程残差',Math.abs((-1)**m*b**(2*m)/factorial(2*m)));break;}
    case 'frobenius':scalar(t=>t**a,{T:3,start:.05});stat('指标根参数',a);stat('方程系数',-a*a);break;
    case 'bessel':scalar(t=>besselJ0(t,n),{T:4,label:'有限部分和'});curve('收敛级数参考',t=>besselJ0(t,40),4,BLUE);stat('与参考差',Math.abs(besselJ0(b,n)-besselJ0(b,40)));stat('使用项数',n);break;
    case 'euler':case 'heun':case 'rk4':case 'error':{
      curve('精确指数',Math.exp,b,GREEN);for(const [method,color,label] of [['euler',GOLD,'Euler'],['heun',BLUE,'Heun'],['rk4',PINK,'RK4']]){const res=integrateOde((_t,v)=>v,[1],b,{method,steps:n});line(label,res.points.map(q=>q.slice(0,2)),color);for(const q of res.points)dot(q[0],q[1],'',color);stat(label+' 终点误差',Math.abs(res.points.at(-1)[1]-Math.exp(b)));}stat('步长',b/n);frame.extent=Math.max(3,Math.min(11,Math.exp(b)*.55));frame.focus=[b/2,Math.exp(b)/2,0];break;}
    case 'stability':{
      const T=h*n;curve('精确衰减',t=>Math.exp(a*t),T,GREEN);const ee=Array.from({length:n+1},(_,i)=>[i*h,(1+h*a)**i]),ie=Array.from({length:n+1},(_,i)=>[i*h,(1/(1-h*a))**i]);line('显式 Euler',ee);line('隐式 Euler',ie,BLUE);stat('显式放大因子',1+h*a);stat('隐式放大因子',1/(1-h*a));stat('显式稳定性',Math.abs(1+h*a)<1?'衰减稳定':Math.abs(1+h*a)===1?'边界，不衰减':'不稳定');if(ee.some(q=>Math.abs(q[1])>30))frame.note+=' 显式数值状态已超出绘图范围，未压低或伪造曲线。';break;}
    case 'adaptive':{const r=adaptiveHeun(b,a);curve('精确指数',Math.exp,b,GREEN);line('自适应 Heun',r.points);for(const q of r.points)dot(q[0],q[1],'',GOLD);stat('接受步数',r.points.length-1);stat('拒绝次数',r.rejected);stat('最大接受误差估计',r.maxEstimate);stat('实际终点误差',Math.abs(r.points.at(-1)[1]-Math.exp(b)));stat('求解状态',r.done?'已到目标时间':r.reason);break;}
    default:throw Error('Missing ODE family '+k);
  }
  const points=[...frame.lines.flatMap(l=>l.points),...frame.dots.map(d=>d.at)];
  if(points.length){const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),lo=Math.min(...ys),hi=Math.max(...ys);frame.focus=[(Math.min(...xs)+Math.max(...xs))/2,(lo+hi)/2,0];frame.extent=Math.max(1.2,(hi-lo)*.65,(Math.max(...xs)-Math.min(...xs))*.4);}
  if(outsideWindow)frame.note+=' 曲线超过有限绘图范围的部分已截去，不连接越界点，也不据此断言爆破。';
  if(frame.stats.length<2)stat('观察位置',b);
  return frame;
}
