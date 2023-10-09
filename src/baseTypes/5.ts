/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = 'union';
union = 55; 


type enableOrDisable = 'enable' | 'disable';
let literal: enableOrDisable;
literal = 'enable';
literal = 'disable';

