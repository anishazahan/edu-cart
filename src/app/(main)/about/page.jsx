import Image from "next/image";
import img2 from "../../../assets/img/about-2.jpg";
import img3 from "../../../assets/img/about-3.jpg";
import img1 from "../../../assets/img/about.jpg";

const AboutPage = () => {
  return (
    <div>
      {" "}
      <section className="mx-auto max-w-7xl text-center w-full lg:text-left px-5 sm:px-10 flex flex-wrap my-10 items-center  lg:bg-white">
        <div className="about-content w-full lg:w-6/12 ">
          <div className="flex flex-col pr-4">
            <h2 className="text-2xl font-semibold uppercase text-gray-700 my-3 tracking-wide">About Us</h2>
            <p className="text-gray-500 text-sm">
              Welcome to EduCart, where innovation meets education. We are dedicated to providing high-quality,
              accessible online courses that empower learners of all levels to build skills in the most in-demand fields
              of today. From mastering the foundations of HTML and CSS to diving deep into advanced JavaScript
              frameworks like React.js and Next.js, our courses are designed by industry experts to ensure you stay
              ahead of the curve.
              <br />
              <br />
              With courses covering a wide array of technologies including web development, digital marketing, and
              beyond, EduCart is a one-stop-shop for all your learning needs. Join us to start building the future—your
              future.
            </p>
            <div className="flex justify-center mx-auto lg:mx-0 lg:justify-start my-10 lg:space-x-6  flex-wrap">
              <div className="flex flex-col mx-3 lg:mx-0 group">
                <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center  border-gray-400 border-2 group-hover:text-primary transitions-all duration-100 text-secondary rounded-full">
                  10
                </h2>
                <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide text-sm">categorys</h2>
              </div>
              <div className="flex flex-col mx-3 lg:mx-0 group">
                <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center  border-gray-400 border-2 group-hover:text-primary transitions-all duration-100 text-secondary rounded-full">
                  20
                </h2>
                <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide text-sm">Instructors</h2>
              </div>
              <div className="flex flex-col mx-3 lg:mx-0 group">
                <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center  border-gray-400 border-2 group-hover:text-primary transitions-all duration-100 text-secondary rounded-full">
                  40
                </h2>
                <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide text-sm">Courses</h2>
              </div>
              <div className="flex flex-col mx-3 lg:mx-0 group">
                <h2 className="h-[100px] w-[100px]  font-semibold text-2xl flex items-center justify-center  border-gray-400 border-2 group-hover:text-primary transitions-all duration-100 text-secondary rounded-full">
                  500+
                </h2>
                <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide text-sm">Students</h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex hidden justify-center  w-full lg:w-6/12 lg:mt-0 pt-20 pl-10 ">
          <div className="flex flex-col w-full">
            <div className="w-full ">
              <Image className="w-full object-cover h-[300px]" src={img1} alt="about" width={200} height={50} />
            </div>
            <div className="grid grid-cols-2 h-32 gap-5 mt-4">
              <Image className="w-full h-[100px] object-cover" src={img2} alt="about" width={200} height={20} />
              <Image className="w-full h-[100px] object-cover" src={img3} alt="about" width={200} height={50} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
