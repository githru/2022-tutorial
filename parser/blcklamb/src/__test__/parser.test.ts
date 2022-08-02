import type * as Parser from "../logToJson";
// automock: true configuration 설정때문에 jest.requireActual을 써야함
const { parseToJSON } = jest.requireActual<typeof Parser>("../logToJson");

import type * as Data from "../data/example";

const { exampleLog02, exampleResult02 } =
  jest.requireActual<typeof Data>("../data/example");

describe("example parser02", () => {
  test("parser02", () => {
    // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
    // serializes to the same string
    expect(parseToJSON(exampleLog02)).toStrictEqual(exampleResult02);
  });
});
export {};
