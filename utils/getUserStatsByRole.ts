type User = {
  name: string;
  role: string;
  isActive: boolean;
};

export const getUserStatsByRole = (
  users: User[] | null | undefined
): Record<string, { total: number; active: number }> => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, { total: number; active: number }>>(
    (acc, user) => {
      if (!acc[user.role]) {
        acc[user.role] = { total: 0, active: 0 };
      }

      if (user.isActive) {
        acc[user.role].active += 1;
      }

      acc[user.role].total += 1;

      return acc;
    },
    {}
  );
};
