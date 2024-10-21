import { useState } from "react";

const ItemsAndDeliveryComponent = () => {
  const [itemReview,setItemReview] =useState(false);

  return (
    <div className=" border-b border-slate-700 py-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-base 2xl:text-lg">
          Items and delivery
        </div>
        {!itemReview ? (
          <div className="text-center text-[#353C41]">
            <button
              className="inline-block 2xl:text-base text-sm py-1 px-5 rounded-full bg-gray4 border-secondary border hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => setItemReview(true)}
            >
              Review order
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {!itemReview ? (
        <div className="font-semibold text-sm 2xl:text-base ps-4">
          Estimate delivery: 29 sep. 2024 to 30 sept. 2024
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="mt-9 p-4 sm:p-7 w-full bg-[#FCEAAF]/70 rounded-2xl">
              <div className="flex items-center gap-4 flex-col text-sm sm:text-base font-semibold">
                <div className="flex items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    id="check1"
                    className="accent-secondary"
                  />
                  <label htmlFor="check1">
                    Save your checkout settings as the default for the future
                    orders
                  </label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    id="check2"
                    className="accent-secondary"
                  />
                  <label htmlFor="check2">
                  One-time password required at time of delivery
                  </label>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    id="check3"
                    className="accent-secondary"
                  />
                  <label htmlFor="check3">
                  There are 2 important message about items in your order.
                  </label>
                </div>
              </div>
            </div>
            <div className="border w-full border-gray-400 rounded-2xl p-4 lg:p-7">
              <div className="text-base sm:text-lg font-semibold pb-7 text-primary">
                Arriving 29 Aug 2024
              </div>
              <div className="flex flex-wrap sm:flex-nowrap sm:gap-3 lg:gap-6">
                <div className="w-2/5 sm:w-1/4">
                  <img
                    className="size-full "
                    src="./src/assets/img/bookdetail.png"
                    alt=""
                  />
                </div>
                <div className="w-[60%] sm:w-1/2">
                  <div className="text-xs sm:text-sm lg:text-base font-semibold">
                    <span className="block text-nowrap">
                      23 Years (2024-2002) JEE Main{" "}
                    </span>
                    <span className="block">
                      (Chapterwise - Topicwise Solved Papers Mathematics){" "}
                    </span>
                    <div className="">Paperback - 8 April 2024</div>
                  </div>
                  <div className="text-[#757676] text-[11px] sm:text-xs lg:text-sm pt-1 sm:pt-2 lg:pt-4 ">
                    <div className="">
                      by Naveen kumar Sachin kumar (Author)
                    </div>
                    <div className="">In stock</div>
                  </div>
                  <div className="text-[#757676] text-[11px] sm:text-xs lg:text-sm font-semibold pt-1 sm:pt-2 lg:pt-4">
                    <div className="font-semibold">(GST Invoice)</div>
                    <div className="">Sold by: Arihant Publication Limited</div>
                  </div>
                </div>
                <div className="max-sm:w-full mt-auto">
                  <div className=" max-sm:flex justify-between items-center pt-3">
                    <select
                      name=""
                      id="qty"
                      className="sm:mb-7 text-xs sm:text-sm bg-gray1/30 rounded-lg px-3 py-2"
                    >
                      <option value="qty1">Qty1</option>
                      <option value="qty2">Qty2</option>
                    </select>
                    <div className="text-sm sm:text-base flex items-center gap-2 text-nowrap">
                      <span className="line-through">Rs. 770</span>
                      <span className="text-primary font-bold">Rs. 570</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full border-gray-400 rounded-2xl p-4 lg:p-7">
              <div className="text-base sm:text-lg font-semibold pb-7 text-primary">
                Arriving 29 Aug 2024
              </div>
              <div className="flex flex-wrap sm:flex-nowrap sm:gap-3 lg:gap-6">
                <div className="w-2/5 sm:w-1/4">
                  <img
                    className="size-full "
                    src="./src/assets/img/bookdetail.png"
                    alt=""
                  />
                </div>
                <div className="w-[60%] sm:w-1/2">
                  <div className="text-xs sm:text-sm lg:text-base font-semibold">
                    <span className="block text-nowrap">
                      Objective Chemistry Volume 1{" "}
                    </span>
                    <span className="block">For Engineering Entrances</span>
                  </div>
                  <div className="text-[#757676] text-[11px] sm:text-xs lg:text-sm pt-1 sm:pt-2 lg:pt-4 ">
                    <div className="">by Dr.R K Gupta (Author)</div>
                    <div className="">In stock</div>
                  </div>
                  <div className="text-[#757676] text-[11px] sm:text-xs lg:text-sm font-semibold pt-2 lg:pt-4">
                    <div className="font-semibold">(GST Invoice)</div>
                  </div>
                </div>
                <div className="max-sm:w-full mt-auto">
                  <div className=" max-sm:flex justify-between items-center pt-3">
                    <select
                      name=""
                      id="qty"
                      className="sm:mb-7 text-xs sm:text-sm bg-gray1/30 rounded-lg px-3 py-2"
                    >
                      <option value="qty1">Qty1</option>
                      <option value="qty2">Qty2</option>
                    </select>
                    <div className="text-sm sm:text-base flex items-center gap-2 text-nowrap">
                      <span className="line-through">Rs. 890</span>
                      <span className="text-primary font-bold">Rs. 639</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full border-gray-400 rounded-2xl p-4 sm:p-7">
              <div className="flex items-center flex-wrap max-sm:gap-2 sm:flex-nowrap justify-between">
                <div className="w-full sm:w-1/2">
                  <button className="font-semibold text-sm bg-primary px-5 py-3.5 rounded-full text-white">
                    Place Your Order and Pay
                  </button>
                  <div className="text-xs sm:text-sm text-[#353C41] pt-4 font-medium">
                    You'll be securely redirected to payment gateway to enter
                    your password and complete your purchase
                  </div>
                </div>
                <div className="w-full sm:w-2/5">
                  <div className="text-secondary text-base sm:text-lg font-semibold">
                    Order Total: ₹ 1,219
                  </div>
                  <div className="pt-4 font-semibold text-xs">
                    By placing your order, you agree to Arihant Plus Terms and
                    conditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsAndDeliveryComponent;
