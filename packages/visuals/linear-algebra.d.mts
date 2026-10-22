import type { Frame3 } from './calculus3.mjs';
export interface LinearControl {key:string;label:string;min:number;max:number;step:number;value:number;options?:{value:number;label:string}[]}
export interface LinearFrame extends Frame3 {dimension:number;matrix:string}
export function linearControls(id:string):LinearControl[];
export function linearDefaults(id:string):Record<string,number>;
export function linearBounds(id:string):Record<string,number[]>;
export function assertLinearParameters(id:string,p:Record<string,number>):void;
export function linearFrame(id:string,p?:Record<string,number>):LinearFrame;
export function linearPlayback(id:string,seed:Record<string,number>,elapsed:number):{key:string;value:number;done:boolean};
export function transpose(A:number[][]):number[][];
export function multiply(A:number[][],B:number[][]):number[][];
export function matvec(A:number[][],x:number[]):number[];
export function determinant2(A:number[][]):number;
export function identity(n:number):number[][];
export function norm(x:number[]):number;
export function rref(A:number[][],tolerance?:number,pivotColumns?:number):{matrix:number[][];pivots:number[]};
export function solve(A:number[][],b:number[]):number[];
export function pivotedLU(A:number[][]):{P:number[][];L:number[][];U:number[][]};
export function qr(A:number[][]):{Q:number[][];R:number[][]};
export function svd2(A:number[][]):{U:number[][];V:number[][];sigma:number[]};
export function matrixPower(A:number[][],n:number):number[][];
export function matrixLatex(A:number[][]):string;
