type Employee = {
  name: string;
  department: string;
  salary: number;
};

export const getDepartmentsWithHighAverageSalary = (
  users: Employee[] | null | undefined,
  salaryThreshold: number
): string[] => {
  if (!Array.isArray(users)) return [];

  const deptStats = users.reduce<
    Record<string, { total: number; count: number }>
  >((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = { total: 0, count: 0 };
    }

    acc[user.department].total += user.salary;
    acc[user.department].count += 1;

    return acc;
  }, {});

  return (
    Object.entries(deptStats)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, { total, count }]) => total / count > salaryThreshold)
      .map(([department]) => department)
  );
};
