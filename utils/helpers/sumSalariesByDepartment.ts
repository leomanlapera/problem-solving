export const sumSalariesByDepartment = (
  users:
    | Array<{
        name: string;
        department: string;
        salary: number;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, number>>((acc, user) => {
    acc[user.department] = (acc[user.department] || 0) + user.salary;
    return acc;
  }, {});
};
