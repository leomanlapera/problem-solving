import { countActiveUsersByRole } from "./countActiveUsersByRole";

describe("countActiveUsersByRole", () => {
  const users = [
    { id: 1, name: "Alice", role: "admin", isActive: true },
    { id: 2, name: "Bob", role: "editor", isActive: false },
    { id: 3, name: "Charlie", role: "admin", isActive: true },
    { id: 4, name: "Dave", role: "editor", isActive: true },
    { id: 5, name: "Eve", role: "viewer", isActive: true },
  ];

  it("returns active users with role as key and value as count", () => {
    const result = countActiveUsersByRole(users);
    expect(result).toEqual({ admin: 2, editor: 1, viewer: 1 });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(countActiveUsersByRole(null)).toEqual({});
  });
});
