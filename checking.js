class Checking{
    _balance = 0;
    constructor(amount) {
      this._balance = amount;
    }
    deposit(amount) {
      this._balance += amount;
    }
    toString() {
      return this._balance.toString();
    }
  }
  let ck = new Checking(200);
  console.log(ck.toString()); //200
  ck.deposit(100);
  console.log(ck.toString());//300
  