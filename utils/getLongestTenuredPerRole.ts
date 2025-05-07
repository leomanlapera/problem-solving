type Employee = {
  name: string;
  role: string;
  yearsOfService: number;
};

export const getLongestTenuredPerRole = (
  employees: Employee[] | null | undefined
): Record<string, { name: string; yearsOfService: number }> => {
  if (!Array.isArray(employees)) return {};

  return employees.reduce<
    Record<string, { name: string; yearsOfService: number }>
  >((acc, employee) => {
    const existing = acc[employee.role];

    if (!existing || employee.yearsOfService > existing.yearsOfService) {
      acc[employee.role] = {
        name: employee.name,
        yearsOfService: employee.yearsOfService,
      };
    }

    return acc;
  }, {});
};
