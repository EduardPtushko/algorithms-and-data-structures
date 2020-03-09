export function quick(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];
    const less = arr.slice(1).filter(num => num < pivot);
    const more = arr.slice(1).filter(num => num > pivot);

    return [...quick(less), pivot, ...quick(more)];
}
