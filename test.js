"use strict";

const wordBreak = require(".");

describe("wordBreak", () => {
  const dict = [
    "icecream",
    "samsung",
    "mobile",
    "mango",
    "cream",
    "sung",
    "like",
    "sam",
    "man",
    "and",
    "ice",
    "go",
    "i"
  ];

  const testCases = [
    ["ilikesamsung", "i|like|samsung"],
    ["iiiiiiii", "i|i|i|i|i|i|i|i"],
    ["", ""],
    ["ilikelikeimangoiii", "i|like|like|i|mango|i|i|i"],
    ["samsungandmango", "samsung|and|mango"],
    ["samsungandmangoq", "samsung|and|mango|q"]
  ];
  testCases.map(tc => {
    const [input, output] = tc;

    it("should break words correctly", () => {
      expect(wordBreak(input, dict).join("|")).toBe(output);
    });
  });
});
