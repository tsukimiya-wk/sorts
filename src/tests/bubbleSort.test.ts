import { bubbleSort } from "../bubbleSort";

describe("冒泡算法", () => {
    it("sort [4, 3, 2, 1] to [1, 2, 3, 4]", () => {
        const oldArr = [4, 3, 2, 1];
        const newArr = [1, 2, 3, 4];
        bubbleSort(oldArr);
        expect(oldArr).toEqual(newArr);
    });
});
