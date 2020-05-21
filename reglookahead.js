let str = "12312345678988";

function change(val) {
  let reg = /\d{1,3}(?=(\d{3})+$)/g;
  console.log(val.match(reg));
  return val.replace(reg,'$&,');
}

console.log(change(str));

// 0: "12"
// 1: "312"
// 2: "345"
// 3: "678"
// "12,312,345,678"

let str = "12312345678988";

function change(val) {
  let reg = /(?=(\d{3})+$)/g;
  console.log(val.match(reg));
  return val.replace(reg,',');
}

console.log(change(str));
// 0: ""
// 1: ""
// 2: ""
// 3: ""
// "12,312,345,678"