import { capitalize } from "./capitalize";

describe("capitalize", () => {
  test("Hello world", () => {
    expect(capitalize("hello world")).toMatch(/^[A-Z]/);
  });

  test("Name", () => {
    expect(capitalize("kashif")).toBe("Kashif");
  });

    test("Empty", () => {
    expect(capitalize("")).toBe("");
  });


});
