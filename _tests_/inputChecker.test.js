import { checkAge } from "../src/inputChecker.js";

describe("ageChecker", () => {
  test("Should check that a user enters number between 0 and 150", () => {
    expect(checkAge(155)).toEqual(true);
    expect(checkAge(-5)).toEqual(true);
    expect(checkAge(5)).toEqual();
  });

});