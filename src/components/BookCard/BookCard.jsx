import heartIcon from "../../assets/img/heartIcon.svg";
import heartIconRed from "../../assets/img/heartIconRed.svg";
import shareIcon from "../../assets/img/shareIcon.svg";
// import diagonalArrowIcon from "../../assets/img/diagonalArrowIcon.svg";
import bag from "../../assets/img/buy_now.png";
import cart from "../../assets/img/add_to_cart.png";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../constants/RouteConstants";
import { useState } from "react";
import toDoArrow from "../../assets/img/toDoArrow.svg";

const BookCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`${PAGE_ROUTES.BOOK_DETAIL}/${data?.id ? data?.id : ""}`);
  };

  const handleWhishList = (e) => {
    e.stopPropagation();
    // console.log("Added to WhishList");
    setIsLiked(!isLiked);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    console.log("Shared");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("Added to Cart");
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    console.log("Buy Now");
  };

  return (
    <ErrorBoundary>
      <div
        className="text-base max-[390px]:px-1.5 px-2.5 pt-1.5 sm:pt-4 pb-2.5 md:p-[11px,12px,5px,13px] relative rounded-[10px] max-md:shadow-sm max-md:bg-white group max-h-content h-full hover:bg-[#FFFF] duration-300 hover:shadow-md"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          {data?.discount_percentage && (
            <p className="text-white bg-primary py-1 leading-none md:py-1.5 px-2 md:px-1.5 text-[9px] md:text-xs 2xl:text-base font-bold rounded-full ">
              {String(data?.discount_percentage)?.includes("%")
                ? data?.discount_percentage
                : data?.discount_percentage + " %"}
            </p>
          )}
          <div className="flex relative items-center gap-2">
            <button
              className="*:max-w-5 *:max-h-4 md:*:max-w-4 md:*:max-h-4 2xl:max-w-6 2xl:max-h-6 cursor-pointer"
              onClick={handleWhishList}
            >
              {!isLiked ? (
                <img src={heartIcon} alt="whish list" />
              ) : (
                <img src={heartIconRed} alt="whish list" />
              )}
            </button>
            <button
              className=" *:min-w-4 *:max-h-4 md:*:max-h-[18px] *:2xl:max-w-6 *:2xl:max-h-6 cursor-pointer"
              onClick={handleShare}
            >
              <img src={shareIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="w-full relative max-md:px-2 aspect-[1/1.1] md:aspect-[1/1.2] *:object-cover *:size-full mt-2">
          <img src={data?.thumbnail || ""} alt="" />
          <div className="absolute z-50 sm:group-hover:opacity-100 duration-700 sm:opacity-0 px-4 !h-10 w-full justify-between bottom-0 flex max-md:hidden">
            <button
              className="max-md:hidden size-7 lg:size-10 *:size-3.5 lg:*:size-5 flex justify-center items-center *:object-contain *:max-w-6 *:min-w-6 rounded-full bg-white hover:bg-gray-300 duration-700"
              onClick={handleAddToCart}
            >
              <img src={cart} alt="" />
            </button>
            <button
              className="max-md:hidden size-7 lg:size-10 *:size-3.5 lg:*:size-5 flex justify-center items-center *:object-contain *:max-w-6 *:min-w-6 rounded-full bg-white hover:bg-gray-300 duration-700"
              onClick={handleBuyNow}
            >
              <img src={bag} alt="" />
            </button>
          </div>
        </div>
        <div className="flex flex-col pt-2.5 sm:pt-3.5 md:pt-5">
          <div className="text-xs max-md:tracking-[0.12px] md:text-sm 2xl:text-xl font-semibold text-black  w-full text-ellipsis line-clamp-2 ">
            {data?.name}
          </div>
          <div className="flex  justify-between items-center pt-2.5 sm:pt-3.5 md:pt-6 pb-1.5 sm:pb-4 md:pb-3.5">
            <div className="flex gap-2 items-center">
              {data?.discounted_price && data?.discounted_price != "0" ? (
                <>
                  <span className="text-xs sm:text-sm md::text-base 2xl:text-2xl font-medium line-through text-black ">
                    Rs. {data?.price}
                  </span>
                  <span className="text-xs sm:text-sm md::text-base 2xl:text-2xl font-bold text-primary">
                    Rs. {data?.discounted_price}
                  </span>
                </>
              ) : (
                <span className="text-sm sm:text-base 2xl:text-2xl font-medium text-primary">
                  Rs. {data?.price}
                </span>
              )}
            </div>
            {/* <a className="cursor-pointer inline-block *:size-4 max-md:bg-gray2 md:hover:bg-gray2 rounded-full p-1 group">
              <img
                className="max-md:[filter:brightness(8)contrast(1)] md:hover:[filter:brightness(8)contrast(1)] transition-all ease-in-out duration-300"
                src={diagonalArrowIcon}
                alt=""
              />
            </a> */}
              <div className="max-md:bg-gray2 md:hover:bg-gray2 p-0.5 sm:p-1 md:p-2 rounded-full transition-all duration-300 ease-in-out *:size-3 sm:*:size-3 *:md:size-4">
              <img
                className="max-md:[filter:brightness(8)contrast(1)] md:hover:[filter:brightness(8)contrast(1)] transition-all ease-in-out duration-300"
                src={toDoArrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-md:flex justify-between w-full items-center gap-1.5 sm:gap-2 hidden pt-2.5 ">
          <button className="w-full flex items-center justify-center gap-1 text-[9px] font-semibold text-nowrap border-gray1 border rounded-[5px] p-[2px]">
            <img src={cart} alt="Add to cart" className="size-2  lg:size-6 " />
            Add to cart
          </button>
          <button className="w-full flex items-center justify-center gap-1 text-[9px] font-semibold text-nowrap border-gray1 border rounded-[5px] p-[2px] bg-[#353C41] text-white">
            <img src={bag} alt="Buy Now" className=" size-2  invert" />
            Buy Now
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default BookCard;
