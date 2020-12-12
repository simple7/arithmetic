/**
 * @param {number} n
 * @return {number}
 */
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
