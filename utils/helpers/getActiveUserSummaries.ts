export const getActiveUserSummaries = (
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
  if (!Array.isArray(users)) return [];

  return users
    .filter((user) => user.isActive)
    .map((user) => ({ name: user.name, role: user.role }));
};
