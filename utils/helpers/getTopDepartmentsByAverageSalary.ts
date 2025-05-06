export const getTopDepartmentsByAverageSalary = (
  users:
    | Array<{
        name: string;
        department: string;
        salary: number;
      }>
    | null
    | undefined,
  topN?: number
) => {
  if (!Array.isArray(users)) return [];

  const deptStats = users.reduce<
    Record<string, { total: number; count: number }>
  >((acc, user) => {
    const dept = user.department;

    if (!acc[dept]) {
      acc[dept] = { total: 0, count: 0 };
    }

    acc[dept].total += user.salary;
    acc[dept].count += 1;

    return acc;
  }, {});

  const deptAverages = Object.entries(deptStats).map(
    ([department, { total, count }]) => ({
      department,
      averageSalary: Math.round(total / count),
    })
  );

  return deptAverages
    .sort((a, b) => b.averageSalary - a.averageSalary)
    .slice(0, topN);
};
