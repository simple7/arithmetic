/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 广度优先遍历
var movingCount = function(m, n, k) {
    let count = 0;
    const direction = [[0, 1], [1, 0]];
    const queue = [[0, 0]];
    const visited = {
        '0-0': true,
    };
    while (queue.length) {
        const [x, y] = queue.shift();
        if (getV(x) + getV(y) > k) {
            continue;
        }
        count++;
        for (let v of direction) {
            const newX = x + v[0];
            const newY = y + v[1];
            if (!visited[`${newX}-${newY}`] && newX >= 0 && newY >= 0 && newX < m && newY < n) {
                queue.push([newX, newY]);
                visited[`${newX}-${newY}`] = true;
            }
        }
    }
    return count;
};

function getV(val) {
    let res = 0;
    while (val) {
        res += val % 10;
        val = Math.floor(val / 10);
    }
    return res;
}
