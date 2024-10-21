import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import playCircleIcon from "../../assets/img/playCircleIcon.svg";
import smallPlayCircleIcon from "../../assets/img/smallPlayCircleIcon.svg";
import ArihantPlusMasterClassAnimation from "../ArihantPlusMasterClassAnimation/ArihantPlusMasterClassAnimation";
import student1 from "../../assets/img/student1.png";
import student2 from "../../assets/img/student2.png";
import student3 from "../../assets/img/student3.png";
import circle from "../../assets/img/circle.png";

const ArihantPlusMasterClass = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 } // Adjust this to control when the class is added
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl  px-4 mx-auto  py-8 overflow-hidden">
      <div className="grid grid-cols-12 items-center">

        <div className="lg:col-span-6 md:col-span-5 col-span-12 ">
          <div className="text-2xl sm:text-3xl 2xl:text-5xl font-semibold text-black">
            Excel Exams with <span className="text-primary">Arihant Plus</span>{" "}
            Online Masterclass
          </div>
          <p className="text-gray1 text-base 2xl:text-xl mt-4">
            Gain access to expert-led sesssions, comprehensive study materials,
            and personalized guidance designed to help you master every subject
            and achieve top scores. Join now and unlock your potential with
            Arihant
          </p>
          <button
            className="w-[242px] hidden md:inline-flex items-center h-[62px] p-1 hover:w-[320px] duration-300 bg-primary rounded-full  mt-5"
          >
            <p className="text-lg text-white font-semibold mx-auto">Explore</p>
            <div className="bg-white flex justify-center items-center rounded-full h-full aspect-[1/1]">
              <img src={playCircleIcon} alt="" />
            </div>
          </button>
        </div>

        {/* <div className="items-center relative justify-center lg:col-span-6 md:col-span-7 col-span-12 mt-10 md:mt-0  flex zoom sm:zoom-none [zoom:0.5] sm:[zoom:.9]  md:[zoom:0.7] xl:[zoom:0.0] 2xl:[zoom:1.2]">
          <div
            ref={sectionRef}
            className={`relative w-60 ${
              isInView ? "custom-section in-view" : "custom-section"
            }`}
          >
            <img src={student1} alt="" className="size-full z-50 w-full" />

            <div className="absolute md:size-28 size-24 *:size-full *:object-cover left-0 md:top-10  top-5 z-10">
            <img src={circle} alt="" />
          </div>
            <motion.section
              className={`absolute left-0  top-0 flex items-center -z-20 w-96 `}
              initial={{ translateX: "0px" }}
              animate={{ translateX: isInView ? "-120px" : "-40px" }}
            >
              <img
                src={student2}
                alt=""
                className={`w-44 ${
                  isInView ? "animate-masterclass-image-1" : ""
                } transition-all`}
              />

            </motion.section>
            <motion.section
              className={`absolute inset-0 flex items-center justify-end -z-10 w-60`}
              initial={{ translateX: "0px" }}
              animate={{ translateX: isInView ? "120px" : "40px" }}
            >
              <img
                src={student3}
                alt=""
                className={`w-36 ${isInView ? "animate-masterclass-image-2" : ""}`}
              />
          <div className="absolute size-20  *:size-full *:object-cover -right-10  md:bottom-24 bottom-20">
            <img src={circle} alt="" />
          </div>
            </motion.section>
          </div>
          <button
            className={`p-1 text-base md:text-[14px] pr-3.5 font-medium shadow-xl z-30 rounded-md absolute top-12 left-12  flex items-center gap-4 text-black2  bg-white transition-all ${
              isInView
                ? "animate-masterclass-text-1 opacity-100 delay-500"
                : "opacity-0 delay-0 "
            }`}
          >
            <span className="size-7 rounded-full">
              <img src={smallPlayCircleIcon} alt="" className="size-7 max-w-7" />
            </span>
            Problem Solving
          </button>
          <button
            className={`p-1 text-base md:text-[14px] pr-3.5 font-medium shadow-xl z-30 rounded-md absolute top-10 right-32 flex items-center gap-4 text-black2 bg-white transition-all ${
              isInView
                ? "animate-masterclass-text-2 opacity-100 delay-700"
                : "opacity-0 delay-0"
            }`}
          >
            <span className="size-7 rounded-full">
              <img src={smallPlayCircleIcon} alt="" className="size-7 max-w-7" />
            </span>
            Exam Strategy
          </button>
          <button
            className={`p-1 text-base md:text-[14px] pr-3.5 font-medium shadow-xl z-30 rounded-md absolute bottom-28 left-40 flex items-center gap-4 text-black2 bg-white transition-all  ${
              isInView
                ? "animate-masterclass-text-3 opacity-100 delay-1000"
                : "opacity-0 delay-0"
            }`}
          >
            <span className="size-7 rounded-full">
              <img src={smallPlayCircleIcon} alt="" className="size-7 max-w-7" />
            </span>
            Concept Clarity
          </button>
        </div> */}
        <div className="items-center relative justify-center lg:col-span-6 md:col-span-7 col-span-12 mt-10 md:mt-0" >
          <ArihantPlusMasterClassAnimation />
        </div>
      </div>

      <div className="">
      <div className="text-center flex justify-center   md:hidden" >
        <button
            className="w-[242px]  items-center h-[62px] p-1 duration-300 bg-primary rounded-full flex mt-5"
          >
            <p className="text-lg text-white font-semibold mx-auto">Explore</p>
            <div className="bg-white flex justify-center items-center rounded-full h-full aspect-[1/1]">
              <img src={playCircleIcon} alt="" />
            </div>
          </button>
      </div >
      </div>
    </div>

  );
};

export default ArihantPlusMasterClass;
