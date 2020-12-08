/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export const findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false;
    }
    let rows = matrix.length;
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < rows && col > -1) {
        if (matrix[row][col] < target) {
            row++;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            return true;
        }
    }
    return false;
};
