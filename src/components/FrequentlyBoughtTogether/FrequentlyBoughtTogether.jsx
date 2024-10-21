import book1 from "../../assets/img/book01.png";

const FrequentlyBoughtTogether = ({ border, title, subTitle }) => {
  return (
    <div className="max-w-6xl px-4 mx-auto lg:pt-[74px] pt-16">
      {title ? (
        <p className=" pb-10 text-2xl sm:text-3xl font-semibold text-black">
          {title}
        </p>
      ) : (
        ""
      )}
      {subTitle ? (
        <p className="text-sm font-medium text-[#757676] pb-11">
          {" "}
          {subTitle}
        </p>
      ) : (
        ""
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:gap-4 lg:grid-cols-4 rounded-lg ${
          border ? "border border-black" : ""
        }  bg-white shadow-2xl lg:py-5`}
      >
        <div className="p-7 max-sm:flex gap-5 max-lg:border-b sm:border-r  border-brown3">
          <div className="*:w-[134px] *:!mx-auto">
            <img src={book1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-sm leading-[16.8px] font-semibold mt-6">
              14000+ General Studies Chapter- wise PYQs ...
            </p>
            <div className="bg-yellow4 text-sm leading-none font-medium py-2 px-[10px] rounded-[5px] mt-5 w-max">
              New Edition
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-base sm:text-lg leading-5 font-bold text-black2">
                Rs. 665
              </p>
              <input
                type="checkbox"
                className="size-[22.86px] accent-yellow4 border border-black"
              />
            </div>
          </div>
        </div>

        <div className=" max-lg:border-b lg:border-r p-7 border-gray2 max-sm:flex gap-5">
          <div className="*:w-[134px] *:!mx-auto">
            <img src={book1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-sm leading-[16.8px] font-semibold mt-6">
              14000+ General Studies Chapter- wise PYQs ...
            </p>
            <div className="bg-yellow4 text-sm leading-none font-medium py-2 px-[10px] rounded-[5px] mt-5 w-max">
              New Edition
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-base sm:text-lg leading-5 font-bold text-black2">
                Rs. 665
              </p>
              <input
                type="checkbox"
                className="size-[22.86px] accent-yellow4 border border-black"
              />
            </div>
          </div>
        </div>

        <div className="max-sm:border-b sm:border-r p-7 border-gray2 max-sm:flex gap-5">
          <div className="*:w-[134px] *:!mx-auto">
            <img src={book1} alt="" />
          </div>
          <div className="w-full">
            <p className="text-sm leading-[16.8px] font-semibold mt-6">
              14000+ General Studies Chapter- wise PYQs ...
            </p>
            <div className="bg-yellow4 text-sm leading-none font-medium py-2 px-[10px] rounded-[5px] mt-5 w-max">
              New Edition
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-base sm:text-lg leading-5 font-bold text-black2">
                Rs. 665
              </p>
              <input
                type="checkbox"
                className="size-[22.86px] accent-yellow4 border border-black"
              />
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col place-content-between">
          <p className="text-xl font-semibold text-black pb-3 sm:border-b border-black">
            Total 1 Book Selected
          </p>
          {/* Do not remove */}
          {/* <div className="font-semibold text-xl py-3 px-4 w-full bg-gray4 rounded-xl">
                Combo Price
              </div> */}
          <div>
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-semibold 2xl:text-xl text-black">
                Total Amount (1 items){" "}
              </p>
              <p className="text-base font-semibold 2xl:text-2xl text-gray1">
                665.00
              </p>
            </div>
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-semibold 2xl:text-xl text-black">
                Total Amount (1 items){" "}
              </p>
              <p className="text-base font-semibold 2xl:text-2xl text-gray1">
                65.00
              </p>
            </div>
            <div className="border-t border-gray2"></div>
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold 2xl:text-2xl text-black">
                Total:
              </p>
              <p className="text-base font-semibold 2xl:text-2xl text-gray1">
                600.00
              </p>
            </div>
            <button className="mt-8 bg-primary border border-primary block text-sm sm:text-base font-semibold  text-center text-[#ffff]  w-full py-1 sm:py-2 rounded-xl">
              Confirm Order
            </button>
            <button className=" block text-sm sm:text-base w-full font-semibold 2xl:text-2xl text-center rounded-xl border border-black py-1 sm:py-2 mt-3">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
