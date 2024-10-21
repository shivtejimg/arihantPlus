import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import banner from "../../assets/img/banner.png";
import bannerSmall from "../../assets/img/booklistbanner2.png";
import { Pagination, Autoplay } from "swiper/modules";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const HeroComponent = () => {
  return (
    <ErrorBoundary>
    <div className="w-full *:size-full pt-12 lg:pt-0">
      <Swiper
        className="size-full"
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="">
            <img className="!w-full hidden sm:flex" src={banner} alt="" />
            <img className="!w-full sm:hidden " src={bannerSmall} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="!w-full hidden sm:flex" src={banner} alt="" />
            <img className="!w-full sm:hidden" src={bannerSmall} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="!w-full hidden sm:flex" src={banner} alt="" />
            <img className="!w-full sm:hidden" src={bannerSmall} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </ErrorBoundary>
  );
};

export default HeroComponent;
