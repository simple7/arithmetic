import { findNumberIn2DArray } from '../src/day03';

const arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
];

test('二维数组中查找 test01', () => {
    expect(findNumberIn2DArray(arr, 5)).toBe(true);
});

test('二维数组中查找 test02', () => {
    expect(findNumberIn2DArray(arr, 20)).toBe(false);
});
