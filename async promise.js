function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`timeout ${ms} is over`);
            resolve();
        }, ms);
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 50);
console.log('continue doing other things...');

// https://es6.ruanyifeng.com/#docs/promise

//"continue doing other things..."

//"timeout 50 is over"

//"hello world"

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`timeout ${ms} is over`);
            resolve();
        }, ms);
    })
}

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }

// asyncPrint('hello world', 50);

let value = 'hello world';
timeout(50).then((value) => {
    console.log(value);
}, (err) => {

});
console.log('continue doing other things...');

//"continue doing other things..."

//"timeout 50 is over"

//"hello world"

//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
async function getStockSymbol(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(name);
        resolve(`Dax_${name}`);
      }, 50);
    });
  }
  async function getStockPrice(symbol) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(symbol);
        resolve(150);
      }, 50);
    });
  }
  async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const price = await getStockPrice(symbol);
    return price;
  }
  
  getStockPriceByName('goog').then((result) => {
    console.log(result);
  }, (error) => {
  
  });

  //"goog"
  //"Dax_goog"
  //150