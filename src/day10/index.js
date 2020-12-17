/**
 * @param {number} n
 * @return {number}
 */
// 动态规划 dp(n) = max(j*(i-j),j*dp[i-j])
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(1);
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};

// 贪心算法
// 根据经验 6<3*3 5<3*2
// 先尽可能的拆分出多个3 再拆分成2 如果拆3余1 则成3 4
var cuttingRope02 = function(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    const a = Math.floor(n / 3);
    const b = n % 3;
    let res = 1;
    if (b === 1) {
        res = Math.pow(3, a - 1) * 4;
    } else if (b === 2) {
        res = Math.pow(3, a) * 2;
    } else {
        res = Math.pow(3, a);
    }
    return res;
};

// 减绳子2 时间福复杂度 logn
var cuttingRope03 = function(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    let res = 1;
    const max = 1e9 + 7;
    while (n > 4) {
        res = (res * 3) % max;
        n -= 3;
    }
    return n * res % max;
};
