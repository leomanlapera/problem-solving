type User = {
  name: string;
  department: string;
  isActive: boolean;
};

export const countActiveUsersPerDepartment = (
  users: User[] | null | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users
    .filter((user) => user.isActive)
    .reduce<Record<string, number>>((acc, user) => {
      acc[user.department] = (acc[user.department] || 0) + 1;
      return acc;
    }, {});
};
