import AppLayout from "../../components/AppLayout/AppLayout";
import correctIcon from "../../assets/img/correctIcon.svg";
import watch from "../../assets/img/watch.png";
import langEnLIcon from "../../assets/img/langEnLIcon.svg";
import generalIcon5 from "../../assets/img/generalIcon5.svg";
import generalIcon4 from "../../assets/img/generalIcon4.svg";
import generalIcon3 from "../../assets/img/generalIcon3.svg";
import generalIcon2 from "../../assets/img/generalIcon2.svg";
import generalIcon from "../../assets/img/generalIcon.svg";
import generalUser from "../../assets/img/generalUser.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";

const GeneralInstructions = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="pt-20 font-Isidora_Sans bg-white2 pb-10">
        <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto pt-8">
          <div className="text-xs font-medium">
            Home / Jee & Other Eng Entraces / Online Test Series
          </div>
          <div className="text-3xl font-semibold pt-16">
            CT1 | JEE Main Exam 2024
          </div>
          <div className="flex items-center gap-7 pt-7">
            <div className="shadow-lg p-5 rounded-lg flex items-center gap-6 bg-white">
              <div className="*:w-6">
                <img src={correctIcon} alt="" />
              </div>
              <div className="text-base ">
                <div className="leading19 font-semibold">Minimun</div>
                <div className="leading19">200 Marks</div>
              </div>
            </div>
            <div className="shadow-lg p-5 rounded-lg flex items-center gap-6 bg-white">
              <div className="*:w-6">
                <img src={watch} alt="" />
              </div>
              <div className="text-base ">
                <div className="leading19 font-semibold">Duration</div>
                <div className="leading19">60 Mins</div>
              </div>
            </div>
            <div className="shadow-lg p-5 rounded-lg flex items-center gap-6 bg-white">
              <div className="*:w-6">
                <img src={langEnLIcon} alt="" />
              </div>
              <div className="text-base ">
                <div className="leading19 font-semibold text-primary">
                  English
                </div>
                <div className="leading19">Hindi</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 mt-8 gap-7">
            {step === 1 ? (
              <div className="col-span-9 ">
                <div className="size-full pt-[60px] p-7 bg-white rounded-lg">
                  <div className="text-primary text-3xl font-semibold !leading-[63%] pb-6">
                    General Instructions
                  </div>
                  <div className="text-sm font-semibold tracking-[0.14px]">
                    <div className=" ">
                      1. The clock has been set at the server and the countdown
                      timer at the top right corner of your screen will display
                      the time remaining for you to complete the exam. When the
                      clock runs out the exam ends by default you are not
                      required to end or submit your exam.
                    </div>
                    <div className="pt-4">
                      2. The question palette at the right of screen shows one
                      of the following statuses of each of the questions
                      numbered:
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="*:w-[17px]">
                          <img src={generalIcon} alt="" />
                        </div>
                        <div className="">
                          You have not visited the question yet.{" "}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="*:w-[17px]">
                          <img src={generalIcon2} alt="" />
                        </div>
                        <div className="">
                          You have NOT answered the question.{" "}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="*:w-[17px]">
                          <img src={generalIcon3} alt="" />
                        </div>
                        <div className="">You have answered the question. </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="*:w-[17px]">
                          <img src={generalIcon4} alt="" />
                        </div>
                        <div className="">
                          You have NOT answered the question but have marked the
                          question for review.{" "}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="*:w-[17px]">
                          <img src={generalIcon5} alt="" />
                        </div>
                        <div className="">
                          You have answered the question and marked it for
                          review{" "}
                        </div>
                      </div>
                    </div>
                    <div className="">
                      The Marked for Review status simply acts as a reminder
                      that you have set to look at the question again. If an
                      answer is selected for a question that is Marked for
                      Review, the answer will be considered in the final
                      evaluation.
                    </div>
                    <div className="py-6">
                      <div className="font-bold text-primary pb-4 leading-[67%]">
                        Navigation to a question
                      </div>
                      <div className="leading-[67%] pb-4">
                        3. To select a question to answer, you can do one of the
                        following:
                      </div>
                      <div className="">
                        • Click on the question number on the question palette
                        at the right of your screen to go to that numbered
                        question directly. Note that using this option does NOT
                        save your answer to the current question. • Click on
                        Save and Next to save answer to current question and to
                        go to the next question in sequence. • Click on mark for
                        Review to save answer to correct question, mark if for
                        review, and go to the next question in Sequence.
                      </div>
                      <div className="pt-4 leading-[67%]">
                        4. You can view the entire paper by clicking on the
                        Summary button.
                      </div>
                    </div>
                    <div className="pb-6">
                      <div className="font-bold text-primary pb-4 leading-[67%]">
                        Answering Questions
                      </div>
                      <div className="leading-[67%] pb-4">
                        5. For multiple choice type question:
                      </div>
                      <div className="">
                        To select your answer, click on one of the option
                        buttons To change your answer, click another desired
                        option button To save your answer, You MUST click on
                        Save & Next To deselect a chosen answer, click on the
                        chosen option again or click on the Clear Response
                        button. To mark a question for review, click on Mark for
                        Review. If an answer is selected for a question that is
                        Marked for Review, the answer will be considered in the
                        final evaluation. 6. To change an answer to a question,
                        first select the question and then click on the new
                        answer option followed by a click on the Save & Next
                        button.
                      </div>
                      <div className="pt-4 ">
                        7. Questions that are saved or marked for review after
                        answering will ONLY be considered for evaluation.
                      </div>
                    </div>
                    <div className="pb-10">
                      <div className="text-primary font-bold leading-[67%] pb-4">
                        Navigating through sections
                      </div>
                      <div className="pb-4">
                        8. Sections in this question paper are displayed on the
                        top bar of the screen. Questions in a section can be
                        viewed by clicking on the section name. The section you
                        are currently viewing is highlighted.
                      </div>
                      <div className="pb-4">
                        9. After clicking the Save & Next button on the last
                        question for a section. You will automatically be taken
                        to the first question of the next section.
                      </div>
                      <div className="pb-4">
                        10. You can move the mouse cursor over the section names
                        to view the status of the questions for that section.
                      </div>
                      <div className="">
                        11. You can shuffle between sections and questions
                        anytime during the examination as per your convenience.
                      </div>
                    </div>
                  </div>
                  <div className="bg-brown3 rounded-md py-4 px-7 text-base font-semibold leading-[67%]">
                    <button
                      className="py-3 px-[53px] bg-white border border-gray1 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ease-in-out"
                      onClick={() => setStep(2)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {step === 2 ? (
              <div className="col-span-9 ">
                <div className="size-full pt-[60px] p-7 bg-white rounded-lg text-sm font-semibold">
                  <div className="pb-5">
                    <div className="text-primary leading-[67%] pb-4">
                      Please read the following instructions carefully
                    </div>
                    <div className="">
                      • The test contains 100 total Questions
                    </div>
                    <div className="">
                      • Each question has 4 options out of which only one is
                      correct.
                    </div>
                    <div className="">
                      • You have to finish the test in 90 minutes.
                    </div>
                    <div className="">
                      • You will be awarded 1 mark for each correct answer and
                      there will be negative marking of 0.33 mark.
                    </div>
                    <div className="">
                      • There is no penalty for the questions that you have not
                      attempted.
                    </div>
                    <div className="">
                      • Once you start the test, you will not be allowed to
                      reattempt it. Make sure that you complete the test before
                      you submit the test and/or close the browser.
                    </div>
                  </div>
                  <div className="pb-8">
                    Please note all questions will appear in your default
                    language. This language can be changed later on.
                  </div>
                  <div className="flex items-center gap-3 pb-5">
                    <div className="text-primary">
                      Choose your default language:
                    </div>
                    <div className="select-container after:absolute after:bg-[url('../src/assets/img/dropdownIcon.svg')] after:w-3.5 after:h-2.5 after:bg-contain after:bg-no-repeat after:z-20 after:right-2 after:top-[40%] after:pointer-events-none">
                      <select
                        name=""
                        id="slect"
                        className="bg-brown4 py-2.5 ps-3 pe-10 !text-sm rounded-lg z-10 text-primary2 font-medium focus-visible:outline-none relative "
                      >
                        <option value="">Select</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                    </div>
                  </div>
                  <div className="pb-9">
                    <div className="text-primary">Declaration:</div>
                    <div className="flex items-start gap-3.5 pt-4">
                      <input
                        type="checkbox"
                        name=""
                        id="declaration"
                        className="accent-gray1"
                      />
                      <label htmlFor="declaration">
                        I have read all the instructions carefully and have
                        understood them. I agree not to cheat or use unfair
                        means in this examination. I understand that using
                        unfair means of any sort for my own or someone elsee&apos;s
                        advantage will lead to my immediate disqualification.
                        The decision of ExamWithArihant.com will be final in
                        these matters and cannot be appealed.
                      </label>
                    </div>
                  </div>
                  <div className="bg-brown3 rounded-md py-4 px-7 text-base font-semibold leading-[67%] flex items-center justify-between">
                    <button
                      className="py-3 px-[43px] bg-brown3 border border-gray1 rounded-full leading-[67%]"
                      onClick={() => setStep(1)}
                    >
                      Previous
                    </button>
                    <button
                      className="py-3 px-[43px] bg-white border border-gray1 hover:bg-primary hover:border-primary hover:text-white duration-300 transition-all ease-in-out rounded-full leading-[67%]"
                      onClick={() => navigate(PAGE_ROUTES.TEST_QUESTION)}
                    >
                      Begin
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="col-span-3">
              <div className="size-full">
                <div className="w-full rounded-lg bg-white shadow-lg px-6 pt-7 pb-14">
                  <div className="*:w-[53px]">
                    <img src={generalUser} alt="" />
                  </div>
                  <div className="font-semibold text-lg py-4 leading-[67%]">
                    Anish Kr.
                  </div>
                  <div className="text-sm font-semibold">
                    <div className="">20 April 2005</div>
                    <div className="">Subject : P/C/M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GeneralInstructions;
