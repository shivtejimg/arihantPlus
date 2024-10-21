import React, { useEffect, useRef, useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import HeroHome from "../../assets/img/hero_home.png";
import education from "../../assets/img/education.png";
import railway from "../../assets/img/railway.png";
import law from "../../assets/img/law.png";
import upsc from "../../assets/img/upsc.png";
import ssc from "../../assets/img/ssc.png";
import iit from "../../assets/img/iit.png";
import neet from "../../assets/img/neet.png";
import university from "../../assets/img/university.png";
import nda from "../../assets/img/nda.png";
import army from "../../assets/img/army.png";
import ctet from "../../assets/img/ctet.png";
import teacher from "../../assets/img/teacher.png";
import school1 from "../../assets/img/school1.png";
import school2 from "../../assets/img/school2.png";
import banker from "../../assets/img/banker.png";
import centeral from "../../assets/img/centeral.png";
import state from "../../assets/img/state.png";
import iti from "../../assets/img/iti.png";
import more from "../../assets/img/Line_25.png";
import { useNavigate, useParams } from "react-router-dom";
import notification from "../../assets/img/Notification.png";
import gift from "../../assets/img/gift.png";
import mock from "../../assets/img/mock.png";
import cta from "../../assets/img/topper.png";
import rightarrow from "../../assets/img/Arrow_4.png";
import BooksComponent from "../../components/BooksComponent/BooksComponent";
import TestSeriesComponent from "../../components/TestSeriesComponent/TestSeriesComponent";
import VideoCardComponent from "../../components/VideoCardComponent/VideoCardComponent";
import Countup from "react-countup-animate";
import { PAGE_ROUTES } from "../../constants/RouteConstants";
import CustomButtonSecondary from "../../components/CustomButtonSecondary/CustomButtonSecondary";


const data = [1, 2, 3, 4, 5];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const { bookName } = useParams();
  const [isInView, setIsInView] = useState(false);
  const [isNewsLetterInView, setIsNewsLetterInView] = useState(false);
  const sectionRef = useRef(null);
  const newsLetterRef = useRef(null);
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("button1");
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "JEE & Other Eng. Exams",
      image: iit,
    },
    {
      id: "2",
      name: "NEET",
      image: neet,
    },
    {
      id: "3",
      name: "CUET",
      image: university,
    },
    {
      id: "4",
      name: "Management & Other Exams",
      image: education,
    },
    {
      id: "5",
      name: "CLAT & Law Admissions",
      image: law,
    },
    {
      id: "6",
      name: "NDA, CDS & Asst. Commandant",
      image: nda,
    },
  ]);

  const [catViewMore, setCatViewMore] = useState(false);

  const handleMore = () => {
    setCatViewMore(true);
    setCategories(prev => ([
      ...prev,
      {
        id: "7",
        name: "IAS & State PSC",
        image: upsc,
      },
      {
        id: "8",
        name: "Banking & Insurance",
        image: banker,
      },
      {
        id: "9",
        name: "SSC Exams",
        image: ssc,
      },
      {
        id: "10",
        name: "Railways Exams",
        image: railway,
      },
      {
        id: "11",
        name: "Army, Navy & Airforce",
        image: army,
      },
      {
        id: "12",
        name: "CTET & State TETs",
        image: ctet,
      },

      {
        id: "13",
        name: "Other Central Govt. Exams",
        image: centeral,
      },
      {
        id: "14",
        name: "State Govt. Exams",
        image: state,
      },
      {
        id: "15",
        name: "Teacher Recruitment",
        image: teacher,
      },
      {
        id: "16",
        name: "School  Curriculam",
        image: school1,
      },
      {
        id: "17",
        name: "School  Admissions",
        image: school2,
      },
      {
        id: "18",
        name: "ITI Books",
        image: iti,
      },
    ]))
  }

  const handleLess = () => {
    setCatViewMore(false);
    const filtered = categories.filter((item, i) => i <= 5);
    setCategories(filtered);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Adjust this to control when the class is added
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNewsLetterInView(true);
        }
      },
      { threshold: 0.1 } // Adjust this to control when the class is added
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (newsLetterRef.current) {
      observer2.observe(newsLetterRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        observer2.unobserve(newsLetterRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    // navigate(`${PAGE_ROUTES.BOOK_DETAIL}/${data?.id?data?.id:""}`);
  };

  return (
    <AppLayout>
      <ErrorBoundary>
        <Swiper
          className="size-full pt-[120px] md:pt-32 lg:pt-20  max-sm:px-4 px-6"
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          // loopAdditionalSlides={3}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // 640: {
            //   slidesPerView: 1.08,
            //   spaceBetween: 20,
            // },
            640: {
              slidesPerView: 1.08,
              spaceBetween: 20,
            },
            730: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            1480: {
              slidesPerView: 1.15,
              spaceBetween: 30,
            },
          }}
        >
          {data?.map((el, index) => (
            <SwiperSlide key={index}>
              <div className=" py-2 *:h-52 w-full *:w-full  sm:*:h-72 *:object-cover *:rounded-2xl">
                <img src={HeroHome} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ErrorBoundary>
      <div className="max-w-6xl  px-4 sm:px-6 mx-auto py-6 ">
        <p className="text-base    font-medium text-black">
          Tools and Resources{" "}
        </p>
        <div className="text-2xl sm:text-5xl font-semibold text-black">
          Explore our <span className="text-primary">Top Categories</span>
        </div>
        <p className="text-sm sm:text-xl font-normal text-[#6F757C] pt-3 pb-6 w-full sm:w-2/3 text-pretty">
          Whether you want to be a doctor, an engineer, a bureaucrat or want to
          join government to help them run smoothly or simply want to excel in
          your school studies, we have got you covered.
        </p>
        <div className="grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-4 pt-4 gap-4  sm:*:h-36">
          {categories?.map((item) => (
            <ErrorBoundary key={item?.id}>
              <CategoriesCard
                data={item}
                selectedCategory={selectedCategory}
                handleClick={() => {
                  const replaced = item?.name.replaceAll(" ", "-");
                  navigate(`${PAGE_ROUTES?.PRODUCT_LIST}/${replaced}`);
                }}
              />
            </ErrorBoundary>
          ))}
        </div>
        {!catViewMore ? <button className="flex mb-3  items-center gap-2 mt-12" onClick={handleMore} >
          <span className="text-sm sm:text-base font-medium text-black">
            {" "}
            View More{" "}
          </span>
          <span className="size-3 sm:size-4 *:size-full *:object-contain *:rotate-[270deg]">
            <img src={more} alt="" />
          </span>
        </button> : <button className="flex mb-3  items-center gap-2 mt-12" onClick={handleLess} >
          <span className="text-sm sm:text-base font-medium text-black">
            {" "}
            View Less{" "}
          </span>
          <span className="size-3 sm:size-4 *:size-full *:object-contain *:rotate-[90deg]">
            <img src={more} alt="" />
          </span>
        </button>}
      </div>

      <div className="bg-[#6F757C12] md:pb-16">
        <BooksComponent button1={true} button2={true} />
      </div>

      <div className="py-10 md:py-16 ">
        <div>
          <div className="relative group/nav  max-w-6xl  ps-4 sm:px-6 mx-auto  m:py-5 max-sm:overflow-hidden">
            <div className="flex items-center gap-3 md:gap-6 pb-6 md:pb-12">
              {/* <button
                className={`min-w-[126px] px-2 max-sm:py-2 sm:w-[200px] md:w-[200px] 2xl:w-[300px] sm:h-[55px]  2xl:h-[75px] border-secondary border ${
                  selectedTab === "button1"
                    ? "bg-secondary text-white"
                    : "text-secondary"
                } rounded-full text-sm sm:text-xl  font-semibold`}
                onClick={() => setSelectedTab("button1")}
              >
                Latest Test Series
              </button> */}

              <CustomButtonSecondary selected={selectedTab === "button1"} onClick={() => setSelectedTab("button1")} >
                Latest Test Series
              </CustomButtonSecondary>
              {/* <button
                className={`min-w-[126px] px-2 max-sm:py-2 sm:w-[200px] md:w-[200px] sm:h-[55px]  2xl:w-[300px] 2xl:h-[75px] ${
                  selectedTab === "button2"
                    ? "bg-secondary text-white"
                    : "text-secondary"
                } border-secondary border rounded-full text-sm sm:text-xl  font-semibold`}
                onClick={() => setSelectedTab("button2")}
              >
                Best Seller
              </button> */}
              <CustomButtonSecondary selected={selectedTab === "button2"} onClick={() => setSelectedTab("button2")} >
                Best Seller
              </CustomButtonSecondary>
            </div>
            <TestSeriesComponent />
            <button className="flex items-center gap-2 max-md:mt-16" onClick={() => navigate(PAGE_ROUTES.PRODUCT_LIST + "/JEE-&-Other-Eng.-Exams")} >
              <span className="text-sm sm:text-base   font-medium text-black">
                {" "}
                View All{" "}
              </span>
              <span className="size-3 sm:size-4 *:size-full *:object-contain -rotate-180">
                <img src={more} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#C63252] ">
        <div className="max-w-6xl   px-4 sm:px-6 mx-auto py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 !gap-4">
            <div className="bg-white group rounded-xl p-4">
              <div className="flex items-center pb-2 gap-6">
                <div className="size-8 lg:size-10 *:size-full *:object-contain">
                  <img src={notification} alt="" />
                </div>
                <div className="text-xl lg:text-2xl  font-semibold text-black group-hover:scale-105 duration-300">
                  Latest News / Notifications
                </div>
              </div>
              <div className="flex  items-center pt-2 gap-4">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </div>
              </div>
              <div className="flex items-center pt-2 gap-4">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet,
                  consectetur{" "}
                </div>
              </div>
              <div className="flex items-center pt-2 pb-2 gap-4">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </div>
              </div>
            </div>

            <div className="bg-white group rounded-xl p-4">
              <div className="flex items-center pb-2 gap-6">
                <div className="size-8 lg:size-10 *:size-full *:object-contain">
                  <img src={mock} alt="" />
                </div>
                <div className="text-xl lg:text-2xl  font-semibold text-black group-hover:scale-105 duration-300">
                  Attempt FREE MOCK TEST
                </div>
              </div>
              <div className="flex items-center pt-2 gap-4">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </div>
              </div>
              <div className="flex items-center pt-2 gap-4">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet,
                  consectetur{" "}
                </div>
              </div>
              <div className="flex items-center pt-2 gap-4 pb-2">
                <div className="text-sm size-5 min-h-5 rounded-full flex items-center justify-center shrink-0 bg-[#E7DEE3]">
                  {" "}
                  1
                </div>
                <div className="text-xs lg:text-sm  font-semibold text-black">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </div>
              </div>
            </div>
            <div className="bg-white group rounded-xl p-4">
              <div className="flex items-center pb-2 gap-6">
                <div className="size-8 lg:size-10 *:size-full *:object-contain">
                  <img src={gift} alt="" />
                </div>
                <div className="text-xl lg:text-2xl  font-semibold text-black group-hover:scale-105 duration-300">
                  Day Challenge & Win gauranted Gift
                </div>
              </div>
              <div className="text-xs lg:text-sm  font-semibold text-black pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-3" >
        <VideoCardComponent />
      </div>

      <div className="bg-[#CCB9C4] group md:py-1 py-6 md:mt-7" ref={newsLetterRef}>
        <div className="grid grid-cols-12 justify-between items-center max-w-6xl   px-4 sm:px-6 mx-auto">
          <div className="col-span-8">
            <div className="text-sm  text-pretty sm:text-2xl md:text-3xl text-white font-semibold">
              Our Monthly Newsletter for Exclusive Content, Exams Tips, New
              Releases and more...
            </div>
            <button className=" flex bg-white gap-2 text-center group/btn max-md:bg-primary md:hover:bg-primary hover:text-white duration-300 items-center  justify-center rounded-full w-[140px]  sm:w-[200px] md:w-[223px] max-md:py-2 md:h-[54px] text-sm sm:text-xl md:text-2xl font-semibold text-black mt-4 md:mt-14">
              <span className=" md:group-hover/btn:-translate-x-4 max-md:-translate-x-3  md:group-hover/btn:text-white max-md:text-white duration-300 inline-block">
                Subscribe{" "}
              </span>
              <span className="size-5 sm:w-8 sm:h-2 flex items-center  absolute *:size-full *:object-contain pl-1 max-sm:translate-x-10 max-md:translate-x-16 max-md:opacity-100 md:opacity-0 md:group-hover/btn:opacity-100 md:group-hover/btn:translate-x-16 duration-300">
                <img src={rightarrow} alt="" />
              </span>
            </button>
          </div>
          <div
            className={`col-span-4 *:w-[349px] *:md:h-[416px] smh-[178px] *:object-contain ${isNewsLetterInView ? "animate-ctaanimation" : ""
              } duration-10 `}
          >
            <img src={cta} alt="" />
          </div>
        </div>
      </div>

      <div className=" max-w-6xl   px-4 sm:px-6 mx-auto py-16">
        <p className="text-xl sm:text-3xl  font-semibold text-black">
          The Journey
        </p>
        <p className=" sm:w-2/3 max-sm:text-xs  text-pretty text-[#6F757C] font-normal">
          From one Man’s dream to passion of thousands individuals, measure of
          our success has always been your achievements. Since 1997, we have
          come far yet we feel the journey has just begun.
        </p>
        <div className="grid grid-cols-5 mt-6 gap-1" ref={sectionRef}>
          {isInView ? (
            <div className=" text-center me-auto count-up">
              <div className="flex justify-center  items-center *:font-semibold text-base sm:text-3xl md:text-[40px] text-primary">
                <Countup number={27.5} startDelay={0.5} />
                <div>L</div>
              </div>
              <p className="text-[#6F757C] text-[10px] sm:text-base  text-center">
                Active Users
              </p>
            </div>
          ) : (
            ""
          )}

          {isInView ? (
            <div className=" text-center me-auto">
              <div className="flex justify-center  items-center *:font-semibold text-base sm:text-3xl md:text-[40px] text-primary">
                <Countup number={20} startDelay={0.5} />
                <div>+</div>
              </div>
              <p className="text-[#6F757C] text-[10px] sm:text-base  text-center">
                Years of existence
              </p>
            </div>
          ) : (
            ""
          )}

          {isInView ? (
            <div className=" text-center me-auto">
              <div className="flex justify-center  items-center *:font-semibold text-base sm:text-3xl md:text-[40px] text-primary">
                <Countup number={23} startDelay={0.5} />
              </div>
              <p className="text-[#6F757C] text-[10px] sm:text-base  text-center">
                Offices Pan India
              </p>
            </div>
          ) : (
            ""
          )}

          {isInView ? (
            <div className=" text-center me-auto">
              <div className="flex justify-center  items-center *:font-semibold text-base sm:text-3xl md:text-[40px] text-primary">
                <Countup number={6000} startDelay={0.5} />
                <div>+</div>
              </div>
              <p className="text-[#6F757C] text-[10px] sm:text-base  text-center">
                Retails and Distributors
              </p>
            </div>
          ) : (
            ""
          )}

          {isInView ? (
            <div className=" text-center me-auto">
              <div className="flex justify-center  items-center  *:font-semibold text-base sm:text-3xl md:text-[40px] text-primary">
                <Countup number={7000} startDelay={0.5} />
                <div>+</div>
              </div>
              <p className="text-[#6F757C] text-[10px] sm:text-base  text-center">
                Working Professionals
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
