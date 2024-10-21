import classes from "../../assets/img/videocard.png";
import diagonalArrowIcon from "../../assets/img/diagonalArrowIcon.svg";
import newPlayButtonIcon from "../../assets/img/newPlayButtonIcon.svg";
// import play from "../../assets/img/smplay.png";

const VideoCard = () => {
  return (
    <div className="border group/video  rounded-xl overflow-hidden">
      <div className="w-full  object-cover relative ">
        <img className="w-full" src={classes} alt="" />

        <div className="absolute p-1 size-6 sm:!size-8 md:!size-10 lg:!size-12 rounded-full bg-white right-4 bottom-4 flex justify-center items-center group-hover/video:scale-125 duration-500">
          <img src={newPlayButtonIcon} alt="" className="size-full object-contain" />
        </div>
        <p className="absolute inset-4 text-white !w-1/2 font-semibold text-xs sm:text-sm md:text-base 2xl:text-xl ">
          <span className="text-sm sm:text-base md:text-lg font-bold 2xl:text-2xl leading-none">Reasoning</span>
          <br />
          SSC CHSL PYQs Series
        </p>
      </div>
      <div className="p-3">
        <p className="text-xs sm:text-base 2xl:text-lg font-bold text-black leading-5">
          SSC CHSL PYQs Series (Reasoning) Best PYQs with solutions
        </p>
        <div className="flex justify-between  items-end">
          <p className="text-[10px] sm:text-xs 2xl:text-base font-semibold mt-3 text-[#6F757C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="size-6 rounded-full group duration-300 hover:bg-gray1 *:size-full shrink-0 p-1">
            <img
              src={diagonalArrowIcon}
              alt=""
              className="group-hover:[filter:invert(1)_brightness(1.5)] duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
