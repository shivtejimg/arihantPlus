import { useState } from "react";
import NewsMarqueeComponent from "../NewsMarqueeComponent/NewsMarqueeComponent";
import toDoRecommended2 from "../../assets/img/toDoRecommended2.svg";
import teacherTransparentImg from "../../assets/img/teacherTransparentImg.svg";
import liveClassesTeacher from "../../assets/img/liveClassesTeacher.svg";
import play from "../../assets/img/play.png";
import arrow45deg from "../../assets/img/arrow45deg.svg";
import plusSignBg from "../../assets/img/plusSignBg.svg";
import plusSignBg2 from "../../assets/img/plusSignBg2.svg";
import down from "../../assets/img/down.png";
import secondaryDown from "../../assets/img/secondaryDown.svg";
import mentorPic from "../../assets/img/mentorPic.svg";
import ratingStar from "../../assets/img/ratingStar.svg";
import primaryArrow from "../../assets/img/primaryArrow.svg";
import teacherGroup from "../../assets/img/teacherGroup.svg";
import secondaryStar from "../../assets/img/secondaryStar.png";
import bookdetail from "../../assets/img/bookdetail.png";
import primaryStars from "../../assets/img/primaryStars.png";
import watch from "../../assets/img/watch.png";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TestSeriesComponent from "../TestSeriesComponent/TestSeriesComponent";
import ArihantPlusMasterClass from "../ArihantPlusMasterClass/ArihantPlusMasterClass";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
import more from "../../assets/img/down.png";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const LiveClassesListComponent = ({ button1, button2 = () => {} }) => {
  const [selectedTab, setSelectedTab] = useState("button1");
  const [section2, setSection2] = useState(false);

  const handleButton1 = () => {
    setSelectedTab("button1");
  };

  const handleButton2 = () => {
    setSelectedTab("button2");
  };

  return (
    <div>
      <NewsMarqueeComponent />
      {/* Main section*/}
      <FiltersComponent>
        {!section2 ? (
          <div className="w-auto sticky top-0 ">
            <div className="text-2xl font-medium pb-6">Live Classes</div>
            <div className="text-base font-medium text-gray1">
              A wonderful and unique curriculum that is the best fit for every
              student.
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 py-8">
              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg ">
                  <div className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat">
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="size-6 bg-white rounded-full p-1.5 absolute z-20 right-4 bottom-6 group-hover:scale-125 duration-300 transition-all ease-in-out">
                      <img className="object-cover " src={play} alt="" />
                    </div>
                  </div>
                  <div className="ps-4 pr-3 py-6">
                    <div className="flex items-end gap-2 xl:gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        REASONING
                      </div>
                      <div className="font-medium text-[10px]">
                        Full test 01
                      </div>
                    </div>
                    <div className="py-7">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">SSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">Banking</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-5 p-1 border bordr-gray1 rounded-full w-1/3 group-hover:scale-125 transition-all duration-300 ease-in-out">
                        <span className="relative flex h-3 w-3">
                          <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <div className="text-primary text-xs font-semibold">
                          Live
                        </div>
                      </button>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => setSection2(true)}
                      >
                        <div className="text-xs font-semibold">View Series</div>
                        <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                          <img
                            className="group-hover:[filter:brightness(5)contrast(1)]"
                            src={arrow45deg}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg ">
                  <div
                    className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                "
                  >
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="size-6 bg-white rounded-full p-1.5 absolute z-20 right-4 bottom-6 group-hover:scale-125 duration-300 transition-all ease-in-out">
                      <img className="object-cover " src={play} alt="" />
                    </div>
                  </div>
                  <div className="ps-4 pr-3 py-6">
                    <div className="flex items-end gap-2 xl:gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        REASONING
                      </div>
                      <div className="font-medium text-[10px]">
                        Full test 01
                      </div>
                    </div>
                    <div className="py-7">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">SSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">Banking</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-5 p-1 border bordr-gray1 rounded-full w-1/3 group-hover:scale-125 transition-all duration-300 ease-in-out">
                        <span className="relative flex h-3 w-3">
                          <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <div className="text-primary text-xs font-semibold">
                          Live
                        </div>
                      </button>
                      <button className="flex items-center gap-2">
                        <div className="text-xs font-semibold">View Series</div>
                        <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                          <img
                            className="group-hover:[filter:brightness(5)contrast(1)]"
                            src={arrow45deg}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg ">
                  <div className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat">
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="size-6 bg-white rounded-full p-1.5 absolute z-20 right-4 bottom-6 group-hover:scale-125 duration-300 transition-all ease-in-out">
                      <img className="object-cover " src={play} alt="" />
                    </div>
                  </div>
                  <div className="ps-4 pr-3 py-6">
                    <div className="flex items-end gap-2 xl:gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        REASONING
                      </div>
                      <div className="font-medium text-[10px]">
                        Full test 01
                      </div>
                    </div>
                    <div className="py-7">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">SSC</div>
                        <div className="p-0.5 bg-black rounded-full"></div>
                        <div className="">Banking</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-5 p-1 border bordr-gray1 rounded-full w-1/3 group-hover:scale-125 transition-all duration-300 ease-in-out">
                        <span className="relative flex h-3 w-3">
                          <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <div className="text-primary text-xs font-semibold">
                          Live
                        </div>
                      </button>
                      <button className="flex items-center gap-2">
                        <div className="text-xs font-semibold">View Series</div>
                        <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                          <img
                            className="group-hover:[filter:brightness(5)contrast(1)]"
                            src={arrow45deg}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 shadow-lg bg-white rounded-lg relative">
              <div className="flex items-center justify-between relative z-10">
                <div className="">
                  <div className="text-lg font-semibold text-gray1">
                    Crack JEE Exam with{" "}
                    <span className="text-primary">Arihant Plus</span>
                  </div>
                  <div className="font-medium text-sm text-gray5 pt-4">
                    Our-step by-step guides are detailed explanations have your
                    back.
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white font-semibold text-sm">
                  <div className=" size-7 flex items-center justify-center bg-[#353C41] rounded-full">
                    E
                  </div>
                  <div className=" size-7 flex items-center justify-center bg-[#353C41] rounded-full">
                    H
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5 lg:gap-10 pt-6 relative z-10">
                <div className="col-span-5 ">
                  <div className="size-full group relative after:absolute after:size-48 after:-bottom-1  after:-right-1 after:rotate-45 after:scale-110 after:z-10 after:bg-[url('./assets/img/liveClassesRoundedBgFull.svg')] after:bg-no-repeat">
                    <div className="h-full w-full p-4 overflow-hidden relative rounded-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat">
                      <div className="relative z-20 h-full">
                        <div className="flex items-center gap-2 text-white text-[10px] font-semibold mb-auto">
                          <div className="bg-white rounded-full size-6 p-1.5">
                            <img src={toDoRecommended2} alt="" />
                          </div>
                          <div className="">India&apos;s No. 1 Test Portal</div>
                        </div>
                        <div className="flex pt-3 items-end justify-between h-[calc(100%-24px)] w-full over">
                          <div className="size-6 bg-white rounded-full p-1.5 group-hover:scale-125 duration-300 transition-all ease-in-out">
                            <img className="object-cover " src={play} alt="" />
                          </div>

                          <div className="-mb-3.5 w-2/3 group-hover:scale-125 duration-300 transition-all ease-in-out">
                            <img
                              className="size-full"
                              src={teacherGroup}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="text-2xl font-bold">JEE Main Pathfinder</div>
                  <div className="pt-4 leading-[100%] text-sm font-medium">
                    Familiarize with the all main features subject wise
                  </div>
                  <div className="flex items-center gap-2.5 pt-6 leading-[100%] text-xs font-semibold *:w-24 *:text-center *:py-2">
                    <div className="rounded-md bg-brown4 ">Mathematics</div>
                    <div className="rounded-md bg-brown4 ">Physics</div>
                    <div className="rounded-md bg-brown4 ">Chemistry</div>
                  </div>
                  <div className="pt-4 leading-[100%] flex-wrap gap-y-1.5 flex items-center justify-between text-sm font-semibold">
                    <div className="">Live Classes</div>
                    <div className="">Weekly Test</div>
                    <div className="">Complete Study Material</div>
                    <div className="">Doubt Solving</div>
                  </div>
                  <button className="mt-6 leading-[100%] flex gap-4 px-4 py-3.5 items-center bg-primary text-sm font-semibold text-white rounded-full hover:shadow-lg transition-all ease-in-out duration-300">
                    <div className="">Explore Courses</div>
                    <div className="">
                      <img
                        className="[filter:brightness(5)contrast(1)]"
                        src={arrow45deg}
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="absolute  top-0 right-0">
                <img src={plusSignBg} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-16">
              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg">
                  <div
                    className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                "
                  >
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-6">
                    <div className="flex items-end gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        MAHA MARATHON
                      </div>
                      <div className="font-medium text-[10px]">03 hour</div>
                    </div>
                    <div className="py-6">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPPSC</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">RO/ARO</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">2024</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-xs font-medium gap-1">
                      <div className="text-nowrap">
                        {" "}
                        Ended on 2 Aug 27 2023{" "}
                      </div>
                      <div className="p-0.5 bg-primary rounded-full"></div>
                      <div className="text-nowrap"> 18 Lesson</div>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                      <div className="">Khusboo Ma&apos;am</div>
                      <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                        <img
                          className="object-cover [filter:brightness(10)contrast(2)]"
                          src={play}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg">
                  <div
                    className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                "
                  >
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-6">
                    <div className="flex items-end gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        REASONING
                      </div>
                      <div className="font-medium text-[10px]">03 hour</div>
                    </div>
                    <div className="py-6">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPPSC</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">RO/ARO</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">2024</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-xs font-medium gap-1">
                      <div className="text-nowrap">
                        {" "}
                        Ended on 2 Aug 27 2023{" "}
                      </div>
                      <div className="p-0.5 bg-primary rounded-full"></div>
                      <div className="text-nowrap"> 18 Lesson</div>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                      <div className="">Khusboo Ma&apos;am</div>
                      <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                        <img
                          className="object-cover [filter:brightness(10)contrast(2)]"
                          src={play}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="size-full group shadow-lg rounded-b-lg">
                  <div className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat">
                    <div className="relative z-20">
                      <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                        <div className="bg-white rounded-full size-6 p-1.5">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                        <div className="">India&apos;s No. 1 Test Portal</div>
                      </div>
                      <div className="flex pt-3 items-end justify-between ">
                        <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                          UPSC{" "}
                          <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                          SSC <div className="">Banking</div>
                        </div>
                        <div className="-mb-4 ">
                          <img
                            className=""
                            src={teacherTransparentImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-6">
                    <div className="flex items-end gap-3">
                      <div className="flex items-center gap-1">
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          E
                        </div>
                        <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                          H
                        </div>
                      </div>
                      <div className="text-primary text-base font-semibold leading-[100%]">
                        MAHA MARATHON
                      </div>
                      <div className="font-medium text-[10px]">03 hour</div>
                    </div>
                    <div className="py-6">
                      <div className="text-sm font-medium text-gray5">
                        Comprenshive Vedio Solution
                      </div>
                      <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                        <div className="">UPPSC</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">RO/ARO</div>
                        {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                        <div className="">2024</div>
                      </div>
                      <div className="text-sm font-medium text-gray5">
                        All Competative Exams
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-xs font-medium gap-1">
                      <div className="text-nowrap">
                        {" "}
                        Ended on 2 Aug 27 2023{" "}
                      </div>
                      <div className="p-0.5 bg-primary rounded-full"></div>
                      <div className="text-nowrap"> 18 Lesson</div>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                      <div className="">Khusboo Ma&apos;am</div>
                      <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                        <img
                          className="object-cover [filter:brightness(10)contrast(2)]"
                          src={play}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-8 ">
                <div className="size-full flex flex-col gap-7">
                  <div className=" bg-white relative rounded-lg shadow-lg w-full flex flex-nowrap group overflow-hidden">
                    <div className="w-1/2 p-7 ">
                      <div className="text-2xl font-semibold leading-7">
                        <div className="text-primary">JEE EXAM</div>
                        <div className="">Free Live Classes</div>
                      </div>
                      <div className="flex items-center py-5 gap-2.5 leading-5 text-gray1">
                        <div className="text-sm font-semibold">Vector & 3D</div>
                        <div className="text-xs font-medium">
                          Theory and MCQs
                        </div>
                      </div>
                      <div className="flex items-center gap-10 text-xs font-semibold leading-5">
                        <div className="">Starting on sep 15,2024</div>
                        <div className="">6:30 pm</div>
                      </div>
                      <button className=" mt-[53px] group-hover:scale-105 origin-left duration-300 transition-all ease-in-out py-2 px-6 text-xs rounded-full font-semibold bg-primary text-white">
                        Join now
                      </button>
                    </div>
                    <div className="h-full py-7 w-1/2 relative">
                      <img
                        className="bg-cover w-full"
                        src={plusSignBg2}
                        alt=""
                      />

                      <div className="absolute right-0 bottom-0 group-hover:scale-105 origin-left duration-300 transition-all ease-in-out">
                        <img
                          className="object-contain"
                          src={liveClassesTeacher}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-full p-5 flex items-center gap-14 text-base font-semibold leading-5 rounded-xl">
                    <div className="text-primary">UPCOMING CLASSES</div>
                    <div className="">PAST CLASSES</div>
                  </div>
                  <div className="bg-white hover:shadow-lg duration-300 ease-in-out transition-all rounded-xl p-4 border border-primary w-full flex items-center gap-14 group">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-yellow1  px-4 py-5 text-base font-semibold  rounded-l-lg">
                        <div className="text-4xl font-semibold">10</div>
                        <div className="">
                          <div className="leading-[18px]">Aug</div>
                          <div className="leading-[18px] pt-3">2024</div>
                        </div>
                      </div>
                      <div className="py-4 ">
                        <div className="text-lg font-semibold">
                          Jee Revision class 12
                        </div>
                        <div className="pt-4 flex items-center gap-9">
                          <div className="text-sm font-semibold leading19">
                            Vinay Mishra
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="*:size-3.5">
                              <img src={watch} alt="" />
                            </div>
                            <div className="text-sm font-medium">
                              Started at 3:30 pm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rounded-full bg-primary  size-9 group-hover:scale-105 duration-300 ease-in-out transition-all">
                      <img
                        className="[filter:brightness(13)contrast(2)] size-3.5 m-auto"
                        src={play}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="bg-white hover:shadow-lg duration-300 ease-in-out transition-all
                  rounded-xl p-4 border border-transparent w-full flex items-center gap-14 group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-yellow1  px-4 py-5 text-base font-semibold  rounded-l-lg">
                        <div className="text-4xl font-semibold">10</div>
                        <div className="">
                          <div className="leading-[18px]">Aug</div>
                          <div className="leading-[18px] pt-3">2024</div>
                        </div>
                      </div>
                      <div className="py-4 ">
                        <div className="text-lg font-semibold">
                          Jee Revision class 12
                        </div>
                        <div className="pt-4 flex items-center gap-9">
                          <div className="text-sm font-semibold leading19">
                            Vinay Mishra
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="*:size-3.5">
                              <img src={watch} alt="" />
                            </div>
                            <div className="text-sm font-medium">
                              Started at 3:30 pm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rounded-full bg-primary  size-9 group-hover:scale-105 duration-300 ease-in-out transition-all">
                      <img
                        className="[filter:brightness(13)contrast(2)] size-3.5 m-auto"
                        src={play}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="bg-white hover:shadow-lg duration-300 ease-in-out transition-all
                  rounded-xl p-4 border border-transparent w-full flex items-center gap-14 group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-yellow1  px-4 py-5 text-base font-semibold  rounded-l-lg">
                        <div className="text-4xl font-semibold">10</div>
                        <div className="">
                          <div className="leading-[18px]">Aug</div>
                          <div className="leading-[18px] pt-3">2024</div>
                        </div>
                      </div>
                      <div className="py-4 ">
                        <div className="text-lg font-semibold">
                          Jee Revision class 12
                        </div>
                        <div className="pt-4 flex items-center gap-9">
                          <div className="text-sm font-semibold leading19">
                            Vinay Mishra
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="*:size-3.5">
                              <img src={watch} alt="" />
                            </div>
                            <div className="text-sm font-medium">
                              Started at 3:30 pm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rounded-full bg-primary  size-9 group-hover:scale-105 duration-300 ease-in-out transition-all">
                      <img
                        className="[filter:brightness(13)contrast(2)] size-3.5 m-auto"
                        src={play}
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="bg-white hover:shadow-lg duration-300 ease-in-out transition-all
                  rounded-xl p-4 border border-transparent w-full flex items-center gap-14 group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-yellow1  px-4 py-5 text-base font-semibold  rounded-l-lg">
                        <div className="text-4xl font-semibold">10</div>
                        <div className="">
                          <div className="leading-[18px]">Aug</div>
                          <div className="leading-[18px] pt-3">2024</div>
                        </div>
                      </div>
                      <div className="py-4 ">
                        <div className="text-lg font-semibold">
                          Jee Revision class 12
                        </div>
                        <div className="pt-4 flex items-center gap-9">
                          <div className="text-sm font-semibold leading19">
                            Vinay Mishra
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="*:size-3.5">
                              <img src={watch} alt="" />
                            </div>
                            <div className="text-sm font-medium">
                              Started at 3:30 pm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rounded-full bg-primary  size-9 group-hover:scale-105 duration-300 ease-in-out transition-all">
                      <img
                        className="[filter:brightness(13)contrast(2)] size-3.5 m-auto"
                        src={play}
                        alt=""
                      />
                    </button>
                  </div>
                  <button className="flex items-center gap-2.5 group text-base font-medium">
                    <div className="hover:text-secondary group-hover:underline decoration-secondary duration-300 transition-all ease-in-out">
                      View More
                    </div>
                    <img
                      className="group-hover:translate-y-1 duration-300 transition-all ease-in-out"
                      src={down}
                      alt=""
                    />
                    <img src={secondaryDown} alt="" />
                  </button>
                </div>
              </div>
              <div className="col-span-4">
                <div className="size-full flex flex-col gap-7">
                  <div className="border-2 rounded-xl py-6 px-3 bg-white group hover:border-gray1 duration-300 transition-all ease-in-out">
                    <div className="flex items-start gap-3.5">
                      <div className="size-[70px] rounded-ful">
                        <img src={mentorPic} alt="" />
                      </div>
                      <div className="">
                        <div className="flex gap-1 w-fit items-center bg-yellow1 py-0.5 px-[7px] rounded-md text-[10px] font-semibold">
                          <div className="">
                            <img src={ratingStar} alt="" />
                          </div>
                          <div className="">4.5</div>
                        </div>
                        <div className="text-base font-semibold">
                          Amit M<div className="">Aggarwal</div>
                        </div>
                        <div className="py-4 flex gap-0.5 xl:gap-1 items-center text-sm font-medium">
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="">(8 reviews)</div>
                        </div>
                        <div className="text-sm font-semibold">9 years</div>
                        <button className="pt-7 group-hover:scale-105 origin-left duration-300 transition-all ease-in-out flex items-center gap-2.5 text-primary text-sm font-semibold">
                          view
                          <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                            <img
                              className="group-hover:[filter:brightness(5)contrast(1)]"
                              src={primaryArrow}
                              alt=""
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 rounded-xl py-6 px-3 bg-white group hover:border-gray1 duration-300 transition-all ease-in-out">
                    <div className="flex items-start gap-3.5">
                      <div className="size-[70px] rounded-ful">
                        <img src={mentorPic} alt="" />
                      </div>
                      <div className="">
                        <div className="flex gap-1 w-fit items-center bg-yellow1 py-0.5 px-[7px] rounded-md text-[10px] font-semibold">
                          <div className="">
                            <img src={ratingStar} alt="" />
                          </div>
                          <div className="">4.5</div>
                        </div>
                        <div className="text-base font-semibold">
                          Amit M<div className="">Aggarwal</div>
                        </div>
                        <div className="py-4 flex gap-0.5 xl:gap-1 items-center text-sm font-medium">
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="size-3">
                            <img
                              className="size-full"
                              src={secondaryStar}
                              alt=""
                            />
                          </div>
                          <div className="">(8 reviews)</div>
                        </div>
                        <div className="text-sm font-semibold">9 years</div>
                        <button className="pt-7 group-hover:scale-105 origin-left duration-300 transition-all ease-in-out flex items-center gap-2.5 text-primary text-sm font-semibold">
                          view
                          <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                            <img
                              className="group-hover:[filter:brightness(5)contrast(1)]"
                              src={primaryArrow}
                              alt=""
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </FiltersComponent>
      {/* Main section*/}

      {/* crack JEE section*/}
      {section2 ? (
        <section className="bg-[#F5F5F5]">
          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto pt-10">
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-9">
                <div className="size-full py-7 px-5 shadow-lg bg-white rounded-lg relative">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="">
                      <div className="text-lg font-semibold leading19 text-gray1">
                        Crack JEE Exam with
                        <span className="text-primary">Arihant Plus</span>
                      </div>
                      <div className="font-medium text-sm text-gray5 pt-5 leading19">
                        Our-step by-step guides are detailed explanations have
                        your back.
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-white font-semibold text-sm">
                      <div className=" size-7 flex items-center justify-center bg-[#353C41] rounded-full">
                        E
                      </div>
                      <div className=" size-7 flex items-center justify-center bg-[#353C41] rounded-full">
                        H
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 lg:gap-10 pt-6 relative z-10">
                    <div className="col-span-5 ">
                      <div className="size-full group relative after:absolute after:size-48 after:-bottom-1  after:-right-1  after:scale-125 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat">
                        <div className="h-full w-full p-4 overflow-hidden relative rounded-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat">
                          <div className="relative z-20 h-full">
                            <div className="flex items-center gap-2 text-white text-[10px] font-semibold mb-auto">
                              <div className="bg-white rounded-full size-6 p-1.5">
                                <img src={toDoRecommended2} alt="" />
                              </div>
                              <div className="">
                                India&apos;s No. 1 Test Portal
                              </div>
                            </div>
                            <div className="flex pt-3 items-end justify-between h-[calc(100%-24px)] w-full over">
                              <div className="size-6 bg-white rounded-full p-1.5 group-hover:scale-125 duration-300 transition-all ease-in-out">
                                <img
                                  className="object-cover "
                                  src={play}
                                  alt=""
                                />
                              </div>
                              <div className="-mb-3.5 w-2/3 group-hover:scale-125 duration-300 transition-all ease-in-out">
                                <img
                                  className="size-full"
                                  src={teacherGroup}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7">
                      <div className="text-2xl font-bold text-gray1 leading19">
                        JEE Main Pathfinder
                      </div>
                      <div className="pt-4 leading19 text-sm font-medium">
                        Familiarize with the all main features subject wise
                      </div>
                      <div className="flex items-center gap-2.5 pt-6 leading-[100%] text-xs font-semibold *:w-24 *:text-center *:py-2 ">
                        <div className="rounded-md bg-brown4 leading19">
                          Mathematics
                        </div>
                        <div className="rounded-md bg-brown4 leading19">
                          Physics
                        </div>
                        <div className="rounded-md bg-brown4 leading19">
                          Chemistry
                        </div>
                      </div>
                      <div className="pt-4  flex-wrap gap-y-1.5 flex items-center justify-between text-sm font-semibold ">
                        <div className="leading19">Live Classes</div>
                        <div className="leading19">Weekly Test</div>
                        <div className="leading19">Complete Study Material</div>
                        <div className="leading19">Doubt Solving</div>
                      </div>
                      <button className="mt-6  flex gap-4 px-4 py-3.5 items-center bg-primary text-sm font-semibold text-white rounded-full hover:shadow-lg transition-all ease-in-out duration-300">
                        <div className="leading19">Explore Courses</div>
                        <div className="">
                          <img
                            className="[filter:brightness(5)contrast(1)]"
                            src={arrow45deg}
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="absolute  top-0 right-0">
                    <img src={plusSignBg} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="size-full p-4  rounded-xl  border border-brown3">
                  <div className="pb-3">
                    <div className="text-xs font-semibold text-primary leading19">
                      JEE 2024 Analysis
                    </div>
                    <div className="py-3 text-base font-semibold text-gray1">
                      Paper - 1 (Physics)
                    </div>
                    <div className="text-black2  font-medium text-sm leading19">
                      Exam Date: 12 August 2024
                    </div>
                  </div>
                  <div className="group relative after:absolute after:size-36 after:-bottom-0  after:-right-0   after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat">
                    <div className="h-full w-full p-2.5 overflow-hidden relative rounded-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat">
                      <div className="relative z-20 h-full">
                        <div className="flex items-center gap-2 text-white text-[10px] font-semibold mb-auto">
                          <div className="bg-white rounded-full size-5 p-1">
                            <img src={toDoRecommended2} alt="" />
                          </div>
                          <div className="leading19">
                            India&apos;s No. 1 Test Portal
                          </div>
                        </div>
                        <div className="flex pt-3 items-end justify-between h-[calc(100%-24px)] w-full over">
                          <div className="size-6 bg-white rounded-full p-1.5 group-hover:scale-125 duration-300 transition-all ease-in-out">
                            <img className="object-cover " src={play} alt="" />
                          </div>
                          <div className="-mb-3.5 w-2/3 group-hover:scale-125 duration-300 transition-all ease-in-out">
                            <img
                              className="size-full"
                              src={teacherGroup}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      {/* crack JEE section*/}

      {/*free vedio course*/}
      <section className="bg-brown3/20">
        <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto py-[60px] ">
          <div className="text-3xl font-semibold text-gray5 pb-7">
            Free Vedio Course
          </div>
          <div className="text-sm font-medium">
            Our step-by-step guides and detailed explanations have your back.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] py-10">
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      REASONING
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 text-base font-medium">
            <div className="">View all</div>
            <div className="">
              <img className="-rotate-90" src={down} alt="" />
            </div>
          </button>
        </div>
      </section>
      {/*free vedio course*/}

      {/*top mentors*/}

      {!section2 ? (
        <section className="bg-[#F5F5F5] py-16">
          <div className="relative group/nav pt-6 max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  m:py-5 2xl:py-10">
            <div className="pb-6">
              <div className="text-[30px] font-semibold">Top to Learn From</div>
              <div className="pb-[34px] text-sm font-medium">
                Our step-by-step guides and detailed explanations have your
                back.
              </div>
            </div>
            <div className="  gap-4 relative">
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
                    spaceBetween: 20,
                  },
                  500: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
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
                {data.map((el) => (
                  <SwiperSlide key={el}>
                    <ErrorBoundary>
                      <div className="border-2 rounded-xl py-6 px-3 bg-white group hover:border-gray1 duration-300 transition-all ease-in-out">
                        <div className="flex items-start gap-3.5">
                          <div className="size-[70px] rounded-ful">
                            <img src={mentorPic} alt="" />
                          </div>
                          <div className="">
                            <div className="flex gap-1 w-fit items-center bg-yellow1 py-0.5 px-[7px] rounded-md text-[10px] font-semibold">
                              <div className="">
                                <img src={ratingStar} alt="" />
                              </div>
                              <div className="">4.5</div>
                            </div>
                            <div className="text-base font-semibold">
                              Amit M<div className="">Aggarwal</div>
                            </div>
                            <div className="py-4 flex gap-0.5 xl:gap-1 items-center text-sm font-medium">
                              <div className="size-3">
                                <img
                                  className="size-full"
                                  src={secondaryStar}
                                  alt=""
                                />
                              </div>
                              <div className="size-3">
                                <img
                                  className="size-full"
                                  src={secondaryStar}
                                  alt=""
                                />
                              </div>
                              <div className="size-3">
                                <img
                                  className="size-full"
                                  src={secondaryStar}
                                  alt=""
                                />
                              </div>
                              <div className="size-3">
                                <img
                                  className="size-full"
                                  src={secondaryStar}
                                  alt=""
                                />
                              </div>
                              <div className="size-3">
                                <img
                                  className="size-full"
                                  src={secondaryStar}
                                  alt=""
                                />
                              </div>
                              <div className="">(8 reviews)</div>
                            </div>
                            <div className="text-sm font-semibold">9 years</div>
                            <button className="pt-7 flex items-center gap-2.5 text-primary text-sm font-semibold">
                              view
                              <div className=" rounded-full size-6 flex items-center justify-center group-hover:bg-primary transition-all duration-300 ease-in-out">
                                <img
                                  className="group-hover:[filter:brightness(5)contrast(1)]"
                                  src={primaryArrow}
                                  alt=""
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </ErrorBoundary>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="swiper-button-prev-test-series rounded-md *:size-6 text-gray1 bg-white  w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/2 -left-3 -translate-y-1/2">
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
              <button className="swiper-button-next-test-series rounded-md *:rotate-180 *:size-6 text-gray1 bg-white  w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/2 -right-3 -translate-y-1/2">
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
            <button className="flex items-center gap-2 mt-12">
              <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
                {" "}
                View More{" "}
              </span>
              <a className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
                <img src={down} alt="" />
              </a>
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
      {/*top mentors*/}

      {!section2 ? <ArihantPlusMasterClass /> : ""}

      {/*trending course*/}

      <section className="bg-[#F5F5F5]">
        <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto py-[60px] ">
          <div className="text-3xl font-semibold text-gray5 pb-7">
            Popular Trending Course
          </div>
          <div className="text-sm font-medium">
            Access the latest test series on Exam with Arihant for comprenshive
            exam preparation.Stay ahead with practice and mock tests
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] py-10">
            <div className="col-auto">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left  transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      REASONING
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="size-full group shadow-lg rounded-b-lg bg-white">
                <div
                  className=" w-full p-4 relative rounded-t-lg bg-[url('./assets/img/liveClassesBg.svg')]  bg-cover bg-no-repeat after:absolute after:size-48 after:top-1 after:-right-6 after:z-10 after:bg-[url('./assets/img/teacherImgBg.svg')] after:bg-no-repeat  
                    "
                >
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white text-[10px] font-semibold ">
                      <div className="bg-white rounded-full size-6 p-1.5">
                        <img src={toDoRecommended2} alt="" />
                      </div>
                      <div className="">India&apos;s No. 1 Test Portal</div>
                    </div>
                    <div className="flex pt-3 items-end justify-between ">
                      <div className="flex items-center flex-wrap w-1/2 text-white text-base font-semibold group-hover:scale-x-105 origin-left   duration-300 transition-all ease-in-out">
                        UPSC{" "}
                        <div className=" size-1 bg-white rounded-full mx-1"></div>{" "}
                        SSC <div className="">Banking</div>
                      </div>
                      <div className="-mb-4 ">
                        <img className="" src={teacherTransparentImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6">
                  <div className="flex items-end gap-3">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        E
                      </div>
                      <div className="text-white font-medium text-xs size-5 flex items-center justify-center bg-[#353C41] rounded-full pt-0.5">
                        H
                      </div>
                    </div>
                    <div className="text-primary text-base font-semibold leading-[100%]">
                      MAHA MARATHON
                    </div>
                    <div className="font-medium text-[10px]">03 hour</div>
                  </div>
                  <div className="py-6">
                    <div className="text-sm font-medium text-gray5">
                      Comprenshive Vedio Solution
                    </div>
                    <div className="flex items-center gap-1 py-2 text-gray5 text-sm font-semibold">
                      <div className="">UPPSC</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">RO/ARO</div>
                      {/* <div className="p-0.5 bg-black rounded-full"></div> */}
                      <div className="">2024</div>
                    </div>
                    <div className="text-sm font-medium text-gray5">
                      All Competative Exams
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium gap-1">
                    <div className="text-nowrap"> Ended on 2 Aug 27 2023 </div>
                    <div className="p-0.5 bg-primary rounded-full"></div>
                    <div className="text-nowrap"> 18 Lesson</div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                    <div className="group-hover:scale-x-105 origin-left transition-all ease-in-out duration-300">
                      Khusboo Ma&apos;am
                    </div>
                    <div className="size-6 bg-primary rounded-full p-2 group-hover:scale-150 duration-300 transition-all ease-in-out">
                      <img
                        className="object-cover [filter:brightness(10)contrast(2)]"
                        src={play}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 text-base font-medium">
            <div className="">View all</div>
            <div className="">
              <img className="-rotate-90" src={down} alt="" />
            </div>
          </button>
        </div>
      </section>
      {/*trending course*/}

      <div>
        <div className="relative group/nav  max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  md:pb-16 2xl:py-10">
          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full mx-auto pb-12">
            <div className="size-full pt-[70px]">
              <div className="text-3xl font-semibold ">Latest Test Series</div>
              <div className="pt-7 text-sm font-medium text-[#757676]">
                In this course you will learn from basics to advancel
                Intelligence with hands-on experience.
              </div>
            </div>
          </div>
          <TestSeriesComponent />
          <button className="flex items-center gap-2 max-sm:mt-4">
            <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <span className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={more} alt="" />
            </span>
          </button>
        </div>
      </div>

      {/*best seller*/}
      <section className="bg-[#F5F5F5] py-16">
        <div className="relative group/nav pt-6 max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  m:py-5 2xl:py-10">
          <div className="text-[30px] font-semibold">Best Seller</div>
          <div className="pb-9 text-sm font-medium">
            Discover our latest release,designed to elevate your learning
            experience.Dive into fresh content for enhanced understanding and
            mastery.
          </div>
          <div className="  gap-4 relative">
            <Swiper
              className="size-full"
              spaceBetween={10}
              slidesPerView={1.2}
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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 2.4,
                  spaceBetween: 30,
                },
                1600: {
                  slidesPerView: 3.2,
                  spaceBetween: 40,
                },
              }}
            >
              {data.map((el) => (
                <SwiperSlide key={el}>
                  <ErrorBoundary>
                    <div className="py-6 bg-white rounded-xl hover:shadow-xl duration-300 ease-in-out transition-all">
                      <div className="flex items-start gap-4 pb-5 ps-6 pe-2">
                        <div className="w-[158px]">
                          <img
                            className="size-full object-cover"
                            src={bookdetail}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <div className="text-base font-semibold">
                            <div className="text-primary ">Success Master</div>
                            <div className="py-3">
                              <div className="">JEE Main Paper Mathematics</div>
                              <div className="">23 Years (2024-2022)</div>
                            </div>
                            <div className="flex flex-col gap-1 text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <div className="size-[13px] rounded-[3px] border pb-0.5 border-black flex items-center justify-center ">
                                  <span className="le"> +</span>
                                </div>
                                <div className="">Current Affair</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="size-[13px] rounded-[3px] border pb-0.5 border-black flex items-center justify-center ">
                                  <span className="le"> +</span>
                                </div>
                                <div className="">
                                  Solved Papers (2017-2024)
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="size-[13px] rounded-[3px] border pb-0.5 border-black flex items-center justify-center ">
                                  <span className="le"> +</span>
                                </div>
                                <div className="">Modal Solved Paper</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="size-[13px] rounded-[3px] border pb-0.5 border-black flex items-center justify-center ">
                                  <span className="le"> +</span>
                                </div>
                                <div className="">
                                  Entire Syllabs in 3 major subject heads
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 pt-5 text-sm font-medium">
                              <div className="flex items-center">
                                <img
                                  className="size-3.5"
                                  src={primaryStars}
                                  alt=""
                                />
                                <img
                                  className="size-3.5"
                                  src={primaryStars}
                                  alt=""
                                />
                                <img
                                  className="size-3.5"
                                  src={primaryStars}
                                  alt=""
                                />
                                <img
                                  className="size-3.5"
                                  src={primaryStars}
                                  alt=""
                                />
                                <img
                                  className="size-3.5"
                                  src={primaryStars}
                                  alt=""
                                />
                              </div>
                              <div className="">(8 reviews)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-6  ">
                        <div className="pt-5 border-t border-black">
                          <div className="flex items-center gap-4">
                            <div className="line-through text-lg font-semibold text-gray1">
                              Rs 775
                            </div>
                            <div className="text-primary text-[22px] font-semibold">
                              Rs 582
                            </div>
                          </div>
                          <div className="flex items-center gap-5 pt-4">
                            <button className="border w-full border-black rounded-full py-3.5 text-lg font-semibold hover:bg-gray4">
                              Explore
                            </button>
                            <button className="border w-full border-primary bg-primary text-white rounded-full py-3.5 text-lg font-semibold">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ErrorBoundary>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev-test-series rounded-md *:size-6 text-gray1 bg-white  w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/2 -left-3 -translate-y-1/2">
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
            <button className="swiper-button-next-test-series rounded-md *:rotate-180 *:size-6 text-gray1 bg-white  w-7 h-10 shadow-xl border flex max-sm:opacity-100 sm:opacity-0 sm:group-hover/nav:opacity-100 duration-300 justify-center items-center  z-20 absolute  top-1/2 -right-3 -translate-y-1/2">
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
          <button className="flex items-center gap-2 mt-12">
            <span className="text-sm sm:text-base  2xl:text-2xl font-medium text-black">
              {" "}
              View More{" "}
            </span>
            <a className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
              <img src={down} alt="" />
            </a>
          </button>
        </div>
      </section>

      {/*best seller*/}
    </div>
  );
};

export default LiveClassesListComponent;
