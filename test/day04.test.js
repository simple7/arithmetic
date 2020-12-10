import { replaceSpace01, reversePrint01, reversePrint02 } from '../src/day04';

test('替换空格：双指针', () => {
    expect(replaceSpace01('We are happy.')).toBe('We%20are%20happy.');
});

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null,
        },
    },
};
test('反转链表打印01', () => {
    expect(reversePrint01(head)).toEqual([3,2,1]);
});

test('反转链表打印02', () => {
    expect(reversePrint02(head)).toEqual([3,2,1]);
});
