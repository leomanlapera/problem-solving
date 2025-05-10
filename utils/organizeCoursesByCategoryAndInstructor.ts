export type Course = {
  title: string;
  category: string;
  instructor: string;
};

export const organizeCoursesByCategoryAndInstructor = (
  courses: Course[] | null | undefined
): Record<string, Record<string, string[]>> => {
  if (!Array.isArray(courses)) return {};

  return courses.reduce<Record<string, Record<string, string[]>>>(
    (acc, course) => {
      acc[course.category] ??= {};
      acc[course.category][course.instructor] ??= [];
      acc[course.category][course.instructor].push(course.title);
      return acc;
    },
    {}
  );
};
