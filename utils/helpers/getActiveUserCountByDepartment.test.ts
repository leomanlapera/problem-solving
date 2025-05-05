import { getActiveUserCountByDepartment } from "./getActiveUserCountByDepartment";

describe("getActiveUserCountByDepartment", () => {
  const users = [
    { id: 1, name: "Alice", department: "Engineering", isActive: true },
    { id: 2, name: "Bob", department: "Marketing", isActive: false },
    { id: 3, name: "Charlie", department: "Engineering", isActive: true },
    { id: 4, name: "Dave", department: "Sales", isActive: true },
    { id: 5, name: "Eve", department: "Engineering", isActive: false },
    { id: 6, name: "Faythe", department: "Sales", isActive: true },
  ];

  it("returns an active users count by department", () => {
    const result = getActiveUserCountByDepartment(users);
    expect(result).toEqual({ Engineering: 2, Sales: 2 });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(getActiveUserCountByDepartment(null)).toEqual({});
  });
});
