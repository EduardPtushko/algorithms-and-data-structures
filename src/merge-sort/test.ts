import { mergeSort, merge } from './';

test('should megre two sorted arrays', (): void => {
    const a = [0, 4, 10];
    const b = [3, 5, 9];

    expect(merge(a, b)).toEqual([0, 3, 4, 5, 9, 10]);
});

test('should sort array', (): void => {
    expect(mergeSort([4, 9, 0, 5, 3, 10])).toEqual([0, 3, 4, 5, 9, 10]);
});
