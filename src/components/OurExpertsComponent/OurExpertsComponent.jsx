import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ExpertsCard from "../ExpertsCard/ExpertsCard";

const data = [1, 2, 4, 5, 6, 7, 8, 9, 0];

const OurExpertsComponent = () => {
  return (
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  group/test mb-5">
      <div className="bg-[#DFE1E5] relative  p-6 py-12 rounded-xl">
        <p className="text-3xl font-semibold text-black mb-5">Our Experts</p>
        <Swiper
          className="size-full"
          spaceBetween={10}
          slidesPerView={1}
          observer={true}
          loop={true}
          modules={[Pagination,
            //  Autoplay,
              Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-experts",
            prevEl: ".swiper-button-prev-experts",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            393: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {data.map((el) => (
            <SwiperSlide key={el} >
              <ErrorBoundary>
                <ExpertsCard />
              </ErrorBoundary>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev-experts rounded-md *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover/test:opacity-100 duration-300 justify-center items-center  z-20 absolute top-60 -left-3 -translate-y-1/2">
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
        <button className="swiper-button-next-experts rounded-md *:rotate-180 *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover/test:opacity-100 duration-300 justify-center items-center  z-20 absolute top-60 -right-3 -translate-y-1/2">
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
    </div>
  );
};

export default OurExpertsComponent;
