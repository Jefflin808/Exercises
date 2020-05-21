var str = 'Fuer mehr Informationen siehe Kapitel 3.4.5.1';
var re = /siehe (kapitel \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
//Array[3]
//0: "siehe Kapitel 3.4.5.1" <---完全匹配的结果
//1: "Kapitel 3.4.5.1"      <---第一个括号匹配的结果
//2: ".1"   <---第二个括号匹配的结果

var str = 'Fuer mehr Informationen siehee Kapitel 3.4.5.1';
var re = /siehe (kapitel \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
//null  <---str 'siehee' 多了一个e

