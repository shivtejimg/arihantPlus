import star from "../../assets/img/bg.png";
import user from "../../assets/img/user.svg";
import toDoArrow from "../../assets/img/toDoArrow.svg";
import cartIcon from "../../assets/img/add_to_cart.png";
import bag from "../../assets/img/buy_now.png";

const TestSeriesCard = ({ setIsTestDetails }) => {
  return (
    <div
      className="w-full   group relative rounded-lg"
      onClick={() => setIsTestDetails(true)}
    >
      <div className="bg-amber flex justify-between rounded-t-lg pt-2 sm:pt-2.5 ps-2.5 sm:ps-[19px] pe-2.5">
        <div className=" bg-white rounded-full size-11 md:size-[52px] lg:size-[76px] flex items-center justify-center -mb-2 sm:-mb-2.5 lg:-mb-4 shadow-lg ">
          <img className="w-5 md:w-6 lg:w-9" src={user} alt="" />
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-primary rounded-full text-white text-[11px] sm:text-sm font-medium size-4 sm:size-7 sm:leading-[120%] flex items-center justify-center ">
            E
          </div>
          <div className="bg-primary rounded-full text-white text-[11px] sm:text-sm font-medium size-4 sm:size-7 sm;leading-[120%] flex items-center justify-center ">
            H
          </div>
        </div>
      </div>
      <div className="  border border-t-0 bg-white border-gray3 rounded-b-lg ">
        <div className="ps-2.5 sm:ps-5 pe-2.5 sm:pe-4 pt-5 sm:pt-7 lg:pt-8">
          <div className="text-[10px] md:text-xs lg:text-sm font-medium !leading-[63%]">
            Pathfinder
          </div>
          <div className="pt-2 sm:pt-2.5 pb-2 text-base md:text-lg lg:text-[22px] font-bold tracking-[0.22px] !leading-[63%]">
            UP Constable
          </div>
          <div className="text-[10px] md:text-xs lg:text-sm font-medium !leading-[63%]">
            Exam 2024
          </div>
          <div className="pt-3 sm:pt-4 flex items-center">
            <div className="px-3 sm:px-5 py-1.5 sm:py-2 bg-black text-white text-[11px] md:text-xs lg:text-sm font-bold rounded-l-full !leading-[63%]">
              35
            </div>
            <div className="p-1.5 sm:px-3 sm:py-2 bg-gray4  text-[11px] md:text-xs lg:text-sm font-medium rounded-r-full !leading-[63%]">
              Total Test
            </div>
          </div>
          <div className="pt-2 sm:pt-5 pb-2 sm:pb-3 flex items-center justify-between gap-1 sm:gap-2">
            <div className="text-[11px] sm:text-xs md:text-sm text-nowrap lg:text-base font-medium text-primary2/70 !leading-[63%]">
              Attempt a test for free
            </div>
            <div className="max-md:bg-gray2 md:hover:bg-gray2 p-0.5 sm:p-1 md:p-2 rounded-full transition-all duration-300 ease-in-out *:size-2 sm:*:size-2 *:md:size-3">
              <img
                className="max-md:[filter:brightness(8)contrast(1)] md:hover:[filter:brightness(8)contrast(1)] transition-all ease-in-out duration-300"
                src={toDoArrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" border-t border-gray3 pt-2 sm:pt-3 pb-3 sm:pb-4 ps-2.5 sm:ps-5 pe-2.5 sm:pe-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4  text-sm lg:text-base">
            <div className="line-through font-medium  !leading-[63%]">
              Rs.265
            </div>
            <div className="text-primary font-bold !leading-[63%]">Rs.212</div>
          </div>
          <div className="font-medium text-[9px] md:text-sm text-gray1 !leading-[63%]">
            45% off
          </div>
        </div>
        <div className="md:hidden group-hover:block duration-500 ease-in-out transition-all">
          <div className="flex items-center gap-1 md:gap-2 ps-2.5 sm:ps-5 pe-2 sm:pe-4 pb-2.5 sm:pb-[18px] ">
            <button className="group/cart md:hover:text-white md:hover:bg-black md:hover:rounded-sm max-md:rounded-[4px] flex border border-gray3 px-0.5 sm:px-1.5  items-center justify-center w-full gap-0.5 sm:gap-1  text-[9px] md:text-xs lg:text-sm font-semibold max-md:py-2 py-1 duration-300 transition-all ease-in-out text-primary2 !leading-[63%]">
              <img
                className="size-2 md:size-2.5 lg:h-[13px] lg:w-[14px] md:group-hover/cart:[filter:brightness(9)contrast(1)] duration-300 transition-all ease-in-out "
                src={cartIcon}
                alt=""
              />
              <div className="text-nowrap">Add to cart</div>
            </button>
            <button className="group/cart max-md:bg-black max-md:text-white md:hover:text-white md:hover:bg-black md:hover:rounded-sm max-md:rounded-[4px] flex border border-gray3 px-0.5 sm:px-1.5  items-center justify-center w-full gap-0.5 sm:gap-1  text-[9px] md:text-xs lg:text-sm font-semibold max-md:py-2 py-1 duration-300 transition-all ease-in-out text-primary2 !leading-[63%]">
              <img
                className="size-2 md:size-2.5 lg:h-[14px] lg:w-[14px] max-md:[filter:brightness(9)contrast(1)] md:group-hover/cart:[filter:brightness(9)contrast(1)] duration-300 transition-all ease-in-out"
                src={bag}
                alt=""
              />
              <div className="text-nowrap">Buy Now</div>
            </button>
          </div>
        </div>
      </div>

      {/*       
      <div className="h-14  flex justify-end p-2 bg-amber relative rounded-t-lg">
        <div className="absolute inset-0 w-1/2 object-contain">
          <img src={star} alt="" />
        </div>
        <div className="absolute left-2 top-5 sm:top-4 size-12 sm:size-16 ">
          <img src={user} alt="" />
        </div>
        <a className="bg-primary rounded-b-full text-white rounded-full size-4 sm:size-7  sm:font-medium flex items-center justify-center  text-xs sm:text-base 2xl:text-lg ">
          E
        </a>
        <a className="bg-primary ms-1 text-white rounded-full size-4 sm:size-7  sm:font-medium flex items-center justify-center  text-xs sm:text-base 2xl:text-lg">
          H
        </a>
      </div>
      <div className=" pt-6 sm:pb-2 text-black font-medium">
       <div className="px-2">
       <p className="text-[9px] sm:text-sm 2xl:text-lg">Pathfinder</p>
        <div className="text-sm sm:text-xl 2xl:text-2xl font-bold">UP Constable</div>
        <div className="">
          <span className="text-[11px] sm:text-sm 2xl:text-lg font-bold leading-4 text-black pe-1">Grade C & D</span>
          <span className="text-[10px] sm:text-sm 2xl:text-base font-medium text-gray2">Exam 2024</span>
        </div>
        <div className="flex items-center md:w-1/2 w-2/3 rounded-full overflow-hidden mt-2">
          <div className="bg-black text-white sm:w-1/3 py-[1px] px-2 2xl:py-[3px] text-center text-[10px] sm:text-sm font-medium 2xl:text-base">
            123
          </div>
          <div className="bg-gray4 w-2/3 sm:px-2 text-nowrap text-[10px] 2xl:py-[3px] sm:text-sm 2xl:text-base py-[1px] text-center">
            total test
          </div>
        </div>
        <div className="flex justify-between mt-3 sm:mt-6 ">
          <p className="text-[10px] sm:text-base 2xl:text-lg sm:font-medium text-gray2">
            Attempt a test for free
          </p>
          <div className="max-sm:size-4 2xl:size-6 *:size-full">
            <img src={diagonalArrowIcon} alt="" />
          </div>
        </div>
       </div>
        <div className="flex !w-full items-center justify-between border-t border-[#EEEAEC] mt-2 p-2"  >
        <div className="text-black  font-medium text-base 2xl:text-2xl">
          <span className="line-through max-sm:text-xs">Rs 265</span>
          <span className="text-primary max-sm:text-xs max-sm:font-bold font-semibold ms-2">Rs 212</span>
        </div>
        <div className="max-sm:text-[10px] text-base 2xl:text-2xl text-gray2 font-semibold">45%off</div>
        </div>
      </div>
      <div className="sm:hidden group-hover:block duration-300 ease-in-out transition-all">
        <div className="flex items-center gap-1 md:gap-2 p-2 pb-4 ">
          <button className="group/cart sm:hover:text-white sm:hover:bg-black sm:hover:rounded-sm max-sm:rounded-[4px] flex border border-b-black border-gray3 px-0.5 sm:px-1.5 md:px-2 items-center justify-center w-full gap-0.5 sm:gap-1 md:gap-1.5 text-[9px] sm:text-[11px] lg:text-sm font-normal py-1.5 sm:py-1 duration-300 transition-all ease-in-out">
          <img className="size-2 sm:size-3 sm:group-hover/cart:[filter:brightness(9)contrast(1)] duration-300 transition-all ease-in-out" src={cartIcon} alt="" />
          <div className="text-nowrap">Add to cart</div>
          </button>
          <button className="group/cart max-sm:bg-black max-sm:text-white sm:hover:text-white sm:hover:bg-black sm:hover:rounded-sm max-sm:rounded-[4px] flex border border-b-black border-gray3 px-0.5 sm:px-1.5 md:px-2 items-center justify-center w-full gap-0.5 sm:gap-1 md:gap-1.5 text-[9px] sm:text-[11px] lg:text-sm font-normal py-1.5 sm:py-1 duration-300 transition-all ease-in-out">
          <img className="size-2 sm:size-3 max-sm:[filter:brightness(9)contrast(1)] sm:group-hover/cart:[filter:brightness(9)contrast(1)] duration-300 transition-all ease-in-out" src={bag} alt="" />
          <div className="text-nowrap">Buy Now</div>
          </button>
        </div>
      </div> */}
      {/* <div className="invisible group-hover:visible sm:absolute sm:opacity-0 sm:group-hover:opacity-100 group-hover:relative transition-all duration-500 ease-in-out">
        <div className="flex !w-full px-2 py-2 sm:py-3 md:py-1   justify-around md:gap-2" >
        <button className="border w-full flex items-center 2xl:text-xl gap-1 px-1  py-1.5 md:text-xs group/btn max-sm:bg-black max-sm:text-white max-sm:rounded-md font-semibold border-black  sm:hover:bg-black sm:hover:text-white sm:hover:rounded-md duration-300 transition-all text-[9px] text-nowrap min-w-1/2" >
                <img src={cartIcon} alt="Add to cart" className="size-2  lg:size-6  sm:group-hover/btn:text-white object-contain duration-300 sm:group-hover/btn:[filter:invert(1)_brightness(1.5)] max-sm:[filter:invert(1)_brightness(1.5)]" />
                Add to cart
            </button>
            <button className="border w-full  flex items-center 2xl:text-xl gap-1 p-1   py-1.5 md:text-xs group/btn max-sm:bg-black max-sm:text-white max-sm:rounded-md font-semibold border-black  sm:hover:bg-black sm:hover:text-white sm:hover:rounded-md duration-300 transition-all text-[9px] text-nowrap min-w-1/2" >
                <img src={bag} alt="Buy Now" className=" size-2  lg:size-6  sm:group-hover/btn:text-white object-contain duration-300 sm:group-hover/btn:[filter:invert(1)_brightness(1.5)] max-sm:[filter:invert(1)_brightness(1.5)] " />
                Buy Now
            </button>
        </div>
      </div> */}
    </div>
  );
};
export default TestSeriesCard;
