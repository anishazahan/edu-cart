import { getCourses } from "@/BackendService/queries/courses";
import Test from "@/components/Test";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);

  console.log(courses[0]?.instructor?.socialMedia);
  console.log(courses[0]?.testimonials);
  console.log(courses[0]?.modules);
  return <Test />;
}
