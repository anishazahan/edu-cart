import { getCourseDetails } from "../../../../BackendService/queries/courses";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";

// import { getCourseDetails } from "@/queries/courses";

export const dynamic = "force-dynamic";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);

  return (
    <>
      <CourseDetailsIntro course={course} />

      <CourseDetails course={course} />

      {/* {course?.testimonials && <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />} */}

      {/* <RelatedCourses /> */}
    </>
  );
};
export default SingleCoursePage;
