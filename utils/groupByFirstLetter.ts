export type Person = {
  name: string;
  age: number;
};

export const groupByFirstLetter = (people: Person[] | null | undefined) => {
  if (!Array.isArray(people)) return {};

  const grouped = people.reduce<Record<string, Person[]>>((acc, person) => {
    const firstLetter = person.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(person);
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort()
    .reduce<Record<string, Person[]>>((sorted, key) => {
      sorted[key] = grouped[key];
      return sorted;
    }, {});
};
