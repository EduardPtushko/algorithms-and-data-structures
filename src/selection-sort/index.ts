export const minIndex = (arr: number[]): number =>
    arr.reduce((acc, item, i, arr) => {
        if (arr[acc] > item) {
            acc = i;
        }
        return acc;
    }, 0);

export function selectionSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        const min = minIndex(arr.slice(i));

        if (i !== min + i) {
            [arr[i], arr[min + i]] = [arr[min + i], arr[i]];
        }
    }

    return arr;
}
