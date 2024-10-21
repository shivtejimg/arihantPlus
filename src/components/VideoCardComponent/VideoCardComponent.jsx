import { useState } from "react";
import more from "../../assets/img/Line_25.png";
import VideoCard from "../VideoCard/VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CustomButtonSecondary from "../CustomButtonSecondary/CustomButtonSecondary";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";

const data = [1, 2, 3, 4, 5, 6];

const VideoCardComponent = () => {
  const [selectedTab, setSelectedTab] = useState("button1");
  const navigate = useNavigate();

  const handleButton1 = () => {
    setSelectedTab("button1");
  };

  const handleButton2 = () => {
    setSelectedTab("button2");
  };

  return (
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  ps-4 sm:px-6 mx-auto py-10 sm:py-16 max-sm:overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-6 pb-7 sm:pb-10">
        {/* <button className={`w-max px-2 text-sm sm:w-[240px] sm:h-[55px] 2xl:h-[75px] 2xl:w-[300px] border-secondary border ${selectedTab === "button1"? "bg-secondary text-white":"text-secondary"} rounded-full max-sm:py-2 text-sm sm:text-xl 2xl:text-2xl font-semibold`} onClick={handleButton1} >
        Trending Videos
      </button> */}
        <CustomButtonSecondary
          selected={selectedTab === "button1"}
          onClick={() => setSelectedTab("button1")}
        >
          Trending Videos
        </CustomButtonSecondary>
        <CustomButtonSecondary
          selected={selectedTab === "button2"}
          onClick={() => setSelectedTab("button2")}
        >
          Popular Video Courses
        </CustomButtonSecondary>
        {/* <button className={`w-max px-2 text-sm sm:w-[240px] sm:h-[55px]  2xl:h-[75px] 2xl:w-[300px] border-secondary border  ${selectedTab === "button2"? "bg-secondary text-white":"text-secondary"} rounded-full max-sm:py-2 text-sm sm:text-xl font-semibold 2xl:text-2xl` } onClick={handleButton2} >
        Popular Video Courses
      </button> */}
      </div>
      <div className="md:mt-4 relative group ">
        <Swiper
          className="size-full"
          spaceBetween={10}
          slidesPerView={1.25}
          observer={true}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-video",
            prevEl: ".swiper-button-prev-video",
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            390:{
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            525: {
              slidesPerView: 2.7,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {data?.map((el) => (
            <SwiperSlide key={el}>
              <ErrorBoundary>
                <VideoCard />
              </ErrorBoundary>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev-video  rounded-md *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-1/2 -left-3 -translate-y-1/2 max-sm:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
          </svg>
        </button>
        <button className="swiper-button-next-video rounded-md *:rotate-180 *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-1/2 -right-3 -translate-y-1/2 max-sm:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
          </svg>
        </button>
      </div>

      <button className="flex mt-6 sm;mt-[44px] items-center gap-2">
        <span className="text-sm sm:text-base 2xl:text-2xl font-medium text-black" onClick={()=>navigate(PAGE_ROUTES.PRODUCT_LIST+"/JEE-&-Other-Eng.-Exams")} >
          {" "}
          View All{" "}
        </span>
        <span className="mt-1 size-3 sm:size-4 *:size-full *:object-contain *:rotate-180">
          <img src={more} alt="" />
        </span>
      </button>
    </div>
  );
};

export default VideoCardComponent;
