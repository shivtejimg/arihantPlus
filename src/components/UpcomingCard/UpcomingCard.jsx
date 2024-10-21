import React, { useState } from "react";
import heartIcon from "../../assets/img/heartIcon.svg";
import shareIcon from "../../assets/img/shareIcon.svg";
import diagonalArrowIcon from "../../assets/img/diagonalArrowIcon.svg";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import heartIconRed from "../../assets/img/heartIconRed.svg";

const UpcomingCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleWhishList = (e) => {
    e.stopPropagation();
    // console.log("Added to WhishList");
    setIsLiked(!isLiked);
  };
  return (
    <ErrorBoundary>
      <div className="border-gray4 rounded-lg border p-4 bg-white gap-2 duration-300 hover:shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xs 2xl:text-base font-white bg-yellow1 text-primary py-1 px-2 rounded-full cursor-pointer">
            Pre-order now
          </p>
          <div className="flex gap-3 items-center">
            <span className="*:h-4 *:w-5 *:2xl:size-8 cursor-pointer" onClick={handleWhishList}>
              {!isLiked ? (
                <img src={heartIcon} alt="whish list" />
              ) : (
                <img src={heartIconRed} alt="whish list" />
              )}
            </span>
            <span className="*:h-4 *:w-5 *:2xl:size-8 cursor-pointer">
              <img src={shareIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="grid-cols-12 grid items-center gap-2">
          <div className="col-span-4">
            <div className="size-full mt-2">
              <img src={data?.thumbnail} alt="" />
            </div>
          </div>
          <div className="col-span-8">
            <p className="text-base font-semibold text-black text-ellipsis line-clamp-3">
              {data?.name}
            </p>
            <p className="text-xs font-medium text-gray1 mt-3">
              A preparatory guide for the civil services aspirants
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center">
                {data?.discounted_price && data?.discounted_price != "0" ? (
                  <>
                    <span className="text-base font-medium text-black line-through">
                      Rs. {data?.price}
                    </span>
                    <span className="text-base font-medium text-primary">
                      Rs. {data?.discounted_price}
                    </span>
                  </>
                ) : (
                  <span className="text-base font-medium text-primary">
                    Rs. {data?.price}
                  </span>
                )}
              </div>
              <a className="cursor-pointer">
                <img src={diagonalArrowIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default UpcomingCard;
