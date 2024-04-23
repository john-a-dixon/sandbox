const assert = require("assert");
const { altCase, invertCase } = require("./app.js");
const exp = require("constants");

describe("Casing", () => {
  // describe(".altCase", () => {
  //   let actual = "";

  //   // An example of the beforeEach hook. There are 3 others too.
  //   beforeEach(() => {
  //     actual = "";
  //   });

  //   it("returns alternating casing for a word", () => {
  //     // Setup
  //     const expected = "HeLlO";

  //     // Exercise
  //     actual = altCase("Hello");

  //     // Verify
  //     assert.strictEqual(expected, actual);

  //     // Teardown (can be done with a hook too)
  //   });

  //   it("returns alternating casing for a sentence", () => {
  //     // Setup
  //     const expected = "HeLlO To aLl!";

  //     // Exercise
  //     actual = altCase(expected);

  //     // Verify
  //     assert.strictEqual(actual, expected);

  //     // Teardown (can be done with a hook too)
  //   });
  // });


/*
TDD Red-Green-Refactor Cycle
1. Red: Write a test that will describe an intended behavior. This will fail at first. 
   Implementation code is written in response to the failure.
2. Green: Write JUST enough implementation code to pass the test and bring it into the
   green.
3. Refactor: Clean up and optimize code according to the characteristics of a good test:
   (https://www.codecademy.com/article/tdd-u1-good-test). This is for both test code and
   implementation code.
Repeat for each test.

Each test below was done with this cycle in mind.
*/
  describe(".invertCase", () => {
    it("inverts the casing of a word", () => {
      // Setup
      const expected = "hELLO"
      const input = "Hello"

      // Exercise
      const result = invertCase(input);

      // Verify
      assert.strictEqual(result, expected);

    });
  });

});