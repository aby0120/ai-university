export interface ProbabilityControl{key:string;label:string;min:number;max:number;step:number;value:number}
export interface ProbabilityFrame{
 range:number[];axes:string[];formula:string;note:string;
 bars:{x:number;y:number;width:number;color:string;label:string}[];
 series:{points:number[][];color:string;label:string;dash:boolean}[];
 shades:{points:number[][];color:string;label:string}[];
 dots:{x:number;y:number;color:string;label:string;handle?:boolean}[];
 metrics:{label:string;value:string}[];
 tiles:{label:string;value:string;color:string}[];
 table:null|{values:number[][];rowLabels:string[];columnLabels:string[];rowTotals:number[];columnTotals:number[]};
 intervals:{y:number;low:number;high:number;center:number;contains:boolean}[];
 secondary:ProbabilityFrame|null;draggable:null|{key:string;axis:string};
}
export function probabilityFamily(id:string):string;
export function probabilityControls(id:string):ProbabilityControl[];
export function probabilityDefaults(id:string):Record<string,number>;
export function probabilityBounds(id:string):Record<string,number[]>;
export function assertProbabilityParameters(id:string,p:Record<string,number>):void;
export function probabilityFrame(id:string,p:Record<string,number>):ProbabilityFrame;
export function probabilityPlayback(id:string,p:Record<string,number>,elapsed:number):{key:string;value:number;done:boolean};
export function fmt(x:number):string;
