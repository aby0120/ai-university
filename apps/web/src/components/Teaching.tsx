import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Lightbulb, RotateCcw } from 'lucide-react';
import type { Lesson } from '../../../../packages/content/types';
import { MathText } from './MathText';
export function TeachingExplanation({lesson}:{lesson:Lesson}) {
  const [open,setOpen]=useState(false);
  return <div className="teaching-explanation">
    <button className="small-btn" aria-expanded={open} onClick={()=>setOpen(!open)}><Lightbulb size={16}/>{open?'收起这个解释':'换个角度理解'}<ChevronDown size={14}/></button>
    {open&&<div className="teaching-response"><span>换一种说法</span><p><MathText text={lesson.teaching.explain}/></p><p className="teaching-condition">再回到下面的定义，检查这句话成立的条件。</p></div>}
  </div>;
}
export function GuidedExperiment({lesson,index,modified,onApply}:{lesson:Lesson;index:number|null;modified:boolean;onApply:(index:number)=>void}) {
  const [reveal,setReveal]=useState(false);
  const step=index===null?undefined:lesson.teaching.steps[index];
  function choose(i:number){setReveal(false);onApply(i);}
  return <div className="guided-experiment">
    <div className="experiment-prompt"><span className="eyebrow">先带着一个问题</span><p><MathText text={lesson.interactiveVisual.prediction}/></p></div>
    <div className="experiment-steps" role="group" aria-label="三步引导实验">
      {lesson.teaching.steps.map((s,i)=><button key={s.title} aria-pressed={i===index} onClick={()=>choose(i)}><span className="step-index">{i+1}</span><span>{s.title}</span><ArrowRight size={14}/></button>)}
    </div>
    <div className="experiment-task" aria-live="polite">
      {step?<><strong><MathText text={step.instruction}/></strong><p>{modified?'你已手动操作控件。可以自由探索，也可以重新载入这一步。':'图形已载入这一组参数。先看读数和形状，再核对观察。'}</p><div className="experiment-actions"><button className="small-btn" onClick={()=>setReveal(!reveal)} aria-expanded={reveal}><Check size={14}/>{reveal?'收起观察':'核对观察'}</button>{modified&&<button className="text-btn" onClick={()=>choose(index!)}><RotateCcw size={14}/>重新载入这一步</button>}{index!<2&&<button className="text-btn" onClick={()=>choose(index!+1)}>下一步<ArrowRight size={14}/></button>}</div>{reveal&&<div className="experiment-observation"><span>{modified?'原预设下的观察':'这一步可以看到'}</span><p><MathText text={step.observation}/></p>{modified&&<small>请按当前读数重新核对，不直接沿用预设结论。</small>}</div>}</>:<p>点选一步，载入一组参数。也可以直接拖动下方控件自由探索。</p>}
    </div>
  </div>;
}
