import randomBetween from "./Random";

const randomSpy = jest.spyOn(Math, "random");

describe("randomBetween", () => {
  describe("when Math.random() returns 0", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });

    it("called with min=3 and max=5 returns 3", () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
  describe("when Math.random() returns 0.5", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it("called with min=3 and max=5 returns 4", () => {
      expect(randomBetween(3, 5)).toBe(4);
    });
  });
});
//npm i coveralls -D
//npm run test -- --coverage
//展示測試覆蓋率，每個團隊的要求都不一樣，通常都是50%以上
//branch與行數的覆蓋率計算方法都不一樣，if有100行，else有2行
//行數覆蓋率100/102，branch覆蓋率50%，哪一個比較合理看團隊
