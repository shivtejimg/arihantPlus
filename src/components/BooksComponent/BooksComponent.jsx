import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import book1 from "../../assets/img/book01.png";
import more from "../../assets/img/down.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CustomButtonSecondary from "../CustomButtonSecondary/CustomButtonSecondary";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";

const bookList = [
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
  {
    id: Math.random() * 1000,
    discount_percentage: "20%",
    thumbnail: book1,
    name: "new book",
    discounted_price: "800",
    price: "1000",
  },
];

const BooksComponent = ({ title, button1, button2,id,onClick1,onClick2 }) => {
  const [selectedTab,setSelectedTab] =useState("bestSeller");
  const navigate = useNavigate();

  const handleClickBestSeller = ()=>{
    setSelectedTab("bestSeller")
  } 

  const handleClickFeatured = ()=>{
    setSelectedTab("featured")
  } 

  return (<>
    <div className="">
      <div className="max-w-6xl  sm:px-6 max-sm:ps-4 mx-auto py-7">
        <h1 className="text-2xl sm:text-3xl  font-semibold text-black pt-5">
          {title}
        </h1>
        <div className="flex items-center sm:gap-6 gap-4 pb-6 ">
          {/* {button1 ? <button className={`w-max min-w-[126px] px-2 pt-1  text-sm sm:w-[200px] 2xl:w-[280px] 2xl:h-[75px]  max-sm:py-2 sm:h-[55px] ${selectedTab==="bestSeller" ?"bg-secondary text-white":"text-secondary"} border-secondary border rounded-full  text-sm sm:text-xl 2xl:text-2xl font-semibold`} onClick={onClick1 ? onClick1 : handleClickBestSeller} >
            Best Seller
          </button> : ""} */}
              {button1 ? <CustomButtonSecondary selected={selectedTab==="bestSeller"} onClick={onClick1 ? onClick1 : handleClickBestSeller} >
                Best Seller
              </CustomButtonSecondary>:""}
              {button2 ? <CustomButtonSecondary selected={selectedTab==="featured"} onClick={onClick2 ? onClick2 : handleClickFeatured} >
              Featured
              </CustomButtonSecondary>:""}
          {/* {button2 ? <button className={`w-max min-w-[126px] px-2 pt-1 text-sm sm:w-[220px] max-sm:py-2 sm:h-[55px] 2xl:w-[280px] 2xl:h-[75px] 2xl:text-2xl ${selectedTab==="featured" ?"bg-secondary text-white":"text-secondary"} border-secondary border rounded-full text-sm sm:text-xl font-semibold 2xl:text-2xl`} onClick={onClick2 ? onClick2 : handleClickFeatured} >
            Featured
          </button> : ""} */}
        </div>
        <div className="relative group/nav">
          <Swiper
            className="size-full sm:p-3 !overflow-y-visible py-2"
            spaceBetween={16}
            slidesPerView={2.2}
            observer={true}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
            navigation={{
              nextEl: `.swiper-button-next-${id}`,
              prevEl: `.swiper-button-prev-${id}`,
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              0: {
                slidesPerView: 2.2,
                spaceBetween: 16,
              },

              420: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
             
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {bookList?.map((el) => (
              <SwiperSlide key={el?.id} >
                <ErrorBoundary>
                  <BookCard data={el} />
                </ErrorBoundary>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={`swiper-button-prev-${id} max-sm:hidden rounded-md *:size-6 text-gray1 bg-white size-5  w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-30 absolute left-0 top-1/2 -translate-y-1/2`}>
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
          <button className={`swiper-button-next-${id} max-sm:hidden rounded-md *:rotate-180 *:size-6 text-gray1 bg-white size-5 w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-30 absolute right-0 top-1/2 -translate-y-1/2`}>
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
        <button className="flex items-center gap-2 mt-5 sm:mt-10" onClick={()=>navigate(PAGE_ROUTES.PRODUCT_LIST+"/JEE-&-Other-Eng.-Exams")} >
          <span className="text-sm sm:text-base font-medium text-black">
            {" "}
            View All{" "}
          </span>
          <span className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
            <img src={more} alt="" />
          </span>
        </button>
      </div>
    </div>
  </>
  );
};
export default BooksComponent;