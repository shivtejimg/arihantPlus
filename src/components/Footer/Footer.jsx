import React from "react";
import arihant_logo_white from "../../assets/img/arihant_logo_white.png";
import arrow from "../../assets/img/Arrow_4.png";
import app_store from "../../assets/img/app_store.png";
import google_play from "../../assets/img/google_play.png";

const Footer = () => {
  const hoverStyle =
    "hover:text-base hover:font-semibold transition-all duration-300 ease-in-out cursor-pointer";
  const hoverStyle2 =
    "hover:text-lg transition-all duration-300 ease-in-out cursor-pointer";
  return (
    <div className="mt-4">
      <div className="bg-[#AB4D03] w-full">
        <div className="flex flex-wrap md:flex-nowrap max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  mx-auto">
          {/* Left Section */}
          <div className="w-full md:w-1/3 py-7 bg-[#AB3E03] text-white shadow-[-200px_0px_0px_#AB3E03] order-1 max-sm:order-2 px-4 sm:px-6">
            <div className="w-44">
              <img className="size-full" src={arihant_logo_white} alt="Logo" />
            </div>
            <div className="mt-4">
              A fresh approach to learning embracing the unconventional.
            </div>
            <div className="mt-4 text-sm 2xl:text-lg flex flex-col gap-2">
              <div>
                <h1 className="text-xl 2xl:text-2xl font-semibold">Stay Connected</h1>
              </div>
              <div>
                <p>info@arihantplus.com</p>
                <p>Call +91-90000 00000</p>
                <p>(Mon to Sat, 9 AM to 6 PM)</p>
              </div>
            </div>
            <div className="mt-4 text-sm 2xl:text-lg flex flex-col gap-2">
              <div>
                <h1 className="text-xl 2xl:text-2xl font-semibold">Stay Updated</h1>
              </div>
              <p>
                Stay updated with the latest news and notifications with Arihant
                Plus’s channel. Don’t miss out on important updates!
              </p>
              <div className="flex relative justify-end">
                <button className="h-full absolute px-2 bg-orange-500 text-white rounded-e-xl">
                  <img className="size-10 object-contain" src={arrow} alt="" />
                </button>
                <input
                  type="email"
                  placeholder="Sign up for our news & Notifications"
                  className="p-2 rounded-xl w-full bg-[#D9D9D9] text-black"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div>Download Arihant Plus App</div>
                <div className="flex gap-4">
                  <button className="w-28">
                    <img
                      className="size-full"
                      src={google_play}
                      alt="Get it on Google Play"
                    />
                  </button>
                  <button className="w-28">
                    <img
                      className="size-full"
                      src={app_store}
                      alt="Download on the App Store"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 bg-[#AB4D03] px-4 sm:px-6 order-2 max-sm:order-1 py-7">
            <div className="flex flex-col gap-5">
              {/* Top Categories and Books & Resources */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-col gap-2">
                  <h2 className="text-white font-semibold text-base 2xl:text-xl">
                    Top Categories
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <ul className="text-white flex flex-col gap-2 text-sm 2xl:text-lg">
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          JEE & Other Eng. Exams
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>NEET</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>CUET</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          Management & Other Exams
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          CLAT & Law Admissions
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          NDA, CDS & Asst Commandant
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>IAS & State PCS</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>Banking & Insurance</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>SSC Exams</span>
                      </li>
                    </ul>
                    <ul className="text-white flex flex-col gap-2 text-sm 2xl:text-lg">
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          JEE & Other Eng. Exams
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>NEET</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>CUET</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          Management & Other Exams
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          CLAT & Law Admissions
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>
                          NDA, CDS & Asst Commandant
                        </span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>IAS & State PCS</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>Banking & Insurance</span>
                      </li>
                      <li className="min-h-[24px]">
                        <span className={hoverStyle}>SSC Exams</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white font-semibold text-base 2xl:text-xl">
                    Books & Resources
                  </h2>
                  <ul className="text-white flex flex-col gap-2 text-sm 2xl:text-lg">
                    <li className="min-h-[24px]">
                      <span className={hoverStyle}>Books</span>
                    </li>
                    <li className="min-h-[24px]">
                      <span className={hoverStyle}>Test Series</span>
                    </li>

                    <li className="min-h-[24px]">
                      <span className={hoverStyle}>Videos</span>
                    </li>

                    <li className="min-h-[24px]">
                      <span className={hoverStyle}>Doubt Solver</span>
                    </li>
                    <li>
                      <span className={hoverStyle}>Exam Updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Company Info and Other Links */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-3">
                  <h2 className="text-white font-bold min-h-[28px]">
                    <span className={hoverStyle2}>Rewards</span>
                  </h2>
                  <h2 className="text-white font-bold min-h-[28px]">
                    <span className={hoverStyle2}>Spin & Win</span>
                  </h2>
                  <h2 className="text-white font-bold min-h-[28px]">
                    <span className={hoverStyle2}>Quizzes</span>
                  </h2>
                  <h2 className="text-white font-bold min-h-[28px]">
                    <span className={hoverStyle2}>Jackpot</span>
                  </h2>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-3">
                  <h1 className="text-white font-bold">Company</h1>
                  <div className="text-white flex flex-wrap gap-4 text-sm 2xl:text-lg">
                    <p className={hoverStyle}>About us</p>
                    <p>/</p>
                    <p className={hoverStyle}>Careers</p>
                    <p>/</p>
                    <p className={hoverStyle}>Blogs</p>
                    <p>/</p>
                    <p className={hoverStyle}>Privacy Policy</p>
                    <p>/</p>
                    <p className={hoverStyle}>FAQs</p>
                    <p className={hoverStyle}>Terms and Conditions</p>
                    <p>/</p>
                    <p className={hoverStyle}>Help & Support</p>
                    <p>/</p>
                    <p className={hoverStyle}>Refund Policy</p>
                    <p>/</p>
                    <p className={hoverStyle}>Grievance Redressal</p>
                    <p>/</p>
                    <p className={hoverStyle}>Site Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-4 sm:px-6  mx-auto">
        <div className="sm:flex justify-between items-center *:max-sm:text-center py-3">
          <div className="text-sm 2xl:text-xl text-black font-medium">
          2019-2024. Arihant Publications India Limited
          </div>
          <div className="text-sm 2xl:text-xl text-black font-medium"> 
          Technology Partners Cleartest
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
