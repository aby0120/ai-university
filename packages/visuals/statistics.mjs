/** Numerical kernels for the static probability textbook. All parameters are explicit. */
const finite=Number.isFinite;
function positive(x){if(!finite(x)||x<=0)throw Error('Expected positive finite parameter');}
function probability(p){if(!finite(p)||p<0||p>1)throw Error('Expected probability in [0,1]');}
export function logGamma(z){
 positive(z);const c=[.99999999999980993,676.5203681218851,-1259.1392167224028,771.32342877765313,-176.61502916214059,12.507343278686905,-.13857109526572012,9.984369578019572e-6,1.5056327351493116e-7];
 if(z<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*z))-logGamma(1-z);
 z-=1;let x=c[0];for(let i=1;i<c.length;i++)x+=c[i]/(z+i);const t=z+7.5;return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x);
}
export function gammaQ(a,x){
 positive(a);if(!finite(x)||x<0)throw Error('Invalid gamma argument');if(x===0)return 1;
 const scale=Math.exp(a*Math.log(x)-x-logGamma(a));
 if(x<a+1){let term=1/a,sum=term;for(let i=1;i<2000;i++){term*=x/(a+i);sum+=term;if(Math.abs(term)<Math.abs(sum)*2e-15)break;}return Math.max(0,Math.min(1,1-sum*scale));}
 const tiny=1e-300;let b=x+1-a,c=1/tiny,d=1/b,h=d;
 for(let i=1;i<2000;i++){const an=-i*(i-a);b+=2;d=an*d+b;if(Math.abs(d)<tiny)d=tiny;c=b+an/c;if(Math.abs(c)<tiny)c=tiny;d=1/d;const delta=d*c;h*=delta;if(Math.abs(delta-1)<2e-15)break;}
 return Math.max(0,Math.min(1,scale*h));
}
function betaFraction(a,b,x){let c=1,d=1-(a+b)*x/(a+1);const tiny=1e-300;if(Math.abs(d)<tiny)d=tiny;d=1/d;let h=d;
 for(let m=1;m<1000;m++){let aa=m*(b-m)*x/((a+2*m-1)*(a+2*m));d=1+aa*d;if(Math.abs(d)<tiny)d=tiny;c=1+aa/c;if(Math.abs(c)<tiny)c=tiny;d=1/d;h*=d*c;aa=-(a+m)*(a+b+m)*x/((a+2*m)*(a+2*m+1));d=1+aa*d;if(Math.abs(d)<tiny)d=tiny;c=1+aa/c;if(Math.abs(c)<tiny)c=tiny;d=1/d;const delta=d*c;h*=delta;if(Math.abs(delta-1)<2e-14)break;}return h;}
export function betaCDF(x,a,b){positive(a);positive(b);if(!finite(x))throw Error('Invalid beta argument');if(x<=0)return 0;if(x>=1)return 1;const front=Math.exp(logGamma(a+b)-logGamma(a)-logGamma(b)+a*Math.log(x)+b*Math.log1p(-x));const v=x<(a+1)/(a+b+2)?front*betaFraction(a,b,x)/a:1-front*betaFraction(b,a,1-x)/b;return Math.max(0,Math.min(1,v));}
export function betaPDF(x,a,b){positive(a);positive(b);if(!finite(x))throw Error('Invalid beta argument');if(x<0||x>1)return 0;if(x===0)return a<1?Infinity:a===1?b:0;if(x===1)return b<1?Infinity:b===1?a:0;return Math.exp((a-1)*Math.log(x)+(b-1)*Math.log1p(-x)+logGamma(a+b)-logGamma(a)-logGamma(b));}
export function normalPDF(x,mu=0,sigma=1){positive(sigma);if(!finite(x)||!finite(mu))throw Error('Invalid normal argument');return Math.exp(-.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI));}
export function normalSF(x){if(!finite(x))return x===Infinity?0:x===-Infinity?1:NaN;if(x===0)return .5;const tail=.5*gammaQ(.5,x*x/2);return x>0?tail:1-tail;}
export const normalCDF=x=>normalSF(-x);
export function quantile(p,cdf,lo,hi){probability(p);for(let i=0;i<85;i++){const mid=(lo+hi)/2;if(cdf(mid)<p)lo=mid;else hi=mid;}return (lo+hi)/2;}
export function normalQuantile(p){probability(p);if(p===0)return -Infinity;if(p===1)return Infinity;return quantile(p,normalCDF,-38,38);}
export function studentPDF(x,df){positive(df);if(!finite(x))throw Error('Invalid t argument');return Math.exp(logGamma((df+1)/2)-logGamma(df/2)-.5*Math.log(df*Math.PI)-(df+1)/2*Math.log1p(x*x/df));}
export function studentSF(x,df){positive(df);if(!finite(x))throw Error('Invalid t argument');const tail=.5*betaCDF(df/(df+x*x),df/2,.5);return x>=0?tail:1-tail;}
export const studentCDF=(x,df)=>studentSF(-x,df);
export function studentQuantile(p,df){positive(df);probability(p);if(p===0)return -Infinity;if(p===1)return Infinity;let extent=2;while(studentCDF(extent,df)<Math.max(p,1-p)&&extent<1e10)extent*=2;return quantile(p,x=>studentCDF(x,df),-extent,extent);}
export function chiSquareSF(x,df){positive(df);if(!finite(x)||x<0)throw Error('Invalid chi-square argument');return gammaQ(df/2,x/2);}
export function fSF(x,d1,d2){positive(d1);positive(d2);if(!finite(x)||x<0)throw Error('Invalid F argument');return betaCDF(d2/(d2+d1*x),d2/2,d1/2);}
export function choose(n,k){if(!Number.isInteger(n)||n<0||!Number.isInteger(k))throw Error('Invalid combination');if(k<0||k>n)return 0;let v=1;for(let j=1;j<=Math.min(k,n-k);j++)v*= (n-j+1)/j;return v;}
export function binomialPMF(k,n,p){probability(p);if(!Number.isInteger(n)||n<0||!Number.isInteger(k))throw Error('Invalid binomial argument');if(k<0||k>n)return 0;if(p===0)return k===0?1:0;if(p===1)return k===n?1:0;return Math.exp(logGamma(n+1)-logGamma(k+1)-logGamma(n-k+1)+k*Math.log(p)+(n-k)*Math.log1p(-p));}
export function binomialTail(k,n,p){binomialPMF(0,n,p);if(!Number.isInteger(k))throw Error('Integer threshold required');let v=0;for(let j=Math.max(0,k);j<=n;j++)v+=binomialPMF(j,n,p);return Math.min(1,v);}
export function poissonPMF(k,lambda){if(!finite(lambda)||lambda<0||!Number.isInteger(k))throw Error('Invalid Poisson argument');if(k<0)return 0;if(lambda===0)return k===0?1:0;return Math.exp(-lambda+k*Math.log(lambda)-logGamma(k+1));}
export function hypergeometricPMF(k,N,K,n){if(![k,N,K,n].every(Number.isInteger)||N<1||K<0||K>N||n<0||n>N)throw Error('Invalid hypergeometric argument');if(k<Math.max(0,n-(N-K))||k>Math.min(n,K))return 0;return choose(K,k)*choose(N-K,n-k)/choose(N,n);}
export function mean(xs){if(!xs.length||!xs.every(finite))throw Error('Nonempty finite data required');return xs.reduce((s,x)=>s+x,0)/xs.length;}
export function sampleVariance(xs){if(xs.length<2||!xs.every(finite))throw Error('At least two finite observations required');const m=mean(xs);return xs.reduce((s,x)=>s+(x-m)**2,0)/(xs.length-1);}
export function wilson(k,n,confidence=.95){if(!Number.isInteger(n)||n<1||!Number.isInteger(k)||k<0||k>n||!finite(confidence)||confidence<=0||confidence>=1)throw Error('Invalid Wilson parameters');const z=normalQuantile((1+confidence)/2),p=k/n,den=1+z*z/n,c=(p+z*z/(2*n))/den,h=z*Math.sqrt(p*(1-p)/n+z*z/(4*n*n))/den;return [Math.max(0,c-h),Math.min(1,c+h)];}
export function welch(m1,s1,n1,m2,s2,n2,confidence=.95){if(![m1,m2].every(finite)||!Number.isInteger(n1)||!Number.isInteger(n2)||n1<2||n2<2)throw Error('Invalid samples');positive(s1);positive(s2);if(confidence<=0||confidence>=1)throw Error('Invalid confidence');const v1=s1*s1/n1,v2=s2*s2/n2,se=Math.sqrt(v1+v2),df=(v1+v2)**2/(v1*v1/(n1-1)+v2*v2/(n2-1)),delta=m1-m2,t=delta/se,h=studentQuantile((1+confidence)/2,df)*se;return {delta,se,df,t,p:2*studentSF(Math.abs(t),df),interval:[delta-h,delta+h]};}
export function regression(points){if(points.length<3||points.some(p=>p.length!==2||!p.every(finite)))throw Error('Invalid regression data');const n=points.length,mx=mean(points.map(p=>p[0])),my=mean(points.map(p=>p[1])),sxx=points.reduce((s,p)=>s+(p[0]-mx)**2,0),sxy=points.reduce((s,p)=>s+(p[0]-mx)*(p[1]-my),0);positive(sxx);const slope=sxy/sxx,intercept=my-slope*mx,residuals=points.map(([x,y])=>y-intercept-slope*x),sse=residuals.reduce((s,r)=>s+r*r,0),variance=sse/(n-2);return {n,mx,my,sxx,sxy,slope,intercept,residuals,sse,variance,slopeSE:Math.sqrt(variance/sxx)};}
export function regressionIntervals(points,x,confidence=.95){if(!finite(x)||!finite(confidence)||confidence<=0||confidence>=1)throw Error('Invalid prediction parameter');const r=regression(points),y=r.intercept+r.slope*x,t=studentQuantile((1+confidence)/2,r.n-2),factor=1/r.n+(x-r.mx)**2/r.sxx;return {...r,x,y,meanHalf:t*Math.sqrt(r.variance*factor),predictionHalf:t*Math.sqrt(r.variance*(1+factor))};}
export function anova(groups){if(groups.length<2||groups.some(g=>g.length<2||!g.every(finite)))throw Error('Invalid groups');const N=groups.reduce((s,g)=>s+g.length,0),grand=mean(groups.flat()),ssb=groups.reduce((s,g)=>s+g.length*(mean(g)-grand)**2,0),ssw=groups.reduce((s,g)=>s+g.reduce((t,x)=>t+(x-mean(g))**2,0),0),df1=groups.length-1,df2=N-groups.length;positive(ssw);const F=(ssb/df1)/(ssw/df2);return {N,grand,ssb,ssw,df1,df2,F,p:fSF(F,df1,df2)};}
export function chiSquare(table){const rows=table.map(r=>r.reduce((s,v)=>s+v,0)),cols=table[0].map((_,j)=>table.reduce((s,r)=>s+r[j],0)),N=rows.reduce((s,v)=>s+v,0);if(table.length<2||cols.length<2||table.some(r=>r.length!==cols.length||r.some(v=>!finite(v)||v<0))||rows.some(v=>v<=0)||cols.some(v=>v<=0))throw Error('Invalid contingency table');const expected=table.map((r,i)=>r.map((_,j)=>rows[i]*cols[j]/N)),stat=table.reduce((s,r,i)=>s+r.reduce((t,v,j)=>t+(v-expected[i][j])**2/expected[i][j],0),0),df=(rows.length-1)*(cols.length-1);return {expected,stat,df,p:chiSquareSF(stat,df)};}
export function seededRandom(seed){if(!Number.isInteger(seed))throw Error('Integer seed required');let s=seed>>>0;return ()=>{s=(s+0x6D2B79F5)>>>0;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
export function normalDraw(random){return Math.sqrt(-2*Math.log(Math.max(Number.MIN_VALUE,1-random())))*Math.cos(2*Math.PI*random());}
export function empiricalQuantile(xs,p){probability(p);if(!xs.length||!xs.every(finite))throw Error('Nonempty finite sample required');const sorted=[...xs].sort((a,b)=>a-b),i=(sorted.length-1)*p,k=Math.floor(i);return sorted[k]+(sorted[Math.min(k+1,sorted.length-1)]-sorted[k])*(i-k);}
export function permutationMeans(values,size){if(values.length>12||size<1||size>=values.length||!Number.isInteger(size))throw Error('Invalid permutation size');const result=[];function visit(indices,start){if(indices.length===size){const set=new Set(indices),a=values.filter((_,i)=>set.has(i)),b=values.filter((_,i)=>!set.has(i));result.push({indices,delta:mean(a)-mean(b)});return;}for(let i=start;i<values.length;i++)visit([...indices,i],i+1);}visit([],0);return result;}
