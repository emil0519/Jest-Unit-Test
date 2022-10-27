import { fetchData } from "./async";

//describe是有很多it的時候才需要用
it("Fetch data", () => {
  // eslint-disable-next-line jest/valid-expect-in-promise
  return fetchData()
    .then((data) => {
      expect(data.length).toBe(1);
      expect(data).toBeUndefined();
    })
    .then((data) => console.log(data));
});

//npm run test => w => p => key in the name of this file
//if no pop up tip, install jest type, add jsconfig.json and add
// npm i @types/jest
// npm i @types/jest
// { "typeAcquisition": { "include": ["jest"] } }
