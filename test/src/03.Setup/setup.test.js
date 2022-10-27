//測試資料有沒有污染

let nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
beforeAll(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
});
beforeEach(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
});
afterEach(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
});
afterAll(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
});

//describe可以有很多個，如果data寫在global，所有describe都會執行

describe("name array", () => {
  it("add jay to the end", () => {
    //before each在這邊跑
    nameList.push("jay");
    expect(nameList[nameList.length - 1]).toBe("jay");
    //after each在這邊跑
  });
  it("add kay to the beginning", () => {
    nameList.unshift("kay");
    expect(nameList[0]).toBe("kay");
  });
  it("to let initial length of 6", () => {
    expect(nameList.length).toBe(10000);
  });
  it.only("only", () => {
    expect(nameList.length).toBe(6);
  });
});
