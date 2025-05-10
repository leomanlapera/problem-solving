import {
  Course,
  organizeCoursesByCategoryAndInstructor,
} from "./organizeCoursesByCategoryAndInstructor";

describe("organizeCoursesByCategoryAndInstructor", () => {
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

  it("returns an object organize courses by category and instructor", () => {
    expect(organizeCoursesByCategoryAndInstructor(courses)).toEqual({
      Programming: {
        Alice: ["React Basics", "TypeScript Fundamentals"],
        Dave: ["Node.js APIs"],
      },
      Design: { Bob: ["Advanced CSS"], Carol: ["UX Principles"] },
    });
  });

  it("returns an empty object if non-array is passed", () => {
    expect(organizeCoursesByCategoryAndInstructor(null)).toEqual({});
  });
});
