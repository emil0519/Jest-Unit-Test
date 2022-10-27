import { create } from "react-test-renderer";
//npm i react-test-renderer
import Button from "./Button";

it("snapshot of button", () => {
  const tree = create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

//模擬dom tree
//產生dom tree兩次？
//如果我們改button的內容，執行npm run test就會報錯
//在npm run test => w => u = update snapshot then 不會報錯
