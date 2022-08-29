export function bubbleSort(array: Array<number>): void {
    const len = array.length;

    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
}
