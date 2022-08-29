import { quickSortByConcat, quickSort } from "../quickSort";

describe("快速排序:返回新的数组", () => {
    it("sort [4, 3, 2, 1] to [1, 2, 3, 4]", () => {
        const oldArr = [4, 3, 2, 1];
        const expectedArr = [1, 2, 3, 4];
        expect(quickSortByConcat(oldArr)).toEqual(expectedArr);
    });

    it("排序 [9, 7, 11, 0, -2, 3, 1, 8, 9, 9, 5]", () => {
        const oldArr = [9, 7, 11, 0, -2, 3, 1, 8, 9, 9, 5];
        const expectedArr = [-2, 0, 1, 3, 5, 7, 8, 9, 9, 9, 11];
        expect(quickSortByConcat(oldArr)).toEqual(expectedArr);
    });
});

describe("快速排序:原地排序", () => {
    it("排序 [1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12]", () => {
        const toBeSortedArr = [1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12];
        const expectedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        quickSort(toBeSortedArr);
        expect(toBeSortedArr).toEqual(expectedArr);
    });

    it("排序 [1, 2, 3, 4, 5, 6, 7]", () => {
        const toBeSortedArr = [1, 2, 3, 4, 5, 6, 7];
        const expectedArr = [1, 2, 3, 4, 5, 6, 7];
        quickSort(toBeSortedArr);
        expect(toBeSortedArr).toEqual(expectedArr);
    });

    it("排序 [7, 6, 5, 4, 3, 2, 1]", () => {
        const toBeSortedArr = [7, 6, 5, 4, 3, 2, 1];
        const expectedArr = [1, 2, 3, 4, 5, 6, 7];
        quickSort(toBeSortedArr);
        expect(toBeSortedArr).toEqual(expectedArr);
    });

    it("排序 []", () => {
        const toBeSortedArr = [];
        const expectedArr = [];
        quickSort(toBeSortedArr);
        expect(toBeSortedArr).toEqual(expectedArr);
    });
});
