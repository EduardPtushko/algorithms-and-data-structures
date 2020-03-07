export const merge = (left: number[], right: number[]): number[] => {
    const results: number[] = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            results.push(right.shift() as number);
        } else {
            results.push(left.shift() as number);
        }
    }

    return [...results, ...left, ...right];
};

export function mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
