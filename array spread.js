//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
//... in [] is arry, in () is arguments
// ES6的写法
function f(x, y, z) {
    // ...
  }
  let args = [0, 1, 2];
  f(...args);

  const a1 = [1,2,3];
  const a2 = [...a1];