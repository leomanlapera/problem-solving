import { countActiveUsersPerDepartment } from "./countActiveUsersPerDepartment";

describe("countActiveUsersPerDepartment", () => {
  const users = [
    { name: "Alice", department: "Sales", isActive: true },
    { name: "Bob", department: "Engineering", isActive: false },
    { name: "Charlie", department: "Sales", isActive: true },
    { name: "Dave", department: "Engineering", isActive: true },
    { name: "Eve", department: "Marketing", isActive: false },
  ];

  it("returns an active users per department", () => {
    expect(countActiveUsersPerDepartment(users)).toEqual({
      Sales: 2,
      Engineering: 1,
    });
  });

  it("returns an empty object is non-array is passed", () => {
    expect(countActiveUsersPerDepartment(undefined)).toEqual({});
  });
});
