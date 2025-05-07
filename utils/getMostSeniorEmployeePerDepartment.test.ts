import { getMostSeniorEmployeePerDepartment } from "./getMostSeniorEmployeePerDepartment";

describe("getMostSeniorEmployeePerDepartment", () => {
  const employees = [
    { name: "Alice", department: "Sales", yearsOfExperience: 5 },
    { name: "Bob", department: "Sales", yearsOfExperience: 3 },
    { name: "Charlie", department: "Engineering", yearsOfExperience: 6 },
    { name: "Dave", department: "Engineering", yearsOfExperience: 8 },
    { name: "Eve", department: "Marketing", yearsOfExperience: 2 },
  ];

  it("returns an object with the most senior employee per deparment", () => {
    expect(getMostSeniorEmployeePerDepartment(employees)).toEqual({
      Sales: "Alice",
      Engineering: "Dave",
      Marketing: "Eve",
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(getMostSeniorEmployeePerDepartment(undefined)).toEqual({});
  });
});
