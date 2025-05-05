import { groupUserNamesByDepartment } from "./groupUserNamesByDepartment";

describe("groupUserNamesByDepartment", () => {
  const users = [
    { name: "Alice", department: "Sales" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Sales" },
  ];

  it("returns a group of users by department", () => {
    expect(groupUserNamesByDepartment(users)).toEqual({
      Sales: ["Alice", "Charlie"],
      Engineering: ["Bob"],
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(groupUserNamesByDepartment(undefined)).toEqual({});
  });
});
