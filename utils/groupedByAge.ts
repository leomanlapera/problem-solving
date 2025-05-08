export type Person = {
  name: string;
  age: number;
};

export const groupedByAge = (people: Person[] | null | undefined) => {
  if (!Array.isArray(people)) return {};

  return people.reduce<Record<number, Person[]>>((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(person);
    return acc;
  }, {});
};
