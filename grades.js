//page 28
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
grades.forEach(g => {
  let total = 0;
  total += g.reduce((prev, next) => {
    return prev + next;
  });
  console.log("total:" + total.toString());
  console.log("average:" + (total / g.length).toFixed(2));
})
