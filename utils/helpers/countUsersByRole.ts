export const countUsersByRole = (
  users:
    | Array<{
        id: number;
        name: string;
        role: string;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, number>>((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});
};
