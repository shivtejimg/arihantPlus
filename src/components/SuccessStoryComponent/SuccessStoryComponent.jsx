import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import successStory1 from "../../assets/img/successStory1.svg";

const data = [1, 2, 3,4,5,6];

const SuccessStoryComponent = () => {
  return (
    <section className="bg-brown2 size-full mt-16">
      <div className="max-w-6xl 2xl:w-full 2xl:max-w-full h-full 2xl:px-40  px-6  mx-auto pt-16 pb-28 relative group">
        <div className=" text-white font-semibold text-3xl mb-36">
          Success Story
        </div>
        <Swiper
          className="size-full -my-32 py-32 "
          spaceBetween={10}
          slidesPerView={1.25}
          centeredSlides={true}
          observer={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-upcoming",
            prevEl: ".swiper-button-prev-upcoming",
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
        >
          {data?.map((el) => (
            <SwiperSlide
              key={el}
              className="p-2 [&.swiper-slide-active]:scale-125 lg:[&.swiper-slide-active]:scale-150 transition-all duration-300 ease-in-out [&.swiper-slide-active]:!z-50"
            >
              <ErrorBoundary>
                <div className="bg-white p-8 rounded-2xl">
                  <div className="-mt-20 rounded-full bg-white mx-auto flex items-center justify-center size-28 p-1 ">
                    <img className="size-full" src={successStory1} alt="" />
                  </div>
                  <div className="text-center">
                    <div className="pt-5 text-xl font-semibold">
                      Kirti Verma
                    </div>
                    <div className="text-[#EC691F] font-medium text-sm pt-3">
                      AIR 152 <span>|</span> JEE Main 2022
                    </div>
                    <div className="pt-5 font-medium text-[10px]">
                      The term below need to be checked and allocated to the
                      definitions (senses) of the headword above
                    </div>
                  </div>
                </div>
              </ErrorBoundary>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next-upcoming rounded-md *:rotate-180 *:size-7 text-gray1  w-7 h-10  flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-2/3 -right-3 -translate-y-2/3">
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
        <button className="swiper-button-prev-upcoming  rounded-md *:size-7 text-gray1  w-7 h-10  flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-2/3 -left-3 -translate-y-2/3">
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
    </section>
  );
};

export default SuccessStoryComponent;
