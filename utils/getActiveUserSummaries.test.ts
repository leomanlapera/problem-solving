import { getActiveUserSummaries } from "./getActiveUserSummaries";

describe("getActiveUserSummaries", () => {
  const users = [
    { id: 1, name: "Alice", role: "admin", isActive: true },
    { id: 2, name: "Bob", role: "editor", isActive: false },
    { id: 3, name: "Charlie", role: "admin", isActive: true },
    { id: 4, name: "Dave", role: "editor", isActive: true },
    { id: 5, name: "Eve", role: "viewer", isActive: true },
  ];

  it("returns active users with name and role properties", () => {
    const result = getActiveUserSummaries(users);
    expect(result).toEqual([
      { name: "Alice", role: "admin" },
      { name: "Charlie", role: "admin" },
      { name: "Dave", role: "editor" },
      { name: "Eve", role: "viewer" },
    ]);
  });

  it("returns an empty array if no active users", () => {
    const _result = [
      { id: 1, name: "Alice", role: "admin", isActive: false },
      { id: 2, name: "Bob", role: "editor", isActive: false },
    ];
    expect(getActiveUserSummaries(_result)).toEqual([]);
  });

  it("returns an empty array when passed non-array users", () => {
    expect(getActiveUserSummaries(null)).toEqual([]);
  });
});
