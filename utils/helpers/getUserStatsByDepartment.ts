export const getUserStatsByDepartment = (
  users:
    | Array<{
        id: number;
        name: string;
        department: string;
        isActive: boolean;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, { total: number; active: number }>>(
    (acc, user) => {
      const { department, isActive } = user;

      if (!acc[user.department]) {
        acc[department] = { total: 0, active: 0 };
      }

      acc[user.department].total += 1;

      if (isActive) {
        acc[department].active += 1;
      }

      return acc;
    },
    {}
  );
};
