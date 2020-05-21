/*
背包问题是算法研究中的一个经典问题。试想你是一个保险箱大盗，打开了一个装满奇珍
异宝的保险箱，但是你必须将这些宝贝放入你的一个小背包中。保险箱中的物品规格和价
值不同。你希望自己的背包装进的宝贝总价值最大。
如果在我们例子中的保险箱中有5 件物品，它们的尺寸分别是3、4、7、8、9，而它们的
价值分别是4、5、10、11、13，且背包的容积为16，那么恰当的解决方案是选取第三件
物品和第五件物品，他们的总尺寸是16，总价值是23。*/

function max(a, b) {
    return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] +
            knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1));
    }
}
var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n));
//23


//动态规划方案
function max(a, b) {
    return (a > b) ? a : b;
}
function dKnapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            }
            else if (size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
                    K[i - 1][w]);
            }
            else {
                K[i][w] = K[i - 1][w];
            }
        }
    }
    return K[n][capacity];
}
var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(dKnapsack(capacity, size, value, n));

