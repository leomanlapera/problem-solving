export const groupUserNamesByDepartment = (
  users:
    | Array<{
        name: string;
        department: string;
      }>
    | null
    | undefined
) => {
  if (!Array.isArray(users)) return {};

  return users.reduce<Record<string, Array<string>>>((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = [];
    }

    acc[user.department].push(user.name);

    return acc;
  }, {});
};
