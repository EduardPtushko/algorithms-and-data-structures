import { selectionSort, minIndex } from '.';

test('returns empty array when length of array is 0', () => {
    const arr: number[] = [];
    const sortedArr: number[] = [];
    const res = selectionSort(arr);

    expect(res).toEqual(sortedArr);
});
test('returns array with one element when length of array is 1', () => {
    const arr: number[] = [1];
    const sortedArr: number[] = [1];
    const res = selectionSort(arr);

    expect(res).toEqual(sortedArr);
});

test('sorts array correctly', () => {
    const arr = [3, 4, 1, 5];
    const sortedArr = [1, 3, 4, 5];
    const res = selectionSort(arr);

    expect(res).toEqual(sortedArr);
});

test('returns min index', (): void => {
    const arr = [3, 4, 1, 5];
    const index = minIndex(arr);
    expect(index).toBe(2);
});
