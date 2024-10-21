import { useState } from "react";
import NewsMarqueeComponent from "../NewsMarqueeComponent/NewsMarqueeComponent";
import ToDoListIcon from "../../assets/img/toDoListIcon.svg";
import ToDoListArrow from "../../assets/img/toDoArrow.svg";
import toDoRecommended1 from "../../assets/img/toDoRecommended1.svg";
import toDoRecommended2 from "../../assets/img/toDoRecommended2.svg";
import recommendedPlayBtn from "../../assets/img/recommendedPlayBtn.svg";
import recommendedBg from "../../assets/img/recommendedBg.svg";
import recommendedPic from "../../assets/img/recommendedPic.svg";
import recommendedPic2 from "../../assets/img/recommendedPic2.svg";
import TestSeriesComponent from "../TestSeriesComponent/TestSeriesComponent";
import down from "../../assets/img/down.png";
import questionPaperIcon from "../../assets/img/questionPaperIcon.svg";
import correctIcon from "../../assets/img/correctIcon.svg";
import clockIcon from "../../assets/img/watch.png";
import lockIcon from "../../assets/img/lockIcon.svg";
import compassIcon from "../../assets/img/compassIcon.png";
import graphIcon from "../../assets/img/graphIcon.svg";
import infiniteIcon from "../../assets/img/infiniteIcon.svg";
import accessiveIcon from "../../assets/img/accessiveIcon.svg";
import langEnLIcon from "../../assets/img/langEnLIcon.svg";
import calenderIcon from "../../assets/img/calenderIcon.svg";
import SuccessStoryComponent from "../SuccessStoryComponent/SuccessStoryComponent";
import FeatureComponent from "../FeatureComponent/FeatureComponent";
import RelatedVideoCardComponent from "../RelatedVideoCardComponent/RelatedVideoCardComponent";
import FrequentlyBoughtTogether from "../FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import more from "../../assets/img/down.png";
import FiltersComponent from "../FiltersComponent/FiltersComponent";

const TestSeriesListComponent = () => {
  const [isTestDetails, setIsTestDetails] = useState(false);

  return (
    <div className="bg-slate-100">
      <NewsMarqueeComponent />

      <FiltersComponent>
        <div className="w-full ">
        {!isTestDetails ? (
          <div className="md:col-span-8  col-span-12 sticky top-0 ">
            <div className="w-full">
              <div className="font-medium text-2xl text-[#6F757C]pb-6">
                Attempt Free Test
              </div>
              <div className="text-base font-medium text-gray1 py-7">
                A wonderful and unique curriculum that is the best fit for every
                student.
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-7">
                <div className="col-auto">
                  <div className="size-full p-5 rounded-lg bg-white group hover:shadow-2xl duration-300 transition-all ease-in-out">
                    <div className="flex items-center pb-7 gap-4 ">
                      <div className="">
                        <img className="size-full " src={ToDoListIcon} alt="" />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold text-black ">
                          JEE Main Exam 2024
                        </div>
                        <div className="text-base font-medium text-gray1 ">
                          Full test 01
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold">
                      Enhance your exam readiness with our latest test
                      series.Access comprenshive practice materials tailored for
                      your success.
                    </div>
                    <div className="pt-5 flex items-center gap-1">
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">50</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Questions
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">200</div>
                        <div className="font-medium text-sm text-gray1">
                          Marks
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">60</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Mins
                        </div>
                      </div>
                    </div>
                    <buttton className="pt-7 flex items-center justify-between ">
                      <div className="text-primary text-sm font-semibold">
                        Attempt Now
                      </div>
                      <div className="p-2 group-hover:bg-primary rounded-full">
                        <img
                          className="size-full group-hover:[filter:contrast(0)brightness(2)] transition-all duration-300 ease-in-out"
                          src={ToDoListArrow}
                          alt=""
                        />
                      </div>
                    </buttton>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="size-full p-5 rounded-lg bg-white group hover:shadow-2xl duration-300 transition-all ease-in-out">
                    <div className="flex items-center pb-7 gap-4 ">
                      <div className="">
                        <img className="size-full " src={ToDoListIcon} alt="" />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold text-black ">
                          JEE Main Exam 2024
                        </div>
                        <div className="text-base font-medium text-gray1 ">
                          Full test 01
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold">
                      Enhance your exam readiness with our latest test
                      series.Access comprenshive practice materials tailored for
                      your success.
                    </div>
                    <div className="pt-5 flex items-center gap-1">
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">50</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Questions
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">200</div>
                        <div className="font-medium text-sm text-gray1">
                          Marks
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">60</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Mins
                        </div>
                      </div>
                    </div>
                    <buttton className="pt-7 flex items-center justify-between ">
                      <div className="text-primary text-sm font-semibold">
                        Attempt Now
                      </div>
                      <div className="p-2 group-hover:bg-primary rounded-full">
                        <img
                          className="size-full group-hover:[filter:contrast(0)brightness(2)] transition-all duration-300 ease-in-out"
                          src={ToDoListArrow}
                          alt=""
                        />
                      </div>
                    </buttton>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="size-full p-5 rounded-lg bg-white group hover:shadow-2xl duration-300 transition-all ease-in-out">
                    <div className="flex items-center pb-7 gap-4 ">
                      <div className="">
                        <img className="size-full " src={ToDoListIcon} alt="" />
                      </div>
                      <div className="">
                        <div className="text-lg font-semibold text-black ">
                          JEE Main Exam 2024
                        </div>
                        <div className="text-base font-medium text-gray1 ">
                          Full test 01
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold">
                      Enhance your exam readiness with our latest test
                      series.Access comprenshive practice materials tailored for
                      your success.
                    </div>
                    <div className="pt-5 flex items-center gap-1">
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">50</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Questions
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">200</div>
                        <div className="font-medium text-sm text-gray1">
                          Marks
                        </div>
                      </div>
                      <div className="w-full bg-brown3 p-2 rounded-md ">
                        <div className="text-lg font-semibold">60</div>
                        <div className="font-medium text-sm text-gray1">
                          {" "}
                          Mins
                        </div>
                      </div>
                    </div>
                    <buttton className="pt-7 flex items-center justify-between group">
                      <div className="text-primary text-sm font-semibold">
                        Attempt Now
                      </div>
                      <div className="p-2 group-hover:bg-primary rounded-full">
                        <img
                          className="size-full group-hover:[filter:contrast(0)brightness(2)] transition-all duration-300 ease-in-out"
                          src={ToDoListArrow}
                          alt=""
                        />
                      </div>
                    </buttton>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 pt-14 gap-7">
                <div className="col-auto">
                  <div className="size-full p-5 rounded-lg bg-gray4 relative hover:shadow-[1px_1px_6px_0px_gray]  duration-300 ease-in-out transition-all">
                    <div className="absolute top-1/4 right-0">
                      <img className="size-full" src={recommendedBg} alt="" />
                    </div>
                    <div className="absolute -bottom-2 right-3">
                      <img className="size-full" src={recommendedPic} alt="" />
                    </div>
                    <div className="size-full relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-primary py-1 px-3 rounded-md">
                          <img
                            className="size-full"
                            src={toDoRecommended1}
                            alt=""
                          />
                          <div className="text-xs font-semibold text-white">
                            Recommended
                          </div>
                        </div>
                        <div className="bg-white rounded-full p-2">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                      </div>
                      <div className="w-2/3 pt-7">
                        <div className="font-bold text-base text-gray1">
                          FREE Live JEE Main Test
                        </div>
                        <div className="w-2/3 pt-4 font-bold text-sm text-primary text-pretty">
                          Identify Strengths,focus on weakness, and master exam
                          format.
                        </div>
                        <div className="pt-7 flex items-center gap-2">
                          <div className="">
                            <img
                              className="size-full"
                              src={recommendedPlayBtn}
                              alt=""
                            />
                          </div>
                          <div className="text-xs font-semibold">
                            Upcoming on 10th August 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto p-1">
                  <div className="size-full p-5 rounded-lg bg-yellow1 relative hover:shadow-[1px_1px_6px_0px_gray]  duration-300 ease-in-out transition-all">
                    <div className="absolute top-1/4 right-0">
                      <img className="size-full" src={recommendedBg} alt="" />
                    </div>
                    <div className="absolute -translate-y-[50%] top-1/2 right-3">
                      <img className="size-full" src={recommendedPic2} alt="" />
                    </div>
                    <div className="size-full relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="w-1/3 text-primary text-sm font-bold">
                          Master JEE in 10-minutes videos.
                        </div>
                        <div className="bg-white rounded-full p-2">
                          <img src={toDoRecommended2} alt="" />
                        </div>
                      </div>
                      <div className="w-2/3 pt-5">
                        <div className="font-semibold text-sm text-gray1">
                          50 questions, 200 marks in 60 minutes
                        </div>
                        <div className="w-2/3 pt-5 font-bold text-base text-gray1 text-pretty">
                          Achieve your dream!
                        </div>
                        <div className="pt-9 flex items-center gap-2">
                          <div className="">
                            <img
                              className="size-full"
                              src={recommendedPlayBtn}
                              alt=""
                            />
                          </div>
                          <div className="text-xs font-semibold">
                            Upcoming on 10th August 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="flex items-center gap-2 mt-4">
                    <span className="text-base font-medium text-black">
                      {" "}
                      View More{" "}
                    </span>
                    <a className="mt-1 size-4 *:size-full *:object-contain">
                      <img src={more} alt="" />
                    </a>
                  </button> */}
          </div>
        ) : (
          <div className="md:col-span-9  col-span-12 sticky top-0 mb-16">
            <div className="font-medium text-2xl">JEE Main 35 Test</div>
            <div className="text-base font-semibold pb-7 pt-6">
              A wonderful and unique curriculum that is the best fit for every
              student
            </div>

            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-12 lg:col-span-8">
                <div className="size-full ">
                  <div className="pb-7 pt-2 w-full">
                    <div className="flex bg-white p-5 border-2 rounded-xl items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <div className="text-primary">80</div>
                        <div className="">Chapter Tests</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <div className="text-primary">03</div>
                        <div className="">Sectional Tests</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <div className="text-primary">10</div>
                        <div className="">Full Tests</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <div className="text-primary">6</div>
                        <div className="">PYQs</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <div className="text-primary">18</div>
                        <div className="">Sectionwise PYQs</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-7 px-6 border border-primary bg-white rounded-xl w-full flex items-center gap-7">
                    <div className="w-fit">
                      <img className="size-full" src={ToDoListIcon} alt="" />
                    </div>
                    <div className="w-2/3">
                      <div className="flex items-center gap-4 pb-6">
                        <div className="text-lg font-semibold">
                          JEE Main Exam 2024
                        </div>
                        <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                          Full Test 01
                        </div>
                      </div>
                      <div className="flex items-center gap-9">
                        <div className="flex items-center gap-2 text-gray1">
                          <div className="">
                            <img
                              className="size-4 object-contain"
                              src={questionPaperIcon}
                              alt=""
                            />
                          </div>
                          <div className="text-sm text-nowrap font-medium">
                            50
                            <span className="text-black font-normal">
                              {" "}
                              Questions
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray1">
                          <div className="">
                            <img
                              className="size-4 object-contain"
                              src={correctIcon}
                              alt=""
                            />
                          </div>
                          <div className="text-sm text-nowrap font-medium">
                            200
                            <span className="text-black font-normal">
                              {" "}
                              Marks
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-nowrap items-center gap-2 text-gray1">
                          <div className="*:size-[14px]">
                            <img
                              className="size-4 object-contain "
                              src={clockIcon}
                              alt=""
                            />
                          </div>
                          <div className="text-sm text-nowrap font-medium">
                            60
                            <span className="text-black font-normal">
                              {" "}
                              Mins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-fit mx-auto">
                      <button className="text-primary text-base font-semibold">
                        Attemt Now
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7 pt-8 ">
                    <div className="py-7 px-6 bg-white hover:shadow-lg rounded-xl w-full flex items-center gap-7 duration-300 transition-all ease-in-out">
                      <div className="w-fit">
                        <img className="size-full" src={ToDoListIcon} alt="" />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center gap-4 pb-6">
                          <div className="text-lg font-semibold">
                            JEE Main Exam 2024
                          </div>
                          <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                            Full Test 02
                          </div>
                        </div>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={questionPaperIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              50
                              <span className="text-black font-normal">
                                {" "}
                                Questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={correctIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              200
                              <span className="text-black font-normal">
                                {" "}
                                Marks
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-gray1">
                            <div className="*:size-[14px]">
                              <img
                                className="size-4 object-contain "
                                src={clockIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              60
                              <span className="text-black font-normal">
                                {" "}
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <button className=" ">
                          <img src={lockIcon} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="py-7 px-6 bg-white hover:shadow-lg rounded-xl w-full flex items-center gap-7 duration-300 transition-all ease-in-out">
                      <div className="w-fit">
                        <img className="size-full" src={ToDoListIcon} alt="" />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center gap-4 pb-6">
                          <div className="text-lg font-semibold">
                            JEE Main Exam 2024
                          </div>
                          <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                            Full Test 02
                          </div>
                        </div>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={questionPaperIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              50
                              <span className="text-black font-normal">
                                {" "}
                                Questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={correctIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              200
                              <span className="text-black font-normal">
                                {" "}
                                Marks
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-gray1">
                            <div className="*:size-[14px]">
                              <img
                                className="size-4 object-contain "
                                src={clockIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              60
                              <span className="text-black font-normal">
                                {" "}
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <button className=" ">
                          <img src={lockIcon} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="py-7 px-6 bg-white hover:shadow-lg rounded-xl w-full flex items-center gap-7 duration-300 transition-all ease-in-out">
                      <div className="w-fit">
                        <img className="size-full" src={ToDoListIcon} alt="" />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center gap-4 pb-6">
                          <div className="text-lg font-semibold">
                            JEE Main Exam 2024
                          </div>
                          <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                            Full Test 02
                          </div>
                        </div>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={questionPaperIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              50
                              <span className="text-black font-normal">
                                {" "}
                                Questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={correctIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              200
                              <span className="text-black font-normal">
                                {" "}
                                Marks
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-gray1">
                            <div className="*:size-[14px]">
                              <img
                                className="size-4 object-contain "
                                src={clockIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              60
                              <span className="text-black font-normal">
                                {" "}
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <button className=" ">
                          <img src={lockIcon} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="py-7 px-6 bg-white hover:shadow-lg rounded-xl w-full flex items-center gap-7 duration-300 transition-all ease-in-out">
                      <div className="w-fit">
                        <img className="size-full" src={ToDoListIcon} alt="" />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center gap-4 pb-6">
                          <div className="text-lg font-semibold">
                            JEE Main Exam 2024
                          </div>
                          <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                            Full Test 02
                          </div>
                        </div>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={questionPaperIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              50
                              <span className="text-black font-normal">
                                {" "}
                                Questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={correctIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              200
                              <span className="text-black font-normal">
                                {" "}
                                Marks
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-gray1">
                            <div className="*:size-[14px]">
                              <img
                                className="size-4 object-contain "
                                src={clockIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              60
                              <span className="text-black font-normal">
                                {" "}
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <button className=" ">
                          <img src={lockIcon} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="py-7 px-6 bg-white hover:shadow-lg rounded-xl w-full flex items-center gap-7 duration-300 transition-all ease-in-out">
                      <div className="w-fit">
                        <img className="size-full" src={ToDoListIcon} alt="" />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center gap-4 pb-6">
                          <div className="text-lg font-semibold">
                            JEE Main Exam 2024
                          </div>
                          <div className="text-secondary shadow-lg text-xs font-semibold px-[10px] py-2 bg-gray4 rounded">
                            Full Test 02
                          </div>
                        </div>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={questionPaperIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              50
                              <span className="text-black font-normal">
                                {" "}
                                Questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray1">
                            <div className="">
                              <img
                                className="size-4 object-contain"
                                src={correctIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              200
                              <span className="text-black font-normal">
                                {" "}
                                Marks
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-gray1">
                            <div className="*:size-[14px]">
                              <img
                                className="size-4 object-contain "
                                src={clockIcon}
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-nowrap font-medium">
                              60
                              <span className="text-black font-normal">
                                {" "}
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mx-auto">
                        <button className=" ">
                          <img src={lockIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 font-medium text-base mt-5">
                    View More
                    <img src={down} alt="" />
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                {/* bhai m  useful hu yar hatana mt please wrna tere hi lgjayenge */}
                {/* <div className="size-full">
                        <div className="flex max-sm:flex-col lg:flex-col w-full gap-10">
                          <div className="bg-white w-full shadow-lg rounded-xl py-4 px-5">
                           <div className="flex w-full items-center gap-3 pb-4 border-b border-gray1">
                            <img src={ToDoListIcon} alt="" />
                            <div className="text-base font-semibold">JEE Main Exam 2024</div>
                           </div>
                           <div className="py-4">
                            <div className="pb-3 font-medium text-xs">The test series also comprises SSC MTS previous year papers Test Series also provides candidates with overall rank
                            </div>
                            <div className="flex items-center gap-3">
                             <div className="w-2/3 px-2 py-3 rounded bg-gray4 text-[10px] font-semibold">
                             100+ Total Tests with 
                             100% Detailed Solutions
                             </div>
                             <div className="flex items-center gap-1">
                             <div className="rounded-full bg-primary text-sm font-medium text-white size-5 text-center">
                              E
                             </div>
                             <div className="rounded-full bg-primary text-sm font-medium text-white size-5 text-center">
                             H
                             </div>
                             </div>
                            </div>
                            <div className="flex items-center gap-1.5 py-3.5 text-primary text-[10px] font-semibold">
                           <img src={designedPercentIcon} alt="" />
                           <div className="text-[10px] font-semibold">20% OFF END ON DECEMBER 2024</div>
                            </div>
                            <div className="text-xs font-medium">
                            ₹ <span className='line-through'>499 /</span>
                             <span className='text-sm font-bold inline-block ps-4'>₹ 299 /-</span>
                            </div>
                           </div>
                           <button className='text-sm font-semibold text-primary py-2.5 w-full border rounded-full hover:bg-primary hover:text-white hover:border-transparent duration-300 transition-all ease-in-out'>
                            BUY NOW
                           </button>
                          </div>
                          <div className="bg-white w-full shadow-lg rounded-xl py-4 px-5">
                          <div className="flex items-center gap-2.5 w-full">
                          <div className="w-2/3">
                            <img className='size-full aspect-[1/1.3] 2xl:aspect-[1/0.7] 2xl:object-contain  object-cover' src={teacherImage} alt="" />
                          </div>
                          <div className="">
                          <div className="flex w-full items-center gap-1">
                             <div className="rounded-full bg-primary text-sm font-medium text-white size-5 text-center">
                              E
                             </div>
                             <div className="rounded-full bg-primary text-sm font-medium text-white size-5 text-center">
                             H
                             </div>
                             </div>
                             <div className="pt-2.5 text-sm font-semibold">
                              Doubt Clearing Session on Physics & Chemistry
                             </div>
                          </div>
                          </div>
                          <div className="py-4 flex items-center text-xs font-semibold text-primary ">
                            Started on Sept 02,2024 
                            <div className="p-0.5 mx-1 bg-primary rounded-full"></div>
                            16 lessons
                          </div>
                           <div className="flex pb-4 items-center text-xs font-semibold text-gray1">
                            <div className="p-0.5 bg-gray1 mx-1 rounded-full"></div>
                            2 Hrs 44 Min
                           </div>
                           <div className="flex items-center gap-2 text-xs font-semibold">
                            <img src={playButtonPrimary} alt="" />
                            <div className="">Join now, best solutions</div>
                           </div>
                          </div>
                        </div>
                      </div>  */}
                {/* bhai m  useful hu yar hatana mt please wrna tere hi lgjayenge */}
                <div className="size-full pr-1">
                  <div className="py-4 px-5 rounded-xl shadow-xl bg-white">
                    <div className="flex items-center gap-3 pb-6 border-b border-b-gray1">
                      <div className="bg-primary *:size-4 size-[26px] flex items-center justify-center rounded-md">
                        <img className="" src={compassIcon} alt="" />
                      </div>
                      <div className="text-base font-semibold">Pathfinder</div>
                    </div>
                    <div className="py-4 text-base font-semibold">
                      Mock Test
                    </div>
                    <div className="font-medium text-xs text-[#757676]">
                      The test series also comprises SSC MTS previous year
                      papers Test Series also provides candidates with overall
                      rank
                    </div>
                    <div className="py-4 border-b border-b-gray1 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="">
                          <img src={questionPaperIcon} alt="" />
                        </div>
                        <div className=" text-xs">
                          <div className="font-medium">40 Tests</div>
                          <div className="text-gray1">
                            100% Detailed Solutions
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="">
                          <img src={graphIcon} alt="" />
                        </div>
                        <div className=" text-xs">
                          <div className="text-gray1">
                            Detailed Performance Analysis
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="">
                          <img src={infiniteIcon} alt="" />
                        </div>
                        <div className=" text-xs">
                          <div className="text-gray1">
                            Unlimited Test Re-Attempts.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="">
                          <img src={accessiveIcon} alt="" />
                        </div>
                        <div className=" text-xs">
                          <div className="text-gray1">
                            Accessible on mobile App
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-medium text-gray1">
                        <div className="">
                          <img src={langEnLIcon} alt="" />
                        </div>
                        <div className="">English & Hindi</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-gray1">
                        <div className="">
                          <img src={calenderIcon} alt="" />
                        </div>
                        <div className="">12 Months</div>
                      </div>
                    </div>
                    <button
                      className="py-2.5 text-sm font-semibold text-primary border-2 rounded-full w-full hover:bg-primary hover:border-primary hover:text-white transition-a;
                                 duration-300 ease-in-out"
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
         </div>
      </FiltersComponent>

      <section className="bg-brown3">
        <div className="bg-brown3">
          <div className="relative group/nav  max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  m:py-5 2xl:py-10">
            <div className="max-w-6xl 2xl:w-full 2xl:max-w-full mx-auto pb-12">
              <div className="size-full pt-12">
                <div className="text-3xl font-semibold ">Test Series</div>
                <div className="pt-7 text-sm font-medium text-[#757676]">
                  in this course you will learn from basics to advance |
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
              <button className="size-3 sm:size-4 *:size-full *:object-contain -rotate-90">
                <img src={more} alt="" />
              </button>
            </button>
          </div>
        </div>
        <FrequentlyBoughtTogether
          border={false}
          title="Test Series & e-Books"
          subTitle="In this course you will learn from basics to advance | intelligence
            with hands on experience"
        />
        <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6  mx-auto pt-16 pb-7 ">
          <button className=" flex items-center gap-3 text-base font-medium">
            <span>View all</span>
            <img className="-rotate-90" src={down} alt="" />
          </button>
        </div>

        <FrequentlyBoughtTogether
          border={false}
          title="Test Series & Books"
          subTitle="In this course you will learn from basics to advance | intelligence
            with hands on experience"
        />
        <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6  mx-auto pt-16 pb-12 ">
          <button className=" flex items-center gap-3 text-base font-medium">
            <span>View all</span>
            <img className="-rotate-90" src={down} alt="" />
          </button>
        </div>
       
        {/*  DO NOT REMOVE (FOR REFERENCE)  */}
        {/* <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6  mx-auto py-16 ">
          <p className=" pb-7 text-2xl sm:text-3xl font-semibold text-black">
            Test Series & e-Books
          </p>
          <p className="text-sm font-medium text-[#757676] pb-11">
            {" "}
            In this course you will learn from basics to advance | intelligence
            with hands on experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 rounded-2xl  bg-white shadow-2xl ">
            <div className="col-auto  lg:py-5">
              <div className="size-full p-7 lg:px-7 max-lg:border-b sm:border-r  border-brown3">
                <div className="*:w-[134px] *:!mx-auto">
                  <img src={book1} alt="" />
                </div>
                <div className="w-full">
                  <p className="text-sm pt-6 font-semibold">
                    In this course you will learn from basics to advance |
                    Intelligence with hands-on experience.
                  </p>
                  <div className="flex justify-between items-center pt-9">
                    <p className="text-lg font-bold text-black">Rs. 665</p>
                    <div className="bg-yellow4 text-sm  font-medium p-2 rounded">
                      New Edition
                    </div>
                    <input
                      type="checkbox"
                      className="size-4 sm:size-5 2xl:size-6   border border-black  checked:accent-yellow4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto  lg:py-5">
              <div className="size-full p-7 lg:px-7 max-lg:border-b sm:border-r  border-brown3">
                <div className="*:w-[134px] *:!mx-auto">
                  <img src={book1} alt="" />
                </div>
                <div className="w-full">
                  <p className="text-sm pt-6 font-semibold">
                    In this course you will learn from basics to advance |
                    Intelligence with hands-on experience.
                  </p>
                  <div className="flex justify-between items-center pt-9">
                    <p className="text-lg font-bold text-black">Rs. 665</p>
                    <div className="bg-yellow4 text-sm  font-medium p-2 rounded">
                      New Edition
                    </div>
                    <input
                      type="checkbox"
                      className="size-4 sm:size-5 2xl:size-6   border border-black  checked:accent-yellow4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto  lg:py-5">
              <div className="size-full p-7 lg:px-7 max-lg:border-b sm:border-r  border-brown3">
                <div className="*:w-[134px] *:!mx-auto">
                  <img src={book1} alt="" />
                </div>
                <div className="w-full">
                  <p className="text-sm pt-6 font-semibold">
                    In this course you will learn from basics to advance |
                    Intelligence with hands-on experience.
                  </p>
                  <div className="flex justify-between items-center pt-9">
                    <p className="text-lg font-bold text-black">Rs. 665</p>
                    <div className="bg-yellow4 text-sm  font-medium p-2 rounded">
                      New Edition
                    </div>
                    <input
                      type="checkbox"
                      className="size-4 sm:size-5 2xl:size-6   border border-black  checked:accent-yellow4"
                    />
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-auto  p-5">
              <div className=" size-full">
                <div className="font-semibold text-xl py-3 px-4 w-full bg-gray4 rounded-xl">
                  Combo Price
                </div>
                <div className="pt-16">
                  <div className="flex items-center pb-7 justify-between ">
                    <p className="text-sm font-semibold ">
                      Total Amount (1 items){" "}
                    </p>
                    <p className="text-base font-semibold ">665.00</p>
                  </div>
                  <div className="flex items-center  justify-between ">
                    <p className="text-sm font-semibold ">
                      Total Amount (1 items){" "}
                    </p>
                    <p className="text-base font-semibold ">665.00</p>
                  </div>
                  <div className="border-t my-4 border-gray2"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold ">Total:</p>
                    <p className="text-base font-semibold ">600.00</p>
                  </div>
                  <button className="mt-8 bg-primary border border-primary block text-sm sm:text-base font-semibold  text-center text-[#ffff]  w-full py-1 sm:py-2 rounded-xl">
                    Confirm Order
                  </button>
                  <button className=" block text-sm sm:text-base w-full font-semibold 2xl:text-2xl text-center rounded-xl border border-black py-1 sm:py-2 mt-3">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="pt-7 flex items-center gap-3 text-base font-medium">
            <span>View all</span>
            <img className="-rotate-90" src={down} alt="" />
          </button>
        </div> */}
      </section>

      {/* latest-test-series-- */}
      <div>
        <div className="relative group/nav  max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto  m:py-5 2xl:py-10">
          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full mx-auto pb-12">
            <div className="size-full pt-[70px]">
              <div className="text-3xl font-semibold ">Latest Test Series</div>
              <div className="pt-7 text-sm font-medium text-[#757676]">
                In this course you will learn from basics to advancel
                Intelligence with hands-on experience.
              </div>
            </div>
          </div>
          <TestSeriesComponent setIsTestDetails={setIsTestDetails} />
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
      {/* latest-test-series-- */}

      {/* related-vidoes-- */}
      <RelatedVideoCardComponent />
      {/* related-vidoes-- */}

      {/* success-story-- */}
      {!isTestDetails ? <SuccessStoryComponent /> : <FeatureComponent />}
      {/* success-story-- */}
    </div>
  );
};

export default TestSeriesListComponent;
