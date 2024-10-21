import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import book from "../../assets/img/Rectangle 59.png";
import online from "../../assets/img/online.png";
import live from "../../assets/img/liveclasses.png";
import quiz from "../../assets/img/puzzle.png";
import box from "../../assets/img/box.png";
import check from "../../assets/img/check.png";
import global from "../../assets/img/global.png";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import CategoriesCard2 from '../CategoriesCard2/CategoriesCard2';

const categories = [
    {
      id: "1",
      name: "Study Books & Resources",
      image: book,
    },
    {
      id: "2",
      name: "Online Test Series",
      image: online,
    },
    {
      id: "3",
      name: "Live Classes & Video Classes",
      image: live,
    },
    {
      id: "4",
      name: "Free Quizzes",
      image: quiz,
    },
    {
      id: "5",
      name: "Free PYQs Download",
      image: box,
    },
    {
      id: "6",
      name: "About Exam",
      image: check,
    },
    {
      id: "7",
      name: "Current Affairs",
      image: global,
    },
  ];

const CategoriesSlider = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Swiper
    className="size-full  *:items-stretch pt-[30px]"
    spaceBetween={10}
    slidesPerView={2.5}
    observer={true}
    modules={[Pagination, Autoplay, Navigation]}
    navigation={{
      nextEl: ".swiper-button-next-categories",
      prevEl: ".swiper-button-prev-categories",
    }}
    breakpoints={{
      392: {
        slidesPerView: 2.5,
        spaceBetween: 2,
      },
      500: {
        slidesPerView: 3.3,
        spaceBetween: 5,
      },
      744: {
        slidesPerView: 5.7,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    }}
  >
    {categories?.map((item) => (
      <SwiperSlide key={item?.id} className="p-2 *:h-full !h-auto">
        <ErrorBoundary key={item?.id}>
          <CategoriesCard2
            data={item}
            selectedCategory={selectedCategory}
            handleClick={()=>{
              setSelectedCategory(item?.id)
            }}
          />
        </ErrorBoundary>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default CategoriesSlider