type Employee = {
  name: string;
  department: string;
  yearsOfExperience: number;
};

export const getMostSeniorEmployeePerDepartment = (
  employees: Employee[] | null | undefined
): Record<string, string> => {
  if (!Array.isArray(employees)) return {};

  const result = employees.reduce<
    Record<string, { name: string; yearsOfExperience: number }>
  >((acc, employee) => {
    const existing = acc[employee.department];

    if (!existing || employee.yearsOfExperience > existing.yearsOfExperience) {
      acc[employee.department] = {
        name: employee.name,
        yearsOfExperience: employee.yearsOfExperience,
      };
    }

    return acc;
  }, {});

  const finalResult: Record<string, string> = {};
  for (const [deparment, { name }] of Object.entries(result)) {
    finalResult[deparment] = name;
  }

  return finalResult;
};
