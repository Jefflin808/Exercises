/*
3. 下面代码的输出是什么?
const shape = {
radius: 10,
diameter() {
return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();

复制代码
A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63

请注意，diameter是普通函数，而perimeter是箭头函数。
对于箭头函数，this关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！ 这意味着当我们调用perimeter时，它不是指向shape对象，而是指其定义时的环境（window）。没有值radius属性，返回undefined。
*/

function shape() {
    this.radius = 3;
    return {
      radius: this.radius,
      diameter: function () {
        return this.radius * 2;
      },
      perimeter: () => {
        console.log(this);
        return 2 * Math.PI * this.radius
      }
    }
  };
  var s = new shape();
  console.log(s.diameter());
  console.log(s.perimeter());

  //6
  //shape{}
  //18.849555

  class Shape {
    radius = 3;
    diameter() {
      return this.radius * 2;
    };
    perimeter = () => {
      console.log(this);
      return 2 * Math.PI * this.radius
    }
  };
  var s = new Shape();
  console.log(s.diameter());
  console.log(s.perimeter());

  //6
  //shape()
  //18.849555