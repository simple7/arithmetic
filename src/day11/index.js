/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 循环32次
var hammingWeight = function(n) {
    let a = 1;
    let count = 0;
    let times = 0;
    while (times++ < 32) {
        if (n & a) {
            count++;
        }
        a = a << 1;
    }
    return count;
};

// 用n&n-1 消除一次1

var hammingWeight02 = function(n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
    }
    return count;
};
