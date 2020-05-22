let nums = [3, 1, 2, 100, 4, 200];
function compare(num1, num2) {
  return num1 - num2;
}
nums.sort(compare);
console.log(nums); // 1,2,3,4,100,200