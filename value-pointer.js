var str = 'ab';
var str1 = str;
str1 += 'cd';
console.log(str);  //ab
console.log(str1); //abcd

var arr = ["abc", "cde", "efg", "ghi"];
var arr1 = arr;  //<--- a reference
var arr2 = arr.slice(0);  //<--- a copy to the array
arr1.push("ijk");
console.log(arr); //Array[5] ["abc", "cde", "efg", "ghi","ijk"]
console.log(arr1);//Array[5] ["abc", "cde", "efg", "ghi","ijk"]
console.log(arr2);//Array[4] ["abc", "cde", "efg", "ghi"]

class Node{
  val;
  next;
  constructor(v, n) {
    this.val = v;
    this.next = n;
  }
}

var node1 = new Node(4, null);
var node2 = node1; //<--a reference
var node3 = new Node();
Object.assign(node3, node1);
node2.val = 5;
console.log(node1); //Node {val:5, next:null}
console.log(node2); //Node {val:5, next:null}
console.log(node3); //Node {val:4, next:null}




