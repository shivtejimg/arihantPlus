import AppLayout from "../../components/AppLayout/AppLayout"
import dropdownIcon from "../../assets/img/dropdownIcon.svg";
import question0Icon from "../../assets/img/question0Icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
const data = [1,2,3,4,5,6,7,8,9,0,]

const TestQuestion = () => {
  const [step,setStep] = useState(1);
  return (
    <AppLayout>
        <div className="pt-[120px] md:pt-32 lg:pt-20 bg-white2 pb-10">
          <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto">
            <div className="grid grid-cols-12 pt-10 gap-7">
             <div className="col-span-9">
              <div className="size-full pt-5 flex flex-col ">
                <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-black2 leading-[67%]">CT 1  |  JEE Main Exam 2024</div>
                <div className="text-lg font-medium tracking-[0.08px] leading-[67%]">00:20:45</div>
                </div>
                <div className="pt-12 flex items-center pb-9 gap-4">
                  <Swiper
              className="size-full"
              spaceBetween={10}
              slidesPerView={2}
              observer={true}
              loop={true}
              modules={[Pagination, Autoplay,]}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                390: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 2.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3.3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((el)=>(
                <SwiperSlide key={el} >
                <ErrorBoundary>
                <button  className="border-primary border leading-[67%] text-sm   font-medium px-12 py-3.5 rounded-md text-black2">PHYSICS</button>
                </ErrorBoundary>
              </SwiperSlide>
              ))}
            </Swiper>
                {/* <button  className="border-brown3 border leading-[67%] ">CHEMISTRY</button>
                <button  className="border-brown3 border leading-[67%] ">MATHEMATICS</button>
                <button  className="border-brown3 border leading-[67%] ">BIOLOGY</button> */}
                  <div className="flex items-center text-sm font-medium">
                  <div className="text-white bg-gray1 border-gray1 border leading-[67%] px-4 py-3.5 rounded-l-xl">ENGLISH</div>
                  <div className=" leading-[67%] rounded-r-xl px-4 py-3.5 border border-gray1" >HINDI</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl px-7 pt-6 ">
                <div className="pb-6 border-b border-gray2 flex items-center justify-between gap-2 ">
                  <div className="text-lg font-semibold tracking-[0.08px] text-black2">
                    Q 102
                  </div>
                  <div className="flex items-center gap-5 ">
                    <div className="text-base text-black2 flex items-center gap-11">
                      <div className="">
                      <div className="font-semibold text-center leading-[70%] pb-2.5">Marks</div>
                      <div className="flex items-center gap-2 font-medium">
                         <div className="border border-gray1 text-center leading-[70%] py-1 px-1.5">
                            +3.0
                         </div>
                         <div className="border border-gray1 text-center leading-[70%] py-1 px-1.5">
                            -0.0
                         </div>
                      </div>
                      </div>
                      <div className="">
                      <div className="font-semibold text-center pb-2.5 leading-[70%]">Time</div>
                      <div className="border border-brown3 bg-brown3 text-center leading-[70%] py-1 px-1.5">
                           17:12
                         </div>
                      </div>
                    </div>
                    <div className="ps-16">
                    <div className="group relative flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-secondary text-white text-sm font-semibold">
                        <div className="">Report</div>
                        <img className="[filter:brightness(9)contrast(1)] " src={dropdownIcon} alt="" />
                         <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100  w-[169px] rounded-md border border-secondary bg-gray4 text-sm font-semibold *:py-2  *:ps-3 *:border-b *:border-gray3 text-black2 absolute top-[34px] right-0 *:transition-all *:duration-300 *:ease-in-out duration-300 transition-all ease-in-out">
                          <li className="hover:bg-white rounded-t-md">Wrong Question</li>
                          <li className="hover:bg-white">Formation Issue</li>
                          <li className="hover:bg-white">Wrong Translation</li>
                          <li className="border-none hover:bg-white rounded-b-md">Others</li>
                         </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {step===1 ? <div className="min-h-[340px] max-h-[340px] pt-6 text-sm font-semibold">
                  <div className=" text-black2 pb-4">Which of the following options is fourth to the right of the twelfth letter from the right in a forward alphabet series?
                  </div>
                  <div className="text-gray1 pb-7">Your Answer (Single Correct) *</div>
                  <div className="text-black2 flex flex-col gap-4">
                  <div className="flex items-center gap-3 ">
                   <input className="accent-secondary" type="radio" name="k" id="k" />
                   <label htmlFor="k">K</label>
                  </div>
                  <div className="flex items-center gap-3 ">
                   <input className="accent-secondary" type="radio" name="k" id="s" />
                   <label htmlFor="s">S</label>
                  </div>
                  <div className="flex items-center gap-3 ">
                   <input className="accent-secondary" type="radio" name="k" id="p" />
                   <label htmlFor="p">P</label>
                  </div>
                  <div className="flex items-center gap-3 ">
                   <input className="accent-secondary" type="radio" name="k" id="o" />
                   <label htmlFor="o">O</label>
                  </div>

                  </div>
                </div>:""}
                {
                  step===2?
                  <div className="testScrollParent">

                    <div className=" max-h-[340px] overflow-hidden overflow-y-auto testScroll mt-6 mb-5 relative">
                    <div className="   flex items-start flex-nowrap gap-7 ">
                    <div className="w-1/2 h-full font-semibold text-sm text-black2">
                      <div className="pb-5 leading19 tracking-[0.14px]">Passage (Questions 191-200)</div>
                      <div className="text-primary pb-5 leading19 tracking-[0.14px] ">
                      Read the following passage carefully and answer the questions given below It. Some words/expressions are given in bold In the passage to help you locate them while answering some of the questions.
                      </div>
                      <div className="pb-5 leading19 tracking-[0.14px]">
                      The e-waste (Management and Handling) Rules, 2011, notified by the Ministry of Environment and Forests, have the potential to turn a growing problem Into a developmental opportunity. With almost half-a-year to go before the rules take effect, there is enough time to create the necessary Infrastructure for collection, dismantling and recycling of electronic waste. The focus must be on sincere and efficient Implementation. Only decisive action can reduce the pollution and health costs associated with India's hazardous waste recycling Industry. If India can achieve a transformation, It will be creating a whole new employment sector that provides good wages and working conditions for tens of thousands.
                      </div>
                      <div className="leading19 tracking-[0.14px]">
                      The legacy response of the states to even the basic law on Urban waste, the Municipal Solld wastes (Management and Handling) Rules, has been one of Indifference, many citles continue to simply burn the garbage or dump It In lakes. With the emphasis now on segregation of waste at source and recovery of materials, It should be feasible to Implement both sets of rules efficiently. A welcome feature of the new e-waste rules is the amnhacle on extended producer responsibility In other
                      </div>
                    </div>
                    <div className="w-1/2 sticky top-0 text-sm font-semibold pt-9">
                    <div className="text-base leading19 tracking-[0.16px] pb-5 text-black2">'Both sets of rules' Is being refered to which of the following?
                    </div>
                    <div className="leading19 tracking-[0.14px] pb-5 text-gray1">Your Answer (Single Correct) *
                    </div>
                    <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5 text-black2">
                      <input className="accent-secondary" type="radio" name="waste" id="solidWaste" />
                      <label className="leading19 tracking-[0.14px]" htmlFor="solidWaste">Solid wastes and Hazardous wastes
                      </label>
                    </div>
                    <div className="flex items-center gap-2.5 text-black2">
                      <input className="accent-secondary" type="radio" name="waste" id="eWaste" />
                      <label className="leading19 tracking-[0.14px]" htmlFor="eWaste">e-waste and Hazardous waste
                      </label>
                    </div>
                    <div className="flex items-center gap-2.5 text-black2">
                      <input className="accent-secondary" type="radio" name="waste" id="bothWaste" />
                      <label className="leading19 tracking-[0.14px]" htmlFor="bothWaste">Solid waste and e-waste
                      </label>
                    </div>
                    <div className="flex items-center gap-2.5 text-black2">
                      <input className="accent-secondary" type="radio" name="waste" id="wasteProduction" />
                      <label className="leading19 tracking-[0.14px]" htmlFor="wasteProduction">e-waste and e-production
                      </label>
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    </div>
                  </div> :""
                }
                </div>
                <div className="mt-16 px-5 py-3 flex items-center justify-between bg-white rounded-xl shadow-lg">
                 <div className="flex items-center gap-4 ">
                 <button className=" w-full px-4 hover:bg-brown3 py-3 rounded-md leading19 border border-gray1  text-sm font-semibold text-nowrap duration-300 transition-all ease-in-out">
                  Mark for review
               </button>
               <button className=" w-full px-4 hover:bg-brown3 py-3 rounded-md leading19 border border-gray1  text-sm font-semibold text-nowrap duration-300 transition-all ease-in-out">
                  Clear response 
               </button>
               <button className=" w-full px-7 hover:bg-brown3 py-3 rounded-md leading19 border border-gray1  text-sm font-semibold text-nowrap duration-300 transition-all ease-in-out">
                  Skip
               </button>
                  </div> 
                  <button className="text-base font-semibold text-white leading19 px-10 py-3 bg-primary rounded-md" onClick={()=>setStep(2)} >
                        Save & Next
                  </button>
                </div>

              </div>
             </div>
             <div className="col-span-3">
              <div className="size-full bg-white shadow-lg rounded-xl p-5 flex flex-col ">
                <div className="grow">
               <div className="flex items-center justify-between text-xs font-medium *:tracking-[0.12px] text-black2">
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-1">      
                   <div className="rounded-t-full bg-yellow1 text-white size-3.5 flex items-center pt-0.5 justify-center"><span className="leading-[67%]"> 0</span></div>
                    <div className="">Answered</div>
                 </div>
                 <div className="flex items-center gap-1">      
                   <div className="  text-black border border-gray4 size-3.5 flex items-center pt-0.5 justify-center"><span className="leading-[67%]"> 0</span></div>
                    <div className="">Not Visited</div>
                 </div>
               </div>
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-1">      
                   <div className="rounded-full bg-secondary text-white size-3.5 flex items-center pt-0.5 justify-center"><span className="leading-[67%]"> 0</span></div>
                    <div className="">Marked</div>
                 </div>
                 <div className="flex items-center gap-1">      
                   <div className="rounded-b-full bg-primary text-white size-3.5 flex items-center pt-0.5 justify-center"><span className="leading-[67%]"> 0</span></div>
                    <div className="">Not Answered</div>
                 </div>
               </div>
               </div>
               <div className="pt-4 gap-2 flex items-center text-xs font-medium text-black2">
                <img src={question0Icon} alt="" />
                <div className="">Marked and Answered</div>
               </div>
               <div className="pt-9 flex items-center text-xs font-semibold  justify-between gap-2">
              <button className="bg-brown2 text-black2 rounded-md ps-3.5 py-3 pe-16 leading-[67%]">PHYSICS</button>
              <button className="bg-primary text-white rounded-md px-3.5 py-3 leading-[67%]">
                Submit
              </button>
               </div>
               <div className="pt-6 grid grid-cols-6 gap-4 text-sm font-semibold 
                    [&_.answered]:bg-yellow1  [&_.answered]:border-yellow1 [&_.answered]:!text-white [&_.answered]:rounded-t-full [&_.notVisited]:text-black2 [&_.notVisited]:border-brown2 [&_.marked]:border-secondary [&_.marked]:bg-secondary [&_.marked]:rounded-full [&_.marked]:text-white [&_.notAnswered]:bg-primary [&_.notAnswered]:border-yellow1 [&_.notAnswered]:rounded-b-full [&_.notAnswered]:text-white">
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="answered flex items-center border justify-center px-1 py-[7px]  ">
                      <div className=" leading-[63%]">1</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">2</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="marked flex items-center justify-center px-1 py-[7px]  border  ">
                      <div className=" leading-[63%]">3</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">4</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">5</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">6</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">7</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">8</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">9</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notAnswered flex items-center justify-center px-1 py-[7px]  border   ">
                      <div className=" leading-[63%]">10</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">11</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">12</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">13</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">14</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">15</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">16</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">17</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">18</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">19</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">20</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">21</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">22</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">23</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">24</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">25</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">26</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">27</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">28</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">29</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">30</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">31</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">32</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">33</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">34</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">35</div>
                    </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="size-full ">
                    <div className="notVisited flex items-center justify-center px-1 py-[7px] border  ">
                      <div className=" leading-[63%]">36</div>
                    </div>
                    </div>
                  </div>
               </div>

                </div>
                <div className="">
               <div className=" flex items-center gap-2 justify-between">
                 <button className="border border-gray1 hover:bg-brown3 rounded-md text-sm font-semibold text-black2 py-3.5 px-4 leading-[67%] duration-300 transition-all ease-in-out">
                  Summary
                 </button>
                 <button className="border border-gray1 hover:bg-gray4 rounded-md text-sm font-semibold text-black2 py-3.5 px-2.5 leading-[67%] duration-300 transition-all ease-in-out">
                  Instructions
                 </button>
               </div>
               <button className="mt-4 w-full bg-primary py-3 rounded-md leading-[67%] text-white text-base font-semibold">
                  Save & Submit
               </button>
                </div>
              </div>
             </div>
            </div>
            </div>
        </div>
    </AppLayout>
  )
}

export default TestQuestion