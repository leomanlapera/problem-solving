import { countUsersByRole } from "./countUsersByRole";

describe("countUsersByRole", () => {
  const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "editor" },
    { id: 3, name: "Charlie", role: "admin" },
    { id: 4, name: "Dave", role: "viewer" },
  ];

  it("returns an object with role as key and count as value", () => {
    expect(countUsersByRole(users)).toEqual({ admin: 2, editor: 1, viewer: 1 });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(countUsersByRole(undefined)).toEqual({});
  });
});
