const isEmail = require("../src");

describe("isEmail", () => {
  it("should return false if the email is not valid", () => {
    expect(isEmail("123")).toBe(false);
    expect(isEmail("email")).toBe(false);
    expect(isEmail("example.com")).toBe(false);
    expect(isEmail("email@example")).toBe(false);
  });

  it("should return true if email is valid", () => {
    expect(isEmail("email@example.com")).toBe(true);
    expect(isEmail("email123@example.com")).toBe(true);
    expect(isEmail("email-12@example.com")).toBe(true);
    expect(isEmail("email+az@example.com")).toBe(true);
  });
});
