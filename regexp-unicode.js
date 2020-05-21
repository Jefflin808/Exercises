var card = "\u{1f0a1}";
console.log(card); //<--- 🂡
console.log(card.codePointAt(0)); //<--- 127137
var regx = new RegExp("\u{1f0a1}","u");
var m1 = card.match(regx);
console.log(m1); //<--- Array[1] 0:🂡 
var regx2 = "/\u{1f0a1}/u"; // seems not supported
var m2 = card.match(regx2); 
console.log(m2);//<-- null


