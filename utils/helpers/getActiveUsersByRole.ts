export const getActiveUsersByRole = (
  users:
    | Array<{
        id: number;
        name: string;
        role: string;
        isActive: boolean;
      }>
    | null
    | undefined,
  role: string | null | undefined
) => {
  if (!Array.isArray(users) || typeof role !== "string") return [];

  return users.filter(
    (user) => user.role.toLowerCase() === role.toLowerCase() && user.isActive
  );
};
