import bggroup from "../../assets/img/groupbg.png";
import bggroup2 from "../../assets/img/groupbg.png";
import topper2 from "../../assets/img/topper2.png";
import topper from "../../assets/img/topper.png";
import newPlayIcon from "../../assets/img/newPlayIcon.svg";

const RecommendedComponent = () => {
  return (
    <div className="bg-secondary pb-12">
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto ">
      <p className="pt-10 pb-8 text-2xl sm:text-3xl font-semibold text-white">
        {" "}
        Recommended/Review by Topper&apos;s & Teacher&apos;s
      </p>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="px-4 py-2 rounded-md group items-center bg-[#FCEAAF] hover:shadow-2xl hover:shadow-[#FCEAAF]/40 grid grid-cols-12">
          <div className="col-span-7 ">
            <p className="text-sm font-semibold 2xl:text-2xl text-black">
              JEE Main Toppers
            </p>
            <p className="text-xl 2xl:text-2xl font-semibold text-[#6F757C] mt-4 leading-[120%] pb-2">
              Anish Kr. Singh
            </p>
            <p className="text-sm font-medium text-black 2xl:text-lg">
              Watch real stories from topper about their transformative
              journey
            </p>
            <button className="flex items-center gap-2 mt-5 group/btn">
              <div className="bg-white group-hover/btn:scale-125 duration-300 size-8 min-w-8 flex justify-center items-center rounded-full *:size-8 sm:*:size-10 *:object-contain">
                <img src={newPlayIcon} alt="" />
              </div>
              <p className="text-sm font-semibold 2xl:text-2xl">Watch Now</p>
            </button>
          </div>
          <div className="col-span-5 ms-auto relative">
            <div className="relative  group-hover:scale-110 duration-300 !ms-auto z-40  *:size-full object-contain">
              <img src={topper} alt="" />
            </div>
            <img
              src={bggroup}
              alt=""
              className="absolute size-full *:object-cover bottom-0"
            />
          </div>
        </div>
        <div className="rounded-md px-4 py-2 group items-center bg-[#CCB9C4] hover:shadow-2xl hover:shadow-[#CCB9C4]/40 grid grid-cols-12">
          <div className="col-span-7 ">
            <p className="text-sm font-semibold 2xl:text-2xl text-black">
              Recommended by Teachers, Trusted by Toppers
            </p>
            <p className="text-xl 2xl:text-2xl font-semibold text-[#6F757C] mt-4 leading-[120%] pb-2">
              All in One 11&12 Books
            </p>
            <p className="text-sm font-medium text-black 2xl:text-lg">
              All in One Series from Class 11th - 12th.
            </p>
            <button className="flex items-center gap-2 mt-5 group/btn">
              <div className="bg-white group-hover/btn:scale-125 duration-300 size-8 min-w-8 flex justify-center items-center rounded-full *:size-8 sm:*:size-10 *:object-contain">
                <img src={newPlayIcon} alt="" />
              </div>
              <p className="text-sm font-semibold 2xl:text-2xl">Watch Now</p>
            </button>
          </div>
          <div className="col-span-5 ms-auto relative">
            <div className="relative  group-hover:scale-110 duration-300 !ms-auto z-40  *:size-full object-contain">
              <img src={topper2} alt="" />
            </div>
            <img
              src={bggroup2}
              alt=""
              className="absolute size-full *:object-cover bottom-0"
            />
          </div>
        </div>
        <div className="rounded-md px-4 py-2 group items-center bg-[#FCEAAF] hover:shadow-2xl hover:shadow-[#FCEAAF]/40 grid grid-cols-12">
          <div className="col-span-7 ">
            <p className="text-sm font-semibold 2xl:text-2xl text-black">
              JEE Main Toppers
            </p>
            <p className="text-xl 2xl:text-2xl font-semibold text-[#6F757C] mt-4 leading-[120%] pb-2">
              Anish Kr. Singh
            </p>
            <p className="text-sm font-medium text-black 2xl:text-lg">
              Watch real stories from topper about their transformative
              journey
            </p>
            <button className="flex items-center gap-2 mt-5 group/btn">
              <div className="bg-white group-hover/btn:scale-125 duration-300 size-8 min-w-8 flex justify-center items-center rounded-full *:size-8 sm:*:size-10 *:object-contain">
                <img src={newPlayIcon} alt="" />
              </div>
              <p className="text-sm font-semibold 2xl:text-2xl">Watch Now</p>
            </button>
          </div>
          <div className="col-span-5 ms-auto relative">
            <div className="relative  group-hover:scale-110 duration-300 !ms-auto z-40  *:size-full object-contain">
              <img src={topper} alt="" />
            </div>
            <img
              src={bggroup}
              alt=""
              className="absolute size-full *:object-cover bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecommendedComponent