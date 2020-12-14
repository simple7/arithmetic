/**
 * @param {number} n
 * @return {number}
 */

// 斐波拉契数
const fib = function(n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
    }
    return arr[n];
};

const fib02 = function(n) {
    const cache = {
        0: 0,
        1: 1,
    };
    function calc(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        cache[n] = calc(n - 1) + calc(n - 2);
        return cache[n] % 1000000007;
    }
    return calc(n);
};

// 青蛙跳台阶

/**
 * @param {number} n
 * @return {number}
 */

// 时间O(n) 空间 O(n)
var numWays = function(n) {
    const arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
    }
    return arr[n];
};

// f(n) = f(n-1)+f(n-2)

var numWays02 = function(n) {
    const cache = {
        0: 1,
        1: 1,
    };
    function calc(n) {
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = calc(n - 1) + calc(n - 2);
        return cache[n] % 1000000007;
    }
    return calc(n);
};

// 优化空间为O(1)

var numWays03 = function(n) {
    let a = 1,
        b = 1;
    let sum;
    for (let i = 2; i <= n; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return b;
};
