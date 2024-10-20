import { getCourseDetails } from "@/BackendService/queries/courses";
import { replaceMongoIdInArray } from "@/lib/convertData";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";

// import { getCourseDetails } from "@/queries/courses";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);
  return (
    <>
      <CourseDetailsIntro title={course?.title} subtitle={course?.subtitle} thumbnail={course?.thumbnail} />

      <CourseDetails course={course} />

      {course?.testimonials && <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />}

      {/* <RelatedCourses /> */}
    </>
  );
};
export default SingleCoursePage;
