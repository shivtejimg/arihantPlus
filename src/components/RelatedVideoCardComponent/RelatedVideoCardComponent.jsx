import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard"

const data = [1,2,3,4,5,6]

const RelatedVideoCardComponent = () => {
  return (
    <section>
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full h-full 2xl:px-40 px-6  pt-16 mx-auto relative group">
      <div className="pb-9 font-semibold text-3xl">Related Videos</div>
      <Swiper
        className="size-full [&.swiper-button-prev-upcoming]:!bg-red-400 "
        spaceBetween={10}
        slidesPerView={1.25}
      
        observer={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-upcoming",
          prevEl: ".swiper-button-prev-upcoming",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((el) => (
          <SwiperSlide key={el} className="p-2 ">
            <ErrorBoundary>
                <RelatedVideoCard />
            </ErrorBoundary>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-next-upcoming rounded-md *:rotate-180 *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-2/3 -right-3 -translate-y-2/3">
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
      <button className="swiper-button-prev-upcoming  rounded-md *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-2/3 -left-3 -translate-y-2/3">
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
  )
}

export default RelatedVideoCardComponent