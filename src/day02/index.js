/*
找出数组中重复的数字。
 在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 示例 1：
 输入：
 [2, 3, 1, 0, 2, 5, 3]
 输出：2 或 3
*/

// 1. 时间复杂度O(n) 空间复杂度O(n)
export const findRepeatNumber01 = function(nums) {
    const map = {};
    for (let v of nums) {
        if (map[v]) {
            return v;
        }
        map[v] = true;
    }
    return -1;
};

// 2. 空间复杂度O(1) 时间复杂度O(n)
// 循环数组 把每个元素放到它下标的位置，继续比较
// 缺点：原数组被修改了
export const findRepeatNumber02 = function(nums) {
    let num;
    for (let i = 0, len = nums.length; i < len; i++) {
        if ((num = nums[i]) !== i) {
            while (num === nums[num]) {
                return num;
            }
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
    return -1;
};


// 3. 空间复杂度O(1) 时间复杂度O(nlog(n))
// 先遍历一遍排序
// 缺点：原数组被修改了
export const findRepeatNumber03 = function(nums) {
    let num;
    for (let i = 0, len = nums.length; i < len; i++) {
        if ((num = nums[i]) !== i) {
            while (num === nums[num]) {
                return num;
            }
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
    return -1;
};
