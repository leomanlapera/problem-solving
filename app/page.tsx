import {
  Course,
  organizeCoursesByCategoryAndInstructor,
} from "@/utils/organizeCoursesByCategoryAndInstructor";

const courses: Course[] = [
  { title: "React Basics", category: "Programming", instructor: "Alice" },
  { title: "Advanced CSS", category: "Design", instructor: "Bob" },
  {
    title: "TypeScript Fundamentals",
    category: "Programming",
    instructor: "Alice",
  },
  { title: "UX Principles", category: "Design", instructor: "Carol" },
  { title: "Node.js APIs", category: "Programming", instructor: "Dave" },
];

const Page = () => {
  console.log(organizeCoursesByCategoryAndInstructor(courses));
  return <div>Page</div>;
};

export default Page;
