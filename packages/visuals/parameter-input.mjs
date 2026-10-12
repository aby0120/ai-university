const numeral=/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;
function term(s){
  if(numeral.test(s))return Number(s);
  const pi=s.match(/^([+-]?)(?:(\d+\.?\d*|\.\d+)\*?)?(?:pi|π)$/i);
  if(pi)return (pi[1]==='-'?-1:1)*(pi[2]===undefined?1:Number(pi[2]))*Math.PI;
  return NaN;
}
/** A finite whitelist, not an expression evaluator. */
export function parseParameter(input){
  const parts=input.replace(/\s/g,'').split('/');
  if(parts.length===1)return term(parts[0]);
  if(parts.length===2){const a=term(parts[0]),b=term(parts[1]);return b===0?NaN:a/b;}
  return NaN;
}
