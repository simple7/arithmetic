/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 前序 + 中序
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    const rootV = preorder[0];
    const rootNode = new TreeNode(rootV);
    let i = inorder.indexOf(rootV);
    rootNode.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    rootNode.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return rootNode;
};

// 中序 + 后序
var buildTree02 = function(inorder, postorder) {
    if (!postorder.length || !inorder.length) {
        return null;
    }
    const rootV = postorder.pop();
    const rootNode = new TreeNode(rootV);
    let i = inorder.indexOf(rootV);
    rootNode.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
    rootNode.right = buildTree(inorder.slice(i + 1), postorder.slice(i));
    return rootNode;
};

// 两个栈实现一个队列
// 栈：后进先出 栈1：进栈  栈2：出栈
// 队列 先进先出
// 用进栈和出栈两个栈 push正常进栈1后 如果需要出栈 则把栈1挨个出栈再进入到栈2，即翻转了数据，栈2正常出栈就是先进先出了

var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.outStack.length) {
        return this.outStack.pop();
    } else {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
        return this.outStack.pop() || -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

/*
 *举一反三：用两个队列实现一个栈
 *
 *
 * */

var CStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CStack.prototype.appendTail = function(value) {
    if (this.queue1.length) {
        this.queue1.push(value);
    } else {
        this.queue2.push(value);
    }
};

/**
 * @return {number}
 */
CStack.prototype.deleteHead = function() {
    if (this.queue1.length) {
        while (this.queue1.length > 1) {
            this.queue2.unshift(this.queue1.shift());
        }
        return this.queue1.shift() || -1;
    } else {
        while (this.queue2.length > 1) {
            this.queue1.unshift(this.queue2.shift());
        }
        return this.queue2.shift() || -1;
    }
};
