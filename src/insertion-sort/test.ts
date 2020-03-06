import { insertionSort } from '.';

test('returns empty array when length of array is 0', () => {
    const arr: number[] = [];
    const sortedArr: number[] = [];
    const res = insertionSort(arr);

    expect(res).toEqual(sortedArr);
});
test('returns array with one element when length of array is 1', () => {
    const arr: number[] = [1];
    const sortedArr: number[] = [1];
    const res = insertionSort(arr);

    expect(res).toEqual(sortedArr);
});

test('sorts array correctly', () => {
    const arr = [10, 3, 4, 1, 5, -5];
    const sortedArr = [-5, 1, 3, 4, 5, 10];
    const res = insertionSort(arr);

    expect(res).toEqual(sortedArr);
});
