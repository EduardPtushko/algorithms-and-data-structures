export function insertionSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; 0 < j; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }

    return arr;
}
