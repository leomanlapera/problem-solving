import { getDepartmentsWithHighAverageSalary } from "./getDepartmentsWithHighAverageSalary";

describe("getDepartmentsWithHighAverageSalary", () => {
  const users = [
    { name: "Alice", department: "Sales", salary: 5000 },
    { name: "Bob", department: "Engineering", salary: 9000 },
    { name: "Charlie", department: "Sales", salary: 6000 },
    { name: "Dave", department: "Engineering", salary: 11000 },
    { name: "Eve", department: "Marketing", salary: 4000 },
  ];

  it("returns an array of departments with high average salary", () => {
    expect(getDepartmentsWithHighAverageSalary(users, 7000)).toEqual([
      "Engineering",
    ]);
  });

  it("returns an empty array if non-array is passed", () => {
    expect(getDepartmentsWithHighAverageSalary(null, 7000)).toEqual([]);
  });
});
