//找零问题
/*
贪心算法的一个经典案例是找零问题。你从商店购买了一些商品，找零63 美分，店员要
怎样给你这些零钱呢？如果店员根据贪心算法来找零的话，他会给你两个25 美分、一个
10 美分, 零个5美分 和 三个1 美分。在没有使用50 美分的情况下这是最少的硬币数量。
 */
function makeChange(origAmt, coins){
    let remainAmt = 0;
    if(origAmt >= 25){
        coins[3] = Math.floor(origAmt / 25 );
        remainAmt = origAmt % 25;
        origAmt = remainAmt;
    }

    if(origAmt >= 10){
        coins[2] = Math.floor(origAmt / 10 );
        remainAmt = origAmt % 10;
        origAmt = remainAmt;
    }    

    if(origAmt >= 5){
        coins[1] = Math.floor(origAmt / 5 );
        remainAmt = origAmt % 5;
        origAmt = remainAmt;
    }
    
    if(origAmt >= 1){
        coins[0] = Math.floor(origAmt / 1 );
    }
}

let origAmt = 63;
let coins = [];
makeChange(origAmt, coins);
console.log(coins);
//Array[4]
//0: 3
//1: undefined
//2: 1
//3: 2

