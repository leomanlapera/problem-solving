export const groupUsersByDepartmentAndRole = (
  users:
    | Array<{
        name: string;
        department: string;
        role: string;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, Record<string, string[]>>>((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = {};
    }

    if (!acc[user.department][user.role]) {
      acc[user.department][user.role] = [];
    }

    acc[user.department][user.role].push(user.name);

    return acc;
  }, {});
};
