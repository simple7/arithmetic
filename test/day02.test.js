import { findRepeatNumber01, findRepeatNumber02 } from '../src/day02';

test('数组中重复数字01', () => {
    expect(findRepeatNumber01([2, 3, 1, 0, 2, 5, 3])).toBe(2);
});

test('数组中重复数字02', () => {
    expect(findRepeatNumber02([2, 1, 0, 2])).toBe(2);
});
