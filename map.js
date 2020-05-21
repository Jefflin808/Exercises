let str = "abbcccdddd";

let arr = str.split('');
let cmap = new Map();
let num = 0; 
let char = '';
arr.forEach(value => {
  if (cmap.has(value)) {
    let n = cmap.get(value);
    cmap.set(value, ++n); 
    if (n > num) {
      num = n;
      char = value;
    }  
  }
  else {
    cmap.set(value, 1);  
  }
});

console.log("num:" + num.toString());
console.log("char:" + char);
//num: 4
//char: d

for (let p of cmap) {
  console.log(p[0]);
  console.log(p[1]);
}
