import logo from "../../assets/img/arihantPlus-logo_1.png";
import search from "../../assets/img/magnifier.png";
import user from "../../assets/img/union.svg";
import notificationIcon from "../../assets/img/notificationIcon.svg";
import trollyIcon from "../../assets/img/trollyIcon.svg";
import navbtn from "../../assets/img/navbtn.png";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_ROUTES, PAGE_ROUTES } from "../../constants/RouteConstants";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <header className="bg-white fixed z-[99] w-full shadow-md">
        <div className="max-w-6xl px-4 mx-auto pt-6 pb-2.5 lg:py-[18px] flex items-center justify-between">
          <div className="flex items-center lg:gap-4  w-full">
            <div className="flex items-center gap-5 w-full">
              <div className="flex items-center justify-between gap-3  w-full">
                <Link
                  className=" w-36 md:w-48 lg:w-40 h-auto inline-block *:size-full"
                  to={PAGE_ROUTES.HOME}
                >
                  <img src={logo} alt="logo" />
                </Link>
                <div className="w-[189px] lg:w-40  xl:w-[200px] hidden lg:flex items-center justify-between relative ring-1 px-3 ring-gray3 hover:ring-slate-300 rounded-xl py-[7px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full placeholder:text-xs placeholder:font-medium placeholder:text-gray2 focus-visible:outline-none !leading-[1rem]"
                  />
                  <div className=" *:size-3.5 :object-cover   ">
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block lg:hidden border-gray1 border pe-20 px-3 py-1.5 rounded-full relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="ps-4 placeholder:text-sm placeholder:font-medium focus-visible:outline-none"
                />
                <div className=" *:size-3.5 :object-cover  absolute top-2.5 left-3.5">
                  <img src={search} alt="" />
                </div>
              </div>
              <ul className="lg:flex items-center gap-3 xl:gap-6 hidden w-full  ">
                <Link className="text-sm  text-black font-semibold text-nowrap">
                  <li>Books</li>
                </Link>
                <Link className="text-sm  text-black font-semibold text-nowrap">
                  <li>Test Series</li>
                </Link>
                <Link className="text-sm  text-black font-semibold text-nowrap">
                  <li>Videos</li>
                </Link>
                <Link className="text-sm  text-black font-semibold text-nowrap">
                  <li>Book/Coupon Code</li>
                </Link>
                <Link className="text-sm  text-black font-semibold text-nowrap">
                  <li>Doubt Solver</li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-3.5 items-center cursor-pointer flex-nowrap">
              {/* {!isLoggenIn ? (
                <button
                  className="bg-primary text-nowrap rounded-full text-sm  font-semibold text-white hidden lg:flex "
                  onClick={() => setIsLoggenIn(true)}
                >
                  Login/Register
                </button>
              ) : (
                ""
              )} */}
              <button className="p-2.5 text-nowrap bg-primary text-white text-sm font-semibold rounded-full hidden lg:flex leading-4">
                Login/Register
              </button>
              {isLoggenIn ? (
                <div className="text-primary font-semibold text-sm hidden lg:flex text-nowrap ">
                  Nitin Kumar
                </div>
              ) : (
                ""
              )}
              {isLoggenIn ? (
                <div className="*:md:size-[26px] min-w-[26px] :size-[26px] :2xl:size-[40px] hidden lg:flex">
                  <img src={user} alt="" />
                </div>
              ) : (
                ""
              )}
              {!isLoggenIn ? (
                <div className="*:md:size-[30px] min-w-[30px] :size-[30px] :2xl:size-[40px] hidden lg:flex">
                  <img src={user} alt="" />
                </div>
              ) : (
                ""
              )}
              {isLoggenIn ? (
                <div className="*:md:size-[26px] min-w-[26px] :size-[26px] :2xl:size-[40px] hidden lg:flex">
                  <img src={notificationIcon} alt="" />
                </div>
              ) : (
                ""
              )}
              {isLoggenIn ? (
                <div className="*:md:size-[26px] min-w-[26px] :size-[26px] :2xl:size-[40px] hidden lg:flex">
                  <img src={trollyIcon} alt="" />
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              onClick={() => setShowSideBar(true)}
              className={` sm:hidden *:min-w-8 *:size-8 ${showSideBar ? "hidden" : ""
                }`}
            >
              <img src={navbtn} alt="" />
            </button>
          </div>
        </div>
        <div>
          {/* Tab view */}
          <div className="max-w-6xl mx-auto   px-4 lg:px-8 flex items-center justify-between pb-4 lg:hidden gap-2 min-[700px]:gap-14">
            <ul className=" lg:hidden items-center gap-3 min-[700px]:gap-7  hidden sm:flex w-full  xl:tracking-[0.6px]">
              <Link className="text-xs md:text-sm tracking-[0.48px] md:tracking-normal max-[700px]:tracking-tight  text-black font-semibold text-nowrap !leading-[63%] pt-0.5">
                <li>Books</li>
              </Link>
              <Link className=" text-xs md:text-sm tracking-[0.48px] md:tracking-normal max-[700px]:tracking-tight  text-black font-semibold text-nowrap !leading-[63%] pt-0.5">
                <li>Test Series</li>
              </Link>
              <Link className=" text-xs md:text-sm tracking-[0.48px] md:tracking-normal max-[700px]:tracking-tight  text-black font-semibold text-nowrap !leading-[63%] pt-0.5">
                <li>Videos</li>
              </Link>
              <Link className=" text-xs md:text-sm tracking-[0.48px] md:tracking-normal max-[700px]:tracking-tight  text-black font-semibold text-nowrap !leading-[63%] pt-0.5">
                <li>Book/Coupon Code</li>
              </Link>
              <Link className=" text-xs md:text-sm tracking-[0.48px] md:tracking-normal max-[700px]:tracking-tight  text-black font-semibold text-nowrap !leading-[63%] pt-0.5">
                <li>Doubt Solver</li>
              </Link>
            </ul>
            <div className="hidden sm:flex items-center gap-3 lg:hidden">
              {/* <button className="w-full py-3 px-9 font-semibold text-white text-xs  rounded-3xl bg-primary !leading-[63%]"
                onClick={() => navigate(AUTH_ROUTES.GET_OTP)}
              >
                Login/Register
              </button> */}
              <button
                className="flex items-center justify-center font-semibold text-white text-xs pt-0.5 rounded-3xl bg-primary !leading-[63%] h-[1.88rem] w-[7.4rem]"
                onClick={() => navigate(AUTH_ROUTES.GET_OTP)}
              >
                Login/Register
              </button>
              <div className="*:md:size-[30px] min-w-[30px] :size-[30px] :2xl:size-[40px]  max-[700px]:ms-1  lg:flex">
                <img src={user} alt="" />
              </div>
            </div>
            <div className="sm:hidden w-full border-gray1 border  px-8 py-1.5 rounded-full relative">
              <input
                type="text"
                placeholder="Search"
                className="ps-4 placeholder:text-sm placeholder:font-medium focus-visible:outline-none"
              />
              <div className=" *:size-3.5 :object-cover  absolute top-2.5 left-3.5">
                <img src={search} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}>
        <section className="w-full  py-2 h-full">
          {/* <section className=" sm:w-2/3  w-full py-20 absolute h-dvh bg-white right-0 top-0 overflow-y-auto translate-x-full duration-300 "> */}
          <div className="mx-auto w-full p-5 bg-white overflow-hidden overflow-y-auto h-full pb-4  rounded-bl-[40px]">
            <div className=" w-full pb-7 border-b-[2px] border-r-slate-900">
              <button
                className="w-full py-2 font-medium text-white rounded-3xl bg-primary "
                onClick={() => navigate(AUTH_ROUTES.GET_OTP)}
              >
                Login/Register
              </button>
            </div>
            <div className="py-4">
              <ul className="flex flex-col items-center justify-center gap-10">
                <li>
                  <a href="#" className="font-semibold text-xl text-slate-700">
                    Books
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-xl text-slate-700">
                    Test Series
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-xl text-slate-700">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-xl text-slate-700">
                    Book/Coupon Code{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-xl text-slate-700">
                    Doubt Solver
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute -top-24 right-4 ">
              <button
                className="flex items-center justify-center size-7 z-50 *:size-[20px] bg-secondary text-white rounded-full"
                onClick={() => setShowSideBar(false)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </SideBar>
      {showSideBar ? (
        ""
      ) : (
        ""
      )}
      {/* Mobile view */}
    </ErrorBoundary>
  );
};
export default Header;


{/* <div className="absolute"> */ }
//   <button
//     // className="flex items-center justify-center size-8 z-50 *:size-[20px] bg-secondary text-white rounded-full"
//     className={`fixed top-[11px] right-0 z-50 h-screen p-4  transition-transform ${
//       showSideBar ? "transform-none" : "translate-x-full"
//     } bg-white w-[85%] sm:w-1/2 rounded-bl-3xl`}
//     onClick={() => setShowSideBar(false)}
//   >
//     <svg
//       stroke="currentColor"
//       fill="currentColor"
//       strokeWidth="0"
//       viewBox="0 0 512 512"
//       height="100%"
//       width="100%"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
//     </svg>
//   </button>
// </div>