import { getUserStatsByRole } from "./getUserStatsByRole";

describe("getUserStatsByRole", () => {
  const users = [
    { name: "Alice", role: "Admin", isActive: true },
    { name: "Bob", role: "Editor", isActive: false },
    { name: "Carol", role: "Editor", isActive: true },
    { name: "Dave", role: "Admin", isActive: false },
    { name: "Eve", role: "Admin", isActive: true },
  ];

  it("returns an object of users stats by role", () => {
    expect(getUserStatsByRole(users)).toEqual({
      Admin: { total: 3, active: 2 },
      Editor: { total: 2, active: 1 },
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(getUserStatsByRole(null)).toEqual({});
  });
});
