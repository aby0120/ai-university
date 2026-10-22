export interface DiscreteControl {key:string;label:string;min:number;max:number;step:number;value:number;options?:string[]}
export interface DiscreteGraph {nodes:{id:number;label:string;x:number;y:number;color:string}[];edges:{u:number;v:number;color:string;label:string;w?:number}[];directed?:boolean}
export interface DiscreteFrame {title:string;formula:string;note:string;gridColumns:number|null;metrics:{label:string;value:string}[];table:null|{headers:string[];rows:string[][]};tiles:{label:string;value:string;color:string}[];graph:DiscreteGraph|null;bars:{label:string;value:number;color:string}[];sequence:{label:string;active:boolean}[]}
export function discreteControls(id:string):DiscreteControl[];
export function discreteDefaults(id:string):Record<string,number>;
export function discreteBounds(id:string):Record<string,number[]>;
export function discreteFrame(id:string,p?:Record<string,number>):DiscreteFrame;
export function discretePlayback(id:string,p:Record<string,number>,seconds:number):{key:string;value:number;done:boolean};
