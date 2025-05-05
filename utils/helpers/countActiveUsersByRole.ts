export const countActiveUsersByRole = (
  users:
    | Array<{
        id: number;
        name: string;
        role: string;
        isActive: boolean;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users
    .filter((user) => user.isActive)
    .reduce<Record<string, number>>((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});
};
