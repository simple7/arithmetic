import { bubbleSort, selectionSort, insertSort, mergeSort } from '../src/day01';

test('冒泡排序', () => {
    expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('选择排序', () => {
    expect(selectionSort([9, 3, 1, 5, 7, 4, 6, 2, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('插入排序', () => {
    expect(insertSort([9, 3, 1, 5, 7, 4, 6, 2, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('合并排序', () => {
    expect(mergeSort([9, 3, 1, 5, 7, 4, 6, 2, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
