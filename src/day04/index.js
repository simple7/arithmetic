/**
 * @param {string} s
 * @return {string}
 */

// 双指针法
// js 里字符串被设计成不可变的类型
//    时间O(n) 空间O(n)
export const replaceSpace01 = function(s) {
    if (!s || !s.length) {
        return '';
    }
    const len = s.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') {
            count++;
        }
    }
    const arr = new Array(len + count * 2);
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === ' ') {
            arr[j++] = '%';
            arr[j++] = '2';
            arr[j++] = '0';
        } else {
            arr[j++] = s[i];
        }
    }
    return arr.join('');
};

//时间O(n) 空间O(1)
export const replaceSpace02 = function(s) {
    if (!s || !s.length) {
        return '';
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            res += '%20';
        } else {
            res += s[i];
        }
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 遍历一次 加数组
// 时间O(n) 空间O(n)
export const reversePrint01 = function(head) {
    const res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
};

// 双指针 遍历两次
export const reversePrint02 = function(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
        const next = cur.next;
        // 反转指针
        cur.next = pre;
        // pre 往后走一步
        pre = cur;
        // cur 往后走一步
        cur = next;
    }
    // 反转结束后 pre就是头指针
    const res = [];
    while (pre) {
        res.push(pre.val);
        pre = pre.next;
    }
    return res;
};
