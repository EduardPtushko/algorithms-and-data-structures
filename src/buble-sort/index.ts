export function bubleSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}
