import { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import shareIcon from "../../assets/img/shareIcon.svg";
import starfill from "../../assets/img/starbg.png";
import book1 from "../../assets/img/book01.png";
import whitebtn from "../../assets/img/whitebtn.png";
import arrow from "../../assets/img/down.png";
import bookzoom from "../../assets/img/bookdetail.png";
// import play2 from "../../assets/img/whiteplay.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAPI } from "../../utils/apiServices";
import { API_ROUTES, BASE_URL } from "../../constants/ApiConstants";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import delivery from "../../assets/img/Delivery.png";
import secure from "../../assets/img/secure.png";
import cod from "../../assets/img/cod.png";
import return1 from "../../assets/img/return.png";
import document from "../../assets/img/document.png";
import earth from "../../assets/img/earth.png";
import date from "../../assets/img/date.png";
import bank from "../../assets/img/bank.png";
import video from "../../assets/img/video.mp4";
import cut from "../../assets/img/cut.png";
import arrowright from "../../assets/img/Arrow_4.png";
import rupee from "../../assets/img/rupee.png";
import BooksComponent from "../../components/BooksComponent/BooksComponent";
import TestSeriesComponent from "../../components/TestSeriesComponent/TestSeriesComponent";
import ArihantPlusMasterClass from "../../components/ArihantPlusMasterClass/ArihantPlusMasterClass";
import FrequentlyBoughtTogether from "../../components/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import RecommendedComponent from "../../components/RecommendedComponent/RecommendedComponent";
import Modal from "../../components/Modal/Modal";
import SpecificationComponent from "../../components/SpecificationComponent/SpecificationComponent";
import RatingListComponent from "../../components/RatingListComponent/RatingListComponent";
import parse from "html-react-parser";
import { PAGE_ROUTES } from "../../constants/RouteConstants";
import more from "../../assets/img/down.png";
import { PDFReader } from 'reactjs-pdf-reader';
import PdfModal from "../../components/PdfModal/PdfModal";

const BooksDetails = () => {
  const { bookName } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [pdfPreview, setPdfPreview] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const getBookDetails = async () => {
    try {
      // TODO:- getAPI change to getAPIAuth
      const res = await getAPI(
        API_ROUTES.BOOK_DETAILS +
        "/sanklap-series-for-railway-exam-2024-complete-study-guide-for-samanya-jagrukta-ga-useful-for-group-d-ntpc-alp-rfsi-constable-with-online-suppor-9789364376945/"
      );
      setData(res?.data?.item_details || {});
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const handleBuyNow = () => {
    navigate(PAGE_ROUTES.ORDER_PAGE);
  };

  return (
    <AppLayout>
      <ErrorBoundary>
        <div className="pt-20">
          <HeroComponent />
        </div>
      </ErrorBoundary>

      <div className="max-w-6xl px-4 mx-auto lg:pt-6 sm:pt-[22px] pt-4 ">
        <div className="flex items-center text-nowrap max-sm:justify-center">
          <Link
            className="sm:text-xs text-[10px] font-medium leading-[14.4px] text-gray1 inline-block"
            to={PAGE_ROUTES.HOME}
          >
            Home
          </Link>
          <span className="px-1 sm:text-xs text-[10px] font-medium leading-[14.4px] text-black inline-block">
            /
          </span>
          <Link className="sm:text-xs text-[10px] font-medium leading-[14.4px] text-gray1">
            Jee & Other Eng Entrances
          </Link>
          <span className="px-1 sm:text-xs text-[10px] font-medium leading-[14.4px] text-black inline-block">
            /
          </span>
          <Link className="sm:text-xs text-[10px] font-medium leading-[14.4px] text-black">
            23 years (2002-2024) JEE Main
          </Link>
        </div>

        <div className="lg:mt-[75px] sm:mt-12 mt-10">
          <div className=" justify-between items-center max-sm:flex hidden gap-1">
            <p className="font-semibold text-lg  text-black2 line-clamp-1 text-ellipsis text-center">
              {data?.heading}
            </p>
            <img
              src={shareIcon}
              alt=""
              className="w-[18.25px] sm:h-[20px] h-4 object-cover"
            />
          </div>

          {data?.subheading ? (
            <p className="text-[13px] pt-4 lg:text-base text-black2 font-semibold sm:hidden mb-4 line-clamp-1 text-ellipsis text-center">
              {" "}
              ({data?.subheading})
            </p>
          ) : (
            ""
          )}
          <div className="sm:grid grid-cols-12 mb-2 items-start lg:gap-[30px] gap-5">
            <div className="col-span-5 sm:col-span-4 lg:col-span-3 md:col-span-4">
              <div className=" *:size-full flex justify-center *:object-cover mb-5 sm:w-[240px] lg:w-[258px] sm:h-[332px] w-[251px] h-[315px] mx-auto">
                <img src={`${BASE_URL}${data?.images?.[0]}`} alt="" />
                {/* <img src={bookzoom} alt="" /> */}
              </div>
              {/* <div className="grid-cols-3 gap-4 grid justify-center">
                <div
                  className="flex justify-center"
                  onClick={() => setShowModalVideo(true)}
                >
                  <div className="bg-white border size-[60px] flex justify-center items-center border-gray2">
                    <div className="size-8 bg-secondary *:size-5 rounded-full flex justify-center items-center h-8">
                      <img src={bookzoom} alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-center"
                  onClick={() => setShowModal(true)}
                >
                  <div className="bg-white border size-[60px] flex justify-center items-center border-gray2">
                    <p className="text-xs font-semibold text-center text-black">
                      Quick View
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-black border h-16 w-full flex justify-center items-center border-gray2">
                    <p className="text-[9px] font-semibold text-center text-white">
                      Be an IITian Go Crack it!
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="relative">
                {/* <Swiper
                  className="size-full group/nav"
                  observer={true}
                  spaceBetween={10}
                  slidesPerView={2}
                  modules={[Pagination]}
                  // navigation={{
                  //   nextEl: ".swiper-button-next-image-footer",
                  //   prevEl: ".swiper-button-prev-image-footer",
                  // }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 3,
                    },
                  }}
                > */}
                {/* <SwiperSlide className="p-1 cursor-pointer" > */}
                {/* <ErrorBoundary>
                      <div
                        className="flex justify-center"
                        onClick={() => setShowModalVideo(true)}
                      >
                        <div className="bg-white border size-[60px] flex justify-center items-center border-gray2">
                          <div className="size-9 bg-secondary *:size-5 rounded-full flex justify-center items-center h-9">
                            <img src={whitebtn} alt="" />
                          </div>
                        </div>
                      </div>
                    </ErrorBoundary> */}
                {/* </SwiperSlide> */}
                {/* <SwiperSlide className="p-1 cursor-pointer" > */}
                {/* <ErrorBoundary>
                      <div
                        className="flex justify-center"
                        onClick={() => setShowModal(true)}
                      >
                        <div className="bg-white border size-[60px] flex justify-center items-center border-gray2">
                          <p className="text-xs font-semibold text-center text-black">
                            Quick View
                          </p>
                        </div>
                      </div>
                    </ErrorBoundary> */}
                {/* </SwiperSlide> */}
                {/* <SwiperSlide className="p-1 cursor-pointer" > */}
                {/* <ErrorBoundary>
                      <div className="flex justify-center">
                        <div className="bg-black border p-1 h-16 w-full flex justify-center items-center border-gray2">
                          <p className="text-[9px] font-semibold text-center text-white">
                            Be an IITian Go Crack it!
                          </p>
                        </div>
                      </div>
                    </ErrorBoundary> */}
                {/* </SwiperSlide> */}
                {/* </Swiper> */}

       



                <div className="grid grid-flow-col lg:gap-[38px] gap-4 max-sm:place-items-center mt-4">
                  <ErrorBoundary>
                    <div className="bg-white border size-[60px] flex justify-center items-center border-black rounded-[4px] px-4"
                      onClick={() => setShowModalVideo(true)}>
                      <div>
                        <div className="size-8 bg-red1 *:size-5 rounded-full flex justify-center items-center ">
                          <img src={whitebtn} alt="" />
                        </div>
                      </div>
                    </div>
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <div
                      className="bg-white border size-[60px] flex justify-center items-center border-black rounded-[4px] px-2"
                      onClick={() => setShowModal(true)}
                    >
                      <div>
                        <p className="text-[11px] font-semibold text-center text-black leading-[13.2px]">
                          Quick View
                        </p>
                      </div>
                    </div>
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <div className="bg-[#717171] border  size-[60px] flex justify-center items-center border-black rounded-[4px]">
                      <div>
                        <p className="text-[9px] font-semibold text-center text-white leading-[10.8px]">
                          Be an IITian <span className="leading-[13.2px] text-[11px]">Go <br className="max-lg:hidden" /> Crack it!</span>
                        </p>
                      </div>
                    </div>
                  </ErrorBoundary>
                </div>
                <div className="mt-[33px] flex w-full justify-center" >
                  <button className="bg-gray1 text-white rounded-full px-[25.5px] py-[11px] font-Isidora_Sans font-semibold text-lg leading-none" onClick={() => setPdfPreview(true)} >Read Sample</button>
                </div>
              </div>
            </div>
            <div className="col-span-7 sm:col-span-8 md:col-span-8 lg:col-span-6 lg:ps-1 sm:ps-10 max-sm:hidden">
              <div className="flex justify-between items-center max-sm:hidden">
                <p className="font-semibold lg:text-[30px] text-2xl leading-[35.99px]  text-black2 line-clamp-1 text-ellipsis">
                  {data?.heading}
                </p>
                <img
                  src={shareIcon}
                  alt=""
                  className="w-[18.25px] h-[20px] object-cover"
                />
              </div>

              {data?.subheading ? (
                <p className="text-base leading-[19.2px] text-black2 font-semibold max-sm:hidden mt-5 text-ellipsis line-clamp-1">
                  {" "}
                  ({data?.subheading})
                </p>
              ) : (
                ""
              )}

              <p className="text-base text-black2 font-semibold mt-2">
                {" "}
                Paperback -<span className="max-md:block">8 April 2024</span>
              </p>
              <div className="text-xs sm:text-sm leading-4 font-semibold text-[#757676] lg:mt-4 mt-3 sm:text-nowrap flex items-center gap-2">
                by <span className="text-primary">{data?.author} </span>
                <span className="max-md:block text-[#757676]">(Author)</span>
              </div>
              <div className="flex h-max items-center gap-1 sm:gap-2 gap-y-1 mt-4 flex-wrap">
                <div className="text-xs sm:text-sm leading-4 font-semibold text-black2">
                  {data?.rating?.toFixed(1)}
                </div>
                <div className="flex items-center gap-1 relative group">
                  <span className="*:size-3">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3">
                    <img src={starfill} alt="" />
                  </span>
                  <div className="absolute z-50 max-w-96 w-max py-2 invisible opacity-0 px-2 max-sm:-left-[120%]  bg-white shadow-xl border-black border top-[100%] mt-2 rightt-1/2 -translate-x-1/3 rounded-md group-hover:visible group-hover:opacity-100 duration-300 sm:before:absolute sm:before:size-4 sm:before:bg-white sm:before:rotate-45 sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:-top-2 sm:before:border sm:before:border-black sm:before:border-b-0 sm:before:border-r-0">
                    <div className="flex items-center">
                      <div className="flex items-center gap-1 relative">
                        <span className="*:size-4">
                          <img src={starfill} alt="" />
                        </span>
                        <span className="*:size-4">
                          <img src={starfill} alt="" />
                        </span>
                        <span className="*:size-4">
                          <img src={starfill} alt="" />
                        </span>
                        <span className="*:size-4">
                          <img src={starfill} alt="" />
                        </span>
                        <span className="*:size-4">
                          <img src={starfill} alt="" />
                        </span>
                      </div>
                      {data?.rating ? (
                        <p className="font-semibold text-black  2xl:text-xl ps-3">
                          {data?.rating?.toFixed(1)} out of 5 star
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {data?.no_of_ratings ? (
                      <p className="font-semibold text-black  2xl:text-xl text-sm mt-2">
                        {data?.no_of_ratings} ratings
                      </p>
                    ) : (
                      ""
                    )}
                    <div className="flex gap-3 py-2 items-center">
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        5 star
                      </p>
                      <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[52%] before:bg-primary before:inset-0"></div>
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        52%
                      </p>
                    </div>

                    <div className="flex gap-3 py-2 items-center">
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        4 star
                      </p>
                      <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[24%] before:bg-primary before:inset-0"></div>
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        24%
                      </p>
                    </div>

                    <div className="flex gap-3 py-2 items-center">
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        3 star
                      </p>
                      <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[12%] before:bg-primary before:inset-0"></div>
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        12%
                      </p>
                    </div>

                    <div className="flex gap-3 py-2 items-center">
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        2 star
                      </p>
                      <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[8%] before:bg-primary before:inset-0"></div>
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        8%
                      </p>
                    </div>
                    <div className="flex gap-3 py-2  items-center">
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        1 star
                      </p>
                      <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[2%] before:bg-primary before:inset-0"></div>
                      <p className="font-semibold text-black  2xl:text-xl text-sm">
                        2%
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-sm 2xl:text-lg bg-white justify-center flex text-gray1 text-center py-2 items-center w-full border-t"
                      >
                        See Customer Review
                        <span className="*:size-3 *:2xl:size-4 *:object-contain ms-1 mt-1 *:-rotate-90">
                          <img src={arrow} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="size-3 flex items-center justify-center">
                  <img src={arrow} alt="" />
                </div>
                {data?.no_of_ratings ? (
                  <p className="text-xs sm:text-sm leading-4 ps-6 font-semibold text-black2 max-sm:w-full">
                    {data?.no_of_ratings} ratings
                  </p>
                ) : (
                  ""
                )}
              </div>
              {data.best_seller_rank ? (
                <div className="sm:flex items-center gap-[14px] mt-3 ">
                  <div className="bg-primary rounded-[4px] w-max px-[9px] py-[6px] max-md:mb-2 text-sm leading-4 font-semibold text-white">
                    # {data.best_seller_rank} Best Seller
                  </div>
                  {data?.best_seller_rank_category ? (
                    <p className="font-semibold text-black2 leading-4 sm:text-sm">
                      {data?.best_seller_rank_category}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              <div className="grid-cols-4 grid mt-7 border-2 border-l-0 border-r-0 py-6 border-[#E7DEE3] max-sm:hidden">
                <div className="mx-auto h-full flex flex-col items-center justify-center gap-x-9">
                  <div className="w-11 h-[30px] *:object-contain *:size-full  mx-auto ">
                    <img src={delivery} alt="" />
                  </div>
                  <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                    Free Delivery
                  </p>
                </div>
                <div className="mx-auto h-full flex flex-col items-center justify-center">
                  <div className="w-[22px] h-[30px] *:object-contain *:size-full  mx-auto">
                    <img src={secure} alt="" />
                  </div>
                  <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                    Secure Payment
                  </p>
                </div>
                <div className="mx-auto h-full flex flex-col items-center justify-center">
                  <div className="w-11 h-[30px] aspect-[1.3] *:object-contain *:size-full  mx-auto">
                    <img src={cod} alt="" />
                  </div>
                  <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                    Pay on Delivery
                  </p>
                </div>
                <div className="mx-auto h-full flex flex-col items-center justify-center">
                  <div className="w-7 h-[30px] *:object-contain *:size-full  mx-auto">
                    <img src={return1} alt="" />
                  </div>
                  <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                    Easy Replacement
                  </p>
                </div>
              </div>

              <div>
                <div className="mx-2 mt-[42px] max-md:hidden">
                  <div className="text-base lg:text-xl font-semibold leading-[23.99px] line-clamp-1 text-ellipsis">
                    {data?.description?.heading}
                  </div>
                  <div className="text-gray1 text-sm mt-4">
                    {parse(data?.description?.features || "")}
                  </div>
                </div>

                {data?.description?.why_this_book ? (
                  <div className="m-2 max-md:hidden">
                    <div className="text-base sm:text-lg font-medium mt-7">
                      {" "}
                      Why This Book?{" "}
                    </div>
                    <div className="text-gray1 text-sm">
                      {parse(data?.description?.why_this_book || "")}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {data?.description?.about_the_author ? (
                  <div className="m-2">
                    <div className="text-xl font-medium">
                      {" "}
                      About the Author{" "}
                    </div>
                    <div className="text-gray1">
                      {parse(data?.description?.about_the_author || "")}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="relative h-max max-md:hidden">
                <Swiper
                  className="size-full my-10 py-7 border-t border-b"
                  spaceBetween={10}
                  slidesPerView={2}
                  loop={true}
                  modules={[Pagination, Autoplay, Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next-bookInfo",
                    prevEl: ".swiper-button-prev-bookInfo",
                  }}
                  // autoplay={{
                  //   delay: 2000,
                  //   disableOnInteraction: false,
                  // }}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Print length
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={document} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          488 pages{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Language
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={earth} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          English{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Publisher
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={bank} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Arihant{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Publication Date
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={date} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Publication Date{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Print length
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={document} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          488 pages{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ErrorBoundary>
                      <div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          Print length
                        </p>
                        <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                          <img src={document} alt="" />
                        </div>
                        <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                          488 pages{" "}
                        </p>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev-bookInfo absolute top-1/2 rounded-full *:size-5 text-gray1 bg-white size-7  shadow-xl border -translate-y-1/2 flex  duration-300 justify-center items-center -left-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                  </svg>
                </div>
                <div className="swiper-button-next-bookInfo *:rotate-180 *:size-5 text-gray1 bg-white size-7 shadow-xl border flex rounded-full duration-300 justify-center items-center   absolute -right-4 top-1/2 -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 max-md:hidden mb-20 mt-20">
                <div className="col-span-12 lg:col-span-4 ">
                  <div className="w-full *:size-full">
                    <img src={`${BASE_URL}${data?.images?.[0]}`} alt="" />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 ">
                  <div className="text-secondary font-bold text-xs 2xl:text-base bg-[#FCEAAF] w-max px-6 py-[2px] rounded-full">
                    Old Issue
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl 2xl:text-2xl text-black">
                      23 Years (2024-2002) JEE Main
                    </p>
                  </div>

                  <p className="text-sm 2xl:text-lg mt-1 text-black font-semibold">
                    {" "}
                    (Chapterwise - Topicwise Solved Papers Mathematics)
                  </p>
                  <p className="text-sm 2xl:text-lg text-black font-semibold">
                    {" "}
                    Paperback - 8 April 2024
                  </p>
                  <div className="text-xs 2xl:text-xl font-semibold text-[ #757676]">
                    by{" "}
                    <span className="text-primary">
                      Naveen Kumar Sachin Kumar{" "}
                    </span>
                    (Author)
                  </div>
                  <div className="flex h-max items-center gap-3 mt-1 ">
                    <div className="text-sm 2xl:text-xl font-bold text-black">
                      4.6
                    </div>
                    <div className="flex items-center gap-1 relative group">
                      <span className="*:size-3 *:2xl:size-4">
                        <img src={starfill} alt="" />
                      </span>
                      <span className="*:size-3 *:2xl:size-4">
                        <img src={starfill} alt="" />
                      </span>
                      <span className="*:size-3 *:2xl:size-4">
                        <img src={starfill} alt="" />
                      </span>
                      <span className="*:size-3 *:2xl:size-4">
                        <img src={starfill} alt="" />
                      </span>
                      <span className="*:size-3 *:2xl:size-4">
                        <img src={starfill} alt="" />
                      </span>
                    </div>
                    <div className="size-3 *:size-full *:object-contain">
                      <img src={arrow} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-lg font-semibold text-[#353C41] ">
                      65 ratings
                    </p>
                  </div>
                  <div className="text-sm  font-semibold text-black  2xl:text-xl mt-6">
                    <span className="line-through">Rs. 510</span>
                    <span className="ms-5">
                      Rs. <span className="text-primary">397</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-3 max-lg:hidden">
              <div className="border border-[#757676] p-4 lg:p-4 rounded-3xl">
                {data?.prices?.length
                  ? data?.prices?.map((item) => (
                    <div
                      className={`rounded-xl p-2 lg:p-3 border-black2 hover:bg-yellow4 border-[1.5px] mb-2 ${selectedPackage === "1" ? "bg-yellow4" : ""
                        }`}
                      onClick={() => setSelectedPackage("1")}
                      key={item?.name}
                    >
                      <p className="font-normal text-sm lg:text-base leading-5 text-black2">
                        Paperback
                      </p>
                      <p className="text-base lg:text-lg  text-black2 font-semibold">
                        MRP: 770
                      </p>
                    </div>
                  ))
                  : ""}

                {/* <div className={`rounded-xl p-3 border-black hover:bg-yellow4 border my-2 ${selectedPackage==="2"?"bg-yellow4":""}`} onClick={()=>setSelectedPackage("2")} >
                  <p className="font-normal text-base">eBook</p>
                  <p className="text-[18px] text-black font-semibold">
                    MRP: 175
                  </p>
                </div> */}
                {/* <div className={`rounded-xl p-3 border-black hover:bg-yellow4 border mt-2 ${selectedPackage==="3"?"bg-yellow4":""}`} onClick={()=>setSelectedPackage("3")} >
                  <p className="font-normal text-base">Paperback + eBook</p>
                  <p className="text-[18px] text-black font-semibold">
                    MRP: 900
                  </p>
                </div> */}

                <div className="flex justify-between mt-6 items-start">
                  <div className="text-base leading-5 font-bold text-black2 text-nowrap">
                    Buy new:
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <span className="size-5 *:size-5 *:object-contain">
                        <img src={rupee} alt="" />
                      </span>
                      <span className="text-base leading-5 font-bold text-black2 text-nowrap">570.00</span>
                    </div>
                    <p className="text-sm font-semibold text-black2 text-right">
                      (570.00 incl. GST)
                    </p>
                    <p className="text-sm 2xl:text-lg font-semibold text-gray2 text-right">
                      M.R.P.: ₹ 770.00
                    </p>
                    <p className="text-sm 2xl:text-lg font-semibold text-gray2 text-right">
                      Save: ₹ 200.00 (30%)
                    </p>
                  </div>
                </div>
                <button className="bg-primary border border-primary block text-sm lg:text-base 2xl:text-2xl font-semibold text-center text-[#ffff] mt-8  lg:!w-full py-1 lg:py-2 rounded-full">
                  ADD TO CART
                </button>
                <button
                  // className=" block text-sm lg:text-base 2xl:text-2xl font-semibold text-center  py-1 lg:py-2 mt-3"
                  className="rounded-full border border-black block text-sm lg:text-base 2xl:text-2xl font-semibold text-center mt-8  lg:!w-full py-1 lg:py-2"
                  onClick={handleBuyNow}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          <div className="grid-cols-4  my-4 border-2 border-l-0 border-r-0 py-6 border-[#E7DEE3] max-sm :grid hidden">
            <div className="mx-auto">
              <div className="w-12 aspect-[1.2] lg:aspect-[1.3] *:object-contain *:size-full  mx-auto">
                <img src={delivery} alt="" />
              </div>
              <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                Free Delivery
              </p>
            </div>
            <div className="mx-auto">
              <div className="w-12 aspect-[1.3] *:object-contain *:size-full  mx-auto">
                <img src={secure} alt="" />
              </div>
              <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                Secure Payment
              </p>
            </div>
            <div className="mx-auto">
              <div className="w-12 aspect-[1.3] *:object-contain *:size-full  mx-auto">
                <img src={cod} alt="" />
              </div>
              <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                Pay on Delivery
              </p>
            </div>
            <div className="mx-auto">
              <div className="w-12 aspect-[1.3] *:object-contain *:size-full  mx-auto">
                <img src={return1} alt="" />
              </div>
              <p className="text-xs leading-[14.4px] text-center font-medium text-[#AB6D87] pt-[14px]">
                Easy Replacement
              </p>
            </div>
          </div>

          <div className="py-6 max-lg:block hidden">
            <div className="[box-shadow:0px_0px_12.6px_2px_#00000026] p-3 w-full sm:w-1/2 mx-auto  lg:p-4 rounded-2xl bg-[#F7F7F7]">
              {data?.prices?.length
                ? data?.prices?.map((item) => (
                  <div
                    className={`rounded-lg p-3 bg-white hover:bg-yellow4 mb-2 ${selectedPackage === "1" ? "bg-yellow4 outline-none" : ""
                      }`}
                    onClick={() => setSelectedPackage("1")}
                    key={item?.name}
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-normal text-sm lg:text-base">
                        Paperback
                      </p>
                      <p className="text-base lg:text-lg text-black font-semibold">
                        MRP: 770
                      </p>
                    </div>
                  </div>
                ))
                : ""}

              {/* <div className={`rounded-xl p-3 border-black hover:bg-yellow4 border my-2 ${selectedPackage==="2"?"bg-yellow4":""}`} onClick={()=>setSelectedPackage("2")} >
                  <p className="font-normal text-base">eBook</p>
                  <p className="text-[18px] text-black font-semibold">
                    MRP: 175
                  </p>
                </div> */}
              {/* <div className={`rounded-xl p-3 border-black hover:bg-yellow4 border mt-2 ${selectedPackage==="3"?"bg-yellow4":""}`} onClick={()=>setSelectedPackage("3")} >
                  <p className="font-normal text-base">Paperback + eBook</p>
                  <p className="text-[18px] text-black font-semibold">
                    MRP: 900
                  </p>
                </div> */}

              <div className="flex justify-between mt-6 items-start">
                <div className="text-base font-bold">Buy new:</div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <span className="size-5 *:size-5 *:object-contain">
                      <img src={rupee} alt="" />
                    </span>
                    <span className="font-semibold">570.00</span>
                  </div>
                  <p className="sm:text-sm text-xs font-semibold text-black  2xl:text-xl text-right">
                    (570.00 incl. GST)
                  </p>
                  <p className="sm:text-sm text-xs font-semibold text-gray2 text-right mt-1">
                    M.R.P.: ₹ 770.00
                  </p>
                  <p className="sm:text-sm text-xs font-semibold text-gray2 text-right mt-1">
                    Save: ₹ 200.00 (30%)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="#"
                  className="bg-primary w-full border border-primary block text-sm lg:text-base font-semibold text-center text-[#ffff]  px-3 py-2 rounded-full"
                >
                  ADD TO CART
                </a>
                <a
                  href="#"
                  className="w-full text-sm lg:text-base font-semibold text-center rounded-full border border-black py-2 px-3"
                >
                  BUY NOW
                </a>

              </div>
            </div>
          </div>

          <div className="m-2 max-md:block hidden">
            <div className="text-base lg:text-lg font-medium">
              {data?.description?.heading}
            </div>
            <div className="text-gray1 text-sm">
              {parse(data?.description?.features || "")}
            </div>
          </div>

          {data?.description?.why_this_book ? (
            <div className="m-2 max-md:block hidden">
              <div className="text-base sm:text-lg font-medium">
                {" "}
                Why This Book?{" "}
              </div>
              <div className="text-gray1 text-sm">
                {parse(data?.description?.why_this_book || "")}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="relative h-max max-md:block hidden">
            <Swiper
              className="size-full my-10 py-5 border-t border-b"
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
              modules={[Pagination, Autoplay, Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-item-info",
                prevEl: ".swiper-button-prev-item-info",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Print length
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={document} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      488 pages{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Language
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={earth} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      English{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Publisher
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={bank} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Arihant{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Publication Date
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={date} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Publication Date{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Print length
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={document} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      488 pages{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
              <SwiperSlide>
                <ErrorBoundary>
                  <div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      Print length
                    </p>
                    <div className="size-10 mx-auto my-3 *:size-full *:object-contain">
                      <img src={document} alt="" />
                    </div>
                    <p className="text-xs 2xl:text-base font-medium text-gray1 text-center">
                      488 pages{" "}
                    </p>
                  </div>
                </ErrorBoundary>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev-item-info absolute top-1/2 rounded-full *:size-3 *:2xl:size-4 sm:*:size-5 text-gray1 bg-white size-7  shadow-xl border -translate-y-1/2 flex  duration-300 justify-center items-center -left-4 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
              </svg>
            </div>
            <div className="swiper-button-next-item-info *:rotate-180 *:size-3 *:2xl:size-4 sm:*:size-5 text-gray1 bg-white size-7 shadow-xl border flex rounded-full duration-300 justify-center items-center   absolute -right-4 top-1/2 -translate-y-1/2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
              </svg>
            </div>
          </div>

          <div className=" grid-cols-12 gap-3 max-md:grid hidden max-md:pb-4 mb-8">
            <div className="col-span-12 sm:col-span-4 md:col-span-12 lg:col-span-4 ">
              <div className="w-full *:size-full">
                <img src={`${BASE_URL}${data?.images?.[0]}`} alt="" />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-8 md:col-span-12 lg:col-span-8 ">
              <div className="text-secondary font-bold text-xs bg-[#FCEAAF] w-max px-6 py-[2px] rounded-full">
                Old Issue
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-xl text-black">
                  23 Years (2024-2002) JEE Main
                </p>
              </div>

              <p className="text-sm mt-1 text-black font-semibold">
                {" "}
                (Chapterwise - Topicwise Solved Papers Mathematics)
              </p>
              <p className="text-sm text-black font-semibold">
                {" "}
                Paperback - 8 April 2024
              </p>
              <div className="text-xs font-semibold text-[ #757676]">
                by{" "}
                <span className="text-primary">Naveen Kumar Sachin Kumar </span>
                (Author)
              </div>
              <div className="flex h-max items-center gap-3 mt-1 ">
                <div className="text-sm font-bold text-black">4.6</div>
                <div className="flex items-center gap-1 relative group">
                  <span className="*:size-3 *:2xl:size-4 *:object-cover">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3 *:2xl:size-4">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3 *:2xl:size-4">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3 *:2xl:size-4">
                    <img src={starfill} alt="" />
                  </span>
                  <span className="*:size-3 *:2xl:size-4">
                    <img src={starfill} alt="" />
                  </span>
                </div>
                <div className="size-3 *:size-full *:object-contain">
                  <img src={arrow} alt="" />
                </div>
                <p className="text-xs font-semibold text-[#353C41] max-md:w-full">
                  65 ratings
                </p>
              </div>
              <div className="text-sm font-semibold text-black  2xl:text-xl mt-6">
                <span className="line-through">Rs. 510</span>
                <span className="ms-5">
                  Rs. <span className="text-primary">397</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecommendedComponent />

      <FrequentlyBoughtTogether title="Frequently Bought Together" border={true} />

      <div className=" mx-auto  pt-4">
        <BooksComponent
          title={"Popular books related to the Exams"}
          id="PopularBooks"
        />
        <BooksComponent
          title={"Popular titles by this Author"}
          id="PopularByAuthor"
        />
      </div>

      <div>
        <div className="relative group/nav  max-w-6xl px-4 mx-auto  m:py-5 2xl:py-10">
          <h1 className="text-2xl sm:text-3xl pt-6 font-semibold text-black pb-12">
            Latest Test Series
          </h1>
          <TestSeriesComponent />
          <button className="flex items-center gap-2 max-sm:mt-4">
            <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <button className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={more} alt="" />
            </button>
          </button>
        </div>
      </div>

      <ArihantPlusMasterClass />

      <SpecificationComponent data={data?.specifications} />

      <RatingListComponent data={data} />

      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {" "}
          <div className="grid grid-cols-2 gap-4 items-start h-[500] relative">
            <div className="w-full h-full aspect-[1/1.4] *:size-full *:object-cover">
              <img src={bookzoom} alt="" />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-11 p-4 h-[500px] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4  ">
                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>
                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>
                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>
                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>

                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>

                  <div className="aspect-[1/1.4] w-full *:size-full ">
                    <img src={book1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="size-7 p-2 flex justify-center items-center rounded-full bg-gray2 absolute -right-2 -top-2"
              onClick={() => setShowModal(false)}
            >
              <img src={cut} alt="" className="!h-5 !w-5 object-contain" />
            </button>
          </div>{" "}
        </Modal>
      ) : (
        ""
      )}

      {showModalVideo ? (
        <Modal showModal={showModalVideo} setShowModal={setShowModalVideo}>
          {" "}
          <div className="!h-5/6 !w-full *:size-full *:object-cover">
            <video src={video} autoPlay controls></video>
            <img
              src={arrowright}
              alt=""
              className="!size-6 rotate-180 absolute inset-6 p-1 rounded-full bg-gray1 !object-contain cursor-pointer"
              onClick={() => setShowModalVideo(false)}
            />
          </div>{" "}
        </Modal>
      ) : (
        ""
      )}

      {pdfPreview ? <PdfModal showModal={pdfPreview} setShowModal={setPdfPreview} >
        <div className="flex justify-center" >
          <PDFReader url={"https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"} scale={1} showAllPage={true} />
        </div>
        <button
          className="size-7 p-2 flex justify-center items-center rounded-full bg-gray2 absolute right-1 top-2"
          onClick={() => setPdfPreview(false)}
        >
          <img src={cut} alt="" className="!h-5 !w-5 object-contain" />
        </button>
      </PdfModal> : ""}


    </AppLayout>
  );
};
export default BooksDetails;
