import { Person, groupByFirstLetter } from "@/utils/groupByFirstLetter";

const people: Person[] = [
  { name: "June", age: 40 },
  { name: "Alice", age: 21 },
  { name: "Charlie", age: 21 },
  { name: "Carol", age: 24 },
  { name: "Bob", age: 25 },
  { name: "Chad", age: 19 },
  { name: "Daniel", age: 40 },
  { name: "Eve", age: 30 },
  { name: "David", age: 25 },
];

const Page = () => {
  console.log(groupByFirstLetter(people));
  return <div>Page</div>;
};

export default Page;
