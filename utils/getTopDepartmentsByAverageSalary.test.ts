import { getTopDepartmentsByAverageSalary } from "./getTopDepartmentsByAverageSalary";

describe("getTopDepartmentsByAverageSalary", () => {
  const users = [
    { name: "Alice", department: "Sales", salary: 5000 },
    { name: "Bob", department: "Engineering", salary: 7000 },
    { name: "Charlie", department: "Sales", salary: 6000 },
    { name: "Dave", department: "Engineering", salary: 9000 },
    { name: "Eve", department: "Marketing", salary: 8000 },
  ];

  it("returns an array of top 2 departments by average salary", () => {
    expect(getTopDepartmentsByAverageSalary(users, 2)).toEqual([
      { department: "Engineering", averageSalary: 8000 },
      { department: "Marketing", averageSalary: 8000 },
    ]);
  });

  it("returns an empty array if non-array is passed", () => {
    expect(getTopDepartmentsByAverageSalary(null)).toEqual([]);
  });
});
