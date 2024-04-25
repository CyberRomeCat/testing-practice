const script = require("./script");

test("Capitalize first letter", () => {
  expect(script("love")).toBe("Love");
});
