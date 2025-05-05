import { groupUsersByDepartmentAndRole } from "./groupUsersByDepartmentAndRole";

describe("groupUsersByDepartmentAndRole", () => {
  const users = [
    { name: "Alice", department: "Sales", role: "Manager" },
    { name: "Bob", department: "Engineering", role: "Engineer" },
    { name: "Charlie", department: "Sales", role: "Executive" },
    { name: "Dave", department: "Engineering", role: "Manager" },
    { name: "Eve", department: "Sales", role: "Manager" },
  ];

  it("returns an object of users by department and role", () => {
    expect(groupUsersByDepartmentAndRole(users)).toEqual({
      Sales: { Manager: ["Alice", "Eve"], Executive: ["Charlie"] },
      Engineering: { Engineer: ["Bob"], Manager: ["Dave"] },
    });
  });

  it("returns an empty object is non-array is passed", () => {
    expect(groupUsersByDepartmentAndRole(null)).toEqual({});
  });
});
