import { sum } from "./sum";

describe("testing match", () => {
  //test case
  it("Is 1+ 2 = 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    expect(result).toBeGreaterThan(2);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThan(2);
    expect(result).toBeLessThanOrEqual(2);
  });
});
