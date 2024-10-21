import { Swiper, SwiperSlide } from "swiper/react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import TestSeriesCard from "../TestSeriesCard/TestSeriesCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const data = [1,2,3,4,5,6,7,8,9,0,]

const TestSeriesComponent = ({setIsTestDetails=()=>{} }) => {

  return (
    <>
      {/* <div className={`${bgColor ? `bg-[${bgColor}]` : ""} `}> */}
        {/* <div className="relative group/nav  max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  m:py-5 2xl:py-10"> */}
          {/* {title ? <h1 className="text-2xl sm:text-3xl pt-6 font-semibold text-black">
            {title}
          </h1>:""} */}
          {/* <div className="flex items-center gap-3 md:gap-6 pb-6">
            {button1 ? (
              <button className={`min-w-[126px] px-2 max-sm:py-2 sm:w-[200px] md:w-[220px] 2xl:w-[300px] sm:h-[55px]  2xl:h-[75px] border-secondary border ${selectedTab === "button1"? "bg-secondary text-white":"text-secondary"} rounded-full text-sm sm:text-xl 2xl:text-2xl font-semibold`} onClick={handleButton1} >
                Latest Test Series
              </button>
            ) : (
              ""
            )}
            {button2 ? (
              <button className={`min-w-[126px] px-2 max-sm:py-2 sm:w-[200px] md:w-[220px] sm:h-[55px]  2xl:w-[300px] 2xl:h-[75px] ${selectedTab === "button2"? "bg-secondary text-white":"text-secondary"} border-secondary border rounded-full text-sm sm:text-xl 2xl:text-2xl font-semibold`} onClick={handleButton2} >
                Best Seller
              </button>
            ) : (
              ""
            )}
          </div> */}
          <div className=" md:h-[400px]  gap-4 relative">
            <Swiper
              className="size-full"
              spaceBetween={10}
              slidesPerView={2}
              observer={true}
              loop={true}
              modules={[Pagination, Autoplay, Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-test-series",
                prevEl: ".swiper-button-prev-test-series",
              }}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                390: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 2.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3.3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((el)=>(
                <SwiperSlide key={el} >
                <ErrorBoundary>
                  <TestSeriesCard setIsTestDetails={setIsTestDetails}  />
                </ErrorBoundary>
              </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev-test-series rounded-md *:size-6 text-gray1 bg-white  w-7 h-16 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/3 -left-3 -translate-y-1/2 max-sm:hidden">
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
            <button className="swiper-button-next-test-series rounded-md *:rotate-180 *:size-6 text-gray1 bg-white  w-7 h-16 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/3 md:top-[182] -right-3 -translate-y-1/2 max-sm:hidden">
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
          {/* <button className="flex items-center gap-2 max-sm:mt-4">
            <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <a className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={more} alt="" />
            </a>
          </button> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default TestSeriesComponent;
