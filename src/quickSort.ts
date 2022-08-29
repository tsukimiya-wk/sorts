/**
 * 第一种：返回一个有序的新数组
 *
 * arr = [4, 3, 2, 1]
 *
 * 1. pivot = arr[0]; 以数组第一个元素为基准
 * 2. 预置3个数组，比基准小的 lowArr，一样大的 pivotArr，更大的 highArr
 * 3. 对 arr 进行迭代，將对值放在对应的数组里
 * 4. 第一次迭代： lowArr = [3, 2, 1], pivotArr = [4], highArr = []
 * 5. 第二次迭代：
 *      lowArr :
 *              lowArr_1 = [2, 1]
 *              pivotArr_1 = [3]
 * 6. 第三次迭代：
 *      lowArr_1:
 *              lowArr_2 = [1]
 *              pivotArr_2 = [2]
 * 7. 当数组仅剩一个元素时，返回该数组
 * 8. 將各个数组拼接起来
 *
 * 复杂度分析：
 *
 * 最好情况：只迭代一次，O(n)
 * 最坏情况：O(n!)
 * 平均时间复杂度：（n + n!)/2;
 */

export function quickSortByConcat(array: Array<number>) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const pivotArr: Array<number> = []; // 存放和 pivot 一样大的数
        const lowArr: Array<number> = []; // 存放比 pivot 小的数
        const highArr: Array<number> = []; // 存放比 pivot 大的数

        for (const curr of array) {
            if (curr === pivot) {
                pivotArr.push(curr);
            } else if (curr > pivot) {
                highArr.push(curr);
            } else {
                lowArr.push(curr);
            }
        }

        return quickSortByConcat(lowArr)
            .concat(pivotArr)
            .concat(quickSortByConcat(highArr));
    }
}

/**
 * 第二种：就地排序
 *
 * 1. 以第一个元素为中心，比它小的放前面，比它大的放后面，形成左右两个子表
 * 2. 对各子表重复第一步，直到仅剩一个元素为止
 */

export function quickSort(array: Array<number>): void {
    qSort(array, 0, array.length - 1);
}

function partition(array: Array<number>, low: number, high: number): number {
    const pivot = low; // 基准
    let firstBigerIdx = pivot + 1; // 第一个比array[pivot]大的元素的索引, firstBigerIdx - 1 为比基准小的元素个数，也是循环结束后基准所在之处

    // 从基准之后的第一元素开始循环
    for (let i = firstBigerIdx; i <= high; i++) {
        // 如果都比基数小，则 i === firstBigerIdx
        // 如果存在比基数大或一样大的元素，则 i > firstBigerIdx，firstBigerIdx 指向该大元素
        // 此后
        // 如果之后的元素都大于基数，从 low 开始，到 firstBigerIdx - 1为止，这些元素都小于基数
        // 交换基数与 firstBigerIdx - 1 所在的数
        // 这样，基数之前的数都比基数小，基数之后的数都比基数大或一样大
        if (array[i] < array[pivot]) {
            // 如果存在大元素，则firstBigerIdx为第一个大元素的下标
            // 如果在大元素之后还存在小元素
            // 那么將大元素与小元素交换
            // 此时，小元素排在大元素之前
            // firstBigerIdx 指向该小元素的下一位，要么是该大元素，要么是其它大元素
            [array[i], array[firstBigerIdx]] = [array[firstBigerIdx], array[i]];
            firstBigerIdx++;
        }
    }

    // 交换基准与第一个大元素之前的小元素
    [array[pivot], array[firstBigerIdx - 1]] = [
        array[firstBigerIdx - 1],
        array[pivot],
    ];
    // 返回当前基准的下标
    return firstBigerIdx - 1;
}

/**
 * 对数组内部，从起始下标开始，到结束下标为止的部分，使用快速排序法，进行排序
 *
 * @param array - 要排序的数组
 * @param low - 起始下标
 * @param high - 结束下标
 */
function qSort(array: Array<number>, low: number, high: number): void {
    // 以 pivot 为中心， 左边的都比它小， 右边的都比它大
    const pivot = partition(array, low, high);
    if (pivot - 1 > low) {
        // pivot - 1 === low, 只有一个元素
        qSort(array, low, pivot - 1); // 对小的部分进行快排
    }
    if (pivot - 1 < high) {
        // pivot + 1 === high，只有一个元素
        qSort(array, pivot + 1, high); // 对大的部分进行快排
    }
}
