var str = "They are staudents";
var str1 = "aeiou";

for (var i = 0; i < str1.length; i++) {
  str = str.split(str1[i]).join('');
}

console.log(str);
//Thy r stdnts