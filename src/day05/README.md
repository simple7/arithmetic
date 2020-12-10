1.输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

```
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

```

2. 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

    ```
    示例 1：

       输入：
       ["CQueue","appendTail","deleteHead","deleteHead"]
       [[],[3],[],[]]
       输出：[null,null,3,-1]
       示例 2：

       输入：
       ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
       [[],[],[5],[2],[],[]]
       输出：[null,-1,null,null,5,2]
    ```
