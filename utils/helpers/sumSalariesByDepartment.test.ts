import { sumSalariesByDepartment } from "./sumSalariesByDepartment";

describe("sumSalariesByDepartment", () => {
  const users = [
    { name: "Alice", department: "Sales", salary: 5000 },
    { name: "Bob", department: "Engineering", salary: 7000 },
    { name: "Charlie", department: "Sales", salary: 6000 },
  ];

  it("returns a sum of salaries object by department", () => {
    expect(sumSalariesByDepartment(users)).toEqual({
      Sales: 11000,
      Engineering: 7000,
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(sumSalariesByDepartment(null)).toEqual({});
  });
});
