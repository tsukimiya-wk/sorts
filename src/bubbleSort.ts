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

/**
 * 复杂度分析：
 *
 * 时间复杂度：
 *      for 循环：2个
 *
 * 空间复杂度：
 *      没有新空间的开辟
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
