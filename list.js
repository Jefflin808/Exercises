//page 33
class List{
    dataStore = []
    constructor() {
      
    }
    append(element) {
      this.dataStore.push(element);
    }
    length() {
      return this.dataStore.length;
    }
    toString() {
      return this.dataStore.toString();
    }
    find(element) {
      for (var i = 0; i < this.dataStore.length; i++){
        if (element === this.dataStore[i]) return i;
      }  
      return -1;
    }
    remove(element) {
      let index = this.find(element);
      if (-1 !== index) {
        this.dataStore.splice(index, 1);
      }
    }
    get length() {
      return this.dataStore.length;
    }
  }
  
  let firstList = new List();
  firstList.append(34);
  firstList.append(12);
  console.log(firstList.toString());
  firstList.remove(34);
  console.log(firstList.toString());
  console.log(firstList.length);
