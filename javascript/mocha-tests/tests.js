const assert = require("assert");
const { altCase } = require("./app.js");
const exp = require("constants");

describe("Casing", () => {
  describe(".altCase", () => {
    it("returns alternating casing for a word", () => {
      // Setup
      const expected = "HeLlO";
      let actual = "";

      // Exercise
      actual = altCase("Hello");

      // Verify
      assert.strictEqual(expected, actual);
      
    });
  });
});