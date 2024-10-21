import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import UpcomingCard from '../UpcomingCard/UpcomingCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import more from "../../assets/img/down.png";
import CustomButtonSecondary from '../CustomButtonSecondary/CustomButtonSecondary';

const UpcomingBooksComponent = ({ data=[] }) => {
  return (
    <ErrorBoundary>
    <div className="bg-white2 pt-20 pb-10 2xl:py-10">
    <div className="max-w-6xl   px-4 mx-auto">
      {/* <p className="px-2 py-3 min-w-[126px] 2xl:h-[75px] md:h-[55px] md:w-[240px] justify-center items-center flex bg-secondary w-max rounded-full text-white text-sm md:text-base lg:text-xl 2xl:text-2xl">
        Upcoming Books
      </p> */}
      <CustomButtonSecondary selected={true} >
        Upcoming Books
      </CustomButtonSecondary>
      <div className="pb-5 pt-12 relative group ">
        <Swiper
          className="size-full"
          spaceBetween={10}
          slidesPerView={1.25}
          observer={true}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-upcoming',
            prevEl: '.swiper-button-prev-upcoming',
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
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
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((el)=>(
            <SwiperSlide key={el?.id} className='p-2'  >
                <ErrorBoundary>
                    <UpcomingCard data={el}  />
                </ErrorBoundary>
            </SwiperSlide>))}
        </Swiper>
         <button
            className="swiper-button-prev-upcoming  rounded-md *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-1/2 -left-3 -translate-y-1/2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
              </path>
            </svg>
          </button>
          <button
            className="swiper-button-next-upcoming rounded-md *:rotate-180 *:size-6 text-gray1 bg-white w-7 h-10 shadow-xl border flex opacity-0 group-hover:opacity-100 duration-300 justify-center items-center  z-50 absolute top-1/2 -right-3 -translate-y-1/2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
              </path>
            </svg>
          </button>
      </div>
      <button className="flex items-center gap-2 max-sm:mt-4">
            <span className="text-sm sm:text-base font-Isidora_Sans 2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <button className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={more} alt="" />
            </button>
          </button>
    </div>
  </div>
</ErrorBoundary>
  )
}
export default UpcomingBooksComponent;