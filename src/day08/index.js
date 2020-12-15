/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    const len1 = board.length,
        len2 = board[0].length,
        len3 = word.length;
    const dfs = function(board, word, i, j, k) {
        if (i >= len1 || j >= len2 || i < 0 || j < 0 || board[i][j] !== word[k]) {
            return false;
        }
        if (k === len3 - 1) {
            return true;
        }
        const temp = board[i][j];
        // 临时置为空 避免深度优先遍历的时候再次遍历到该位置
        board[i][j] = '';
        const res =
            dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1) || dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1);
        board[i][j] = temp;
        return res;
    };
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
