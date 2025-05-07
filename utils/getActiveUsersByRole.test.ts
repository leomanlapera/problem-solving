import { getActiveUsersByRole } from "./getActiveUsersByRole";

describe("getActiveUsersByRole", () => {
  const users = [
    { id: 1, name: "Alice", role: "admin", isActive: true },
    { id: 2, name: "Bob", role: "admin", isActive: false },
    { id: 3, name: "Charlie", role: "user", isActive: true },
    { id: 4, name: "Dana", role: "user", isActive: false },
    { id: 5, name: "Eve", role: "Admin", isActive: true }, // tests case-insensitive match
  ];

  it("returns active users with the given role", () => {
    const result = getActiveUsersByRole(users, "admin");
    expect(result).toEqual([
      { id: 1, name: "Alice", role: "admin", isActive: true },
      { id: 5, name: "Eve", role: "Admin", isActive: true },
    ]);
  });

  it("returns an empty array if no users match", () => {
    const result = getActiveUsersByRole(users, "moderator");
    expect(result).toEqual([]);
  });

  it("returns an empty array of no active users match the role", () => {
    const result = getActiveUsersByRole(users, "user");
    expect(result).toEqual([
      { id: 3, name: "Charlie", role: "user", isActive: true },
    ]);
  });

  it("returns an empty array when passed non-array as users", () => {
    expect(getActiveUsersByRole(null, "admin")).toEqual([]);
  });

  it("returns an empty array when passed non-string role", () => {
    expect(getActiveUsersByRole(users, null)).toEqual([]);
  });
});
