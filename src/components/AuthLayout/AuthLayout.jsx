import React, { useEffect, useState } from "react";
import logo from "../../assets/img/ArihantPlus-logo_1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { getAPI } from "../../utils/apiServices";
import { API_ROUTES } from "../../constants/ApiConstants";
import { addWalkThrough } from "../../store/walkthroughSlice/walkthroughSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const AuthLayout = ({ children }) => {
  const [walkThrough,setWalkThrough] = useState([]);
  const dispatch = useDispatch(); 
  const walkThroughStored = useSelector(state=>state.walkthrough);
  
  const getWalkThrough =async ()=>{
    try {
      const res =await getAPI(API_ROUTES.WALKTHROUGHS);
      
      setWalkThrough(res?.data?.items || []);
      
      dispatch(addWalkThrough(res?.data?.items || []))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!walkThroughStored?.length){
      getWalkThrough();
    }else{
      setWalkThrough(walkThroughStored);
    }
  },[]);

  return (
    <ErrorBoundary>
    <div className="flex-col">
      <div className="w-full items-center h-full sm:min-h-dvh bg-white px-4 py-12 bg-gradient-to-t  sm:bg-gradient-to-r from-secondary to-primary flex flex-col">
        <div className="grow "></div>

        
        <div className="bg-white rounded-2xl max-w-[736px] 2xl:max-w-6xl h-full w-full mx-auto sm:rounded-lg sm:rounded-bl-[80px] overflow-hidden sm:border-8 border-white relative">
        <div className="*:w-32 py-1 w-full max-sm:flex hidden justify-center">
            <img className="size-full" src={logo} alt="" />
          </div>
     
          <div className="flex max-sm:flex-col h-full justify-start w-full">
            <div className="sm:w-[296px] 2xl:w-[430px] w-full max-sm:h-[153px] sm:flex relative sm:rounded-lg  sm:rounded-bl-[70px] before:absolute justify-center items-center before:!w-full before:-inset-x-0 before:inset-y-14 bg-[#FFAE00] before:[background:radial-gradient(#EEF91A,_#EEF91A,_#EEF91A,_#FFAE0000,_#FFAE0000)] before:blur-lg">
              <Swiper
                className="h-max w-full m-0 p-0 rounded-lg max-sm:[&_.swiper-pagination-bullets]:text-right max-sm:[&_.swiper-pagination-bullets]:px-4 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:!bg-secondary  "
                spaceBetween={0}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop={true}
                // autoplay={{
                //   delay: 3000,
                //   disableOnInteraction: false,
                // }}
              >
                {walkThrough?.map((item)=>(
                  <SwiperSlide className="flex justify-center items-center" key={item.id} >
                  <div className="flex sm:flex-col sm:justify-between">
                    <div className="flex  items-center">
                      <img
                        className="rounded-lg rounded-bl-[70px] sm:size-[250px] size-[124px] min-w-[124px] object-cover 2xl:object-contain grow"
                        src={item?.url}
                        alt={item?.text}
                      />
                    </div>
                      <div className="sm:text-center text-left font-semibold text-[12px] px-4 leading-4 sm:text-base text-lg mt-4 mb-8">
                      {item?.text}
                      </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </div>
        </div>
        <div className="grow max-sm:hidden"></div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default AuthLayout;