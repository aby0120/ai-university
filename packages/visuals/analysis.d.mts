export interface AnalysisControl{key:string;label:string;min:number;max:number;step:number;value:number;options?:string[]}
export interface AnalysisPanel{title:string;range:number[];curves:{points:number[][];color:string;label:string}[];points:{x:number;y:number;label:string;color:string;open:boolean}[];rects:{x1:number;y1:number;x2:number;y2:number;color:string;opacity:number}[];segments:{x1:number;y1:number;x2:number;y2:number;color:string;dash:boolean}[]}
export interface AnalysisFrame{panels:AnalysisPanel[];metrics:{label:string;value:string}[];table:null|{headers:string[];rows:string[][]};formula:string;note:string}
export function analysisControls(id:string):AnalysisControl[];
export function analysisDefaults(id:string):Record<string,number>;
export function analysisBounds(id:string):Record<string,number[]>;
export function analysisFrame(id:string,p?:Record<string,number>):AnalysisFrame;
export function analysisPlayback(id:string,p:Record<string,number>,elapsed:number):{key:string;value:number;done:boolean};
