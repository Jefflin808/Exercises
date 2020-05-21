class Node{
    data;
    left;
    right;
    constructor(data) {
      this.data = data; 
      this.left = null;
      this.right = null;
    }
    show() {
      return this.data;
    }
  }
  
  class BinarySearchTree{
    root;
    constructor(data) {
      this.root = new Node(data);
    }
    insert(data) {
      let newNode = new Node(data);
      let curRoot = this.root;
      while (curRoot != null) {
        if (data < curRoot.data) {
          if (curRoot.left !== null) {
            curRoot = curRoot.left;
          }
          else {
            curRoot.left = newNode;
            return;
          }
        }
        else {
          if (curRoot.right !== null) {
            curRoot = curRoot.right;
          }
          else {
            curRoot.right = newNode;
            return;          
          }
        }      
      }
    }
  }
  
  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      console.log(node.show());
      inOrder(node.right);
    }
  }
  function preOrder(node){
    if (node !== null) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
      }      
  }
  function postOrder(node){
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
      }      
  }
  var nums = new BinarySearchTree(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);
  /*
                23
        16              45
    3       22      37      99

  */

  inOrder(nums.root);
  //3
  //16
  //22
  //23
  //37
  //45
  //99
  preOrder(nums.root);    
  //23
  //16
  //3
  //22
  //45
  //37
  //99
  postOrder(nums.root);
  //3
  //22
  //16
  //37
  //99
  //45
  //23

  //remove ?? 
  