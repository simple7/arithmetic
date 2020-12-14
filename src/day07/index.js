/**
 * @param {number[]} numbers
 * @return {number}
 *
 * 分治法
 */
var minArray = function(numbers) {
    if (!numbers || !numbers.length) {
        return null;
    }
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (numbers[m] > numbers[j]) {
            i = m + 1;
        } else if (numbers[m] < numbers[j]) {
            j = m;
        } else {
            // 此处可优化 当numbers[m] == numbers[j]时 即表示m-j区间的数都相等 可直接采用线性查找
            let x = i;
            for (let k = i + 1; k < j; k++) {
                if (numbers[k] < numbers[x]) {
                    x = k;
                }
            }
            return numbers[x];
        }
    }
    return numbers[i];
};
