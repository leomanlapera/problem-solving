import { getLongestTenuredPerRole } from "./getLongestTenuredPerRole";

describe("getLongestTenuredPerRole", () => {
  const employees = [
    { name: "Alice", role: "Manager", yearsOfService: 5 },
    { name: "Bob", role: "Developer", yearsOfService: 2 },
    { name: "Carol", role: "Developer", yearsOfService: 6 },
    { name: "Dave", role: "Manager", yearsOfService: 8 },
  ];

  it("returns an object with longest tenured per role", () => {
    expect(getLongestTenuredPerRole(employees)).toEqual({
      Manager: { name: "Dave", yearsOfService: 8 },
      Developer: { name: "Carol", yearsOfService: 6 },
    });
  });

  it("return an empty object is non-array is passed", () => {
    expect(getLongestTenuredPerRole(null)).toEqual({});
  });
});
