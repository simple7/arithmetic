// 1. 冒泡排序

/*
重复的走访要排序的序列，从后往前排，最大的最先排好

1.比较相邻的元素，如果前面元素比后面大 则交换位置
2.对每一对相邻元素都做步骤1，这样下来，最大的元素就被排在了列表最后
3.针对所有元素都重复以上步骤,除了最后一个

时间复杂度 O(n^2)
空间复杂度 O(1)
* */

export const bubbleSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        // 重复 j的遍历
        for (let j = 0; j < len - 1 - i; j++) {
            // 把最大的放到最后
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log(arr);
    }
    return arr;
};

// 2. 选择排序
/*
首先在未排序序列中找到最小元素，和序列首位交换，然后，再从剩余序列中继续执行词步骤，依次类推

1. 从无序列表中选择第一个元素，遍历剩下元素，与第一个元素相比，找到最小元素的下标
2. 交换无序列表的第一个元素和最小元素，使得列表开头处始终有序，且最小的在最前
3. 继续遍历剩下的无序列表，重复上面步骤

时间复杂度 O(n^2)
空间复杂度 O(1)
* */

export const selectionSort = arr => {
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};

// 插入排序
/*
通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

1. 从第一个元素开始，该元素可认为已经被排好序
2. 取出下一个元素（称为当前元素），在已经排序的列表中从后向前扫描
3. 如果被扫描的元素比当前元素大，则后移一位
4. 否则将当前元素放在被扫描元素的下标的下一位
5. 遍历剩下的列表，重复上述步骤

时间复杂度：O(n^2)
空间复杂度 O(1)
* */

export const insertSort = arr => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        const current = arr[i];
        let preIndex = i - 1;
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
};

// 4. 合并排序
/*
采用分治思想，递归将列表二分，再对返回值层层向上进行合并
归并排序是一种稳定的排序方法。和选择排序一样，归并排序的性能不受输入数据的影响，
但表现比选择排序好的多，因为始终都是O(nlogn）的时间复杂度。代价是需要额外的内存空间。

时间复杂度 O(nlog2^n)
空间复杂度 O(n)
* */

export const mergeSort = arr => {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));

    function merge(left, right) {
        const res = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                res.push(left.shift());
            } else {
                res.push(right.shift());
            }
        }
        // 左右长度不一致处理
        while (left.length) {
            res.push(left.shift());
        }
        while (right.length) {
            res.push(right.shift());
        }
        return res;
    }
};

// 快速排序 todo
