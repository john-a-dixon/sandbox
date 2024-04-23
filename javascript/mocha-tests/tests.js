const assert = require("assert");
const { altCase } = require("./app.js");
const exp = require("constants");

describe("Casing", () => {
  describe(".altCase", () => {
    let actual = "";

    beforeEach(() => {
      actual = "";
    });

    it("returns alternating casing for a word", () => {
      // Setup
      const expected = "HeLlO";

      // Exercise
      actual = altCase("Hello");

      // Verify
      assert.strictEqual(expected, actual);
    });

    it("returns alternating casing for a sentence", () => {
      // Setup
      const expected = "HeLlO To aLl!";

      // Exercise
      actual = altCase(expected);

      // Verify
      assert.strictEqual(expected, actual);
    });
  });
});