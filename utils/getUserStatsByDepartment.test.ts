import { getUserStatsByDepartment } from "./getUserStatsByDepartment";

describe("getUserStatsByDepartment", () => {
  const users = [
    { id: 1, name: "Alice", department: "Engineering", isActive: true },
    { id: 2, name: "Bob", department: "Marketing", isActive: false },
    { id: 3, name: "Charlie", department: "Engineering", isActive: true },
    { id: 4, name: "Dave", department: "Sales", isActive: true },
    { id: 5, name: "Eve", department: "Engineering", isActive: false },
    { id: 6, name: "Faythe", department: "Sales", isActive: true },
  ];

  it("returns an object by department with total and active users", () => {
    const result = getUserStatsByDepartment(users);
    expect(result).toEqual({
      Engineering: { total: 3, active: 2 },
      Marketing: { total: 1, active: 0 },
      Sales: { total: 2, active: 2 },
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(getUserStatsByDepartment(null)).toEqual({});
  });
});
