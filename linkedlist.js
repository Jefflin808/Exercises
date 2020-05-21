function Node(element) {
    this.element = element;
    this.next = null;
  }
  
  function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
  }
  
  function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  
  function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)){
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
  
  var cities = new LList();
  cities.insert("Conway", "head");
  cities.insert("Russelville", "Conway");
  cities.insert("Alma", "Russelville");
  cities.display();
  cities.remove("Russelville");
  cities.display();

  //implementation with class
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    } 
  }
  class LList{
    constructor() {
      this.head = new Node("head");
    }
    find(item) {
      var cur = this.head;
      while (cur.element !== item) {
        cur = cur.next;      
      }
      return cur;
    }
    insert(element, item) {
      var newNode = new Node(element);
      var node = this.find(item);
      newNode.next = node.next;
      node.next = newNode;
    }

    //make list iterable
    *values(){
      let current = this.head;
      while(current !== null){
        yield current.element;
        current = current.next;
      }
    }

    [Symbol.iterator](){
      return this.values();
    }
    //end of iterator
  }
  let ll = new LList();
  ll.insert("jianfeng", "head");
  console.log(ll.find("jianfeng").element);
  for(var n of ll){//iterator
    console.log(n);
  }
  console.log([...ll]); //spread

  class Node{
    element;
    next;
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class SortedLList{
    head;
    constructor(element){
      this.head = new Node(element);
    }
    add(element) {
      let newNode = new Node(element); 
      let prevNode = this.head; 
      while (prevNode.next != null && prevNode.next.element < element) {
        prevNode = prevNode.next; 
      }
      newNode.next = prevNode.next; 
      prevNode.next = newNode; 
    }
    toString() {
      let curNode = this.head;
      while (curNode != null) {
        console.log(curNode.element);
        curNode = curNode.next; 
      }
    }
  }
  
  let sll = new SortedLList(1);
  sll.add(10);
  sll.add(3);
  sll.add(12);
  sll.add(5);
  sll.toString();

  class Node{
    element;
    next;
    previous;
    constructor(element) {
      this.element = element;
      this.next = null;
      this.previous = null;
    }
  }
  
  class DoubleLList{
    head;
    constructor(){
      this.head = new Node('head');
    }
    find(item) {
      let current = this.head; 
      while (current !== null && current.element !== item) {
        current = current.next;
      }
      return current; 
    }
    insert(newElement, item){
      let newNode = new Node(newElement); 
      let current = this.find(item); 
      newNode.next = current.next;
      newNode.previous = current;
      current.next = newNode; 
    }
  }
  

  class Node {
    element;
    next;
    previous;
    constructor(element) {
      this.element = element;
      this.next = null;
      this.previous = null;
    }
  }
  
  class LoopLList {
    head;
    constructor(element) {
      this.head = new Node(element);
      this.head.next = this.head;
    }
    find(item) {
      let current = this.head;
      while (current !== null && current.element !== item) {
        current = current.next;
      }
      return current;
    }
    insert(newElement, item) {
      let newNode = new Node(newElement);
      let current = this.find(item);
      newNode.next = current.next;
      newNode.previous = current;
      current.next = newNode;
    }
    remove(item) {
      let current = this.find(item);
      if (current === this.head) {
        this.head.element = this.head.next.element;
        this.head.next = this.head.next.next;
        console.log("new head:"+this.head.element);
      }
      else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
    }
  }
  
  /*
  据说著名犹太历史学家 约瑟夫有过以下的故事： 在罗马人占领乔塔帕特后，39 个犹太人与约瑟夫及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，
  于是决定了一个自杀方式，41个人排成一个圆圈，由第1个人开始报数，每报数到第3人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。
  然而约瑟夫 和他的朋友并不想遵从，约瑟夫要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。
  */
 let n = 41;
 let m = 3;
 let lll = new LoopLList(0);
 for (let i = 1; i < n; i++) {
   lll.insert(i, i - 1);
 }
 let start = lll.find(0);
 let next = start.next;
 while (next.next !== start) {
   let remove = start;
   for (let i = 1; i < m; i++) {
     remove = remove.next;
   }
   start = remove.next;
   next = start.next;
   console.log("remove:"+ remove.element);
   lll.remove(remove.element);
 }
 
 console.log("start:"+start.element);
 console.log("next:"+next.element);
  
  
  