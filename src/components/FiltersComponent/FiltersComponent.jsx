import { useState } from "react";
import filter from "../../assets/img/filter.png";
import BottomOffCanvas from "../BottomOffCanvas/BottomOffCanvas";

const FiltersComponent = ({ children }) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  return (
    <>
    <div className="bg-white2 py-4">
    <div className="max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40  px-6 mx-auto">
      <div className="flex items-center gap-4 md:hidden flex-nowrap">
        <ul
          className="*:py-1 demo *:whitespace-nowrap py-6 gap-10 scroll-none *:block w-full overflow-hidden overflow-x-auto
     flex justify-between "
        >
          <button className="text-sm font-medium 2xl:text-xl text-primary active:text-primary">
            <li>JEE Mains</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>JEE Advanced</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>BITSAT</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>VIT</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>AP EAPCET</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>TS EAMCET</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>WB JEE</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>Kerala CET</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>Manipal</li>
          </button>
          <button className="text-sm font-medium 2xl:text-xl text-black">
            <li>KCET</li>
          </button>
        </ul>
        <button
          className="bg-gray3 text-sm px-4 py-1 items-center gap-2 flex font-semibold text"
          onClick={() => setShowOffCanvas(true)}
        >
          <span className="size-8 *:size-full *:object-contain">
            <img src={filter} alt="" />
          </span>
          <span>Filter</span>
        </button>
      </div>
              {/*   add  overflow-hidden  to the div below if some style is not proper    */}
      <div className="flex flex-nowrap gap-8 lg:gap-16 ">
              {/*   add  overflow-hidden  to the div below if some style is not proper    */}
        <div className="md:w-[200px] md:block hidden  border-r-4 overflow-y-auto">
          <ul className="*:py-1 *:block">
            <button className="text-sm 2xl:text-xl font-semibold text-primary">
              <li>JEE Main</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>JEE Advanced</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>BITSAT</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>VIT</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>AP EAPCET</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>TS EAMCET</li>
            </button>
            <button href="text-sm font-medium 2xl:text-xl text-black">
              <li>WB JEE</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>Kerala CET</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>Manipal</li>
            </button>
            <button className="text-sm font-medium 2xl:text-xl text-black">
              <li>KCET</li>
            </button>
          </ul>
          <p className="text-base text-black font-semibold mt-4">Filters</p>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Subject
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Physics"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Physics"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Physics
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Mathematics"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Mathematics"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Mathematics
            </label>
          </div>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Languages
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="English"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="English"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              English
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Hindi"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Hindi"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Hindi
            </label>
          </div>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Type
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Study-Guide"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Study-Guide"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Study Guide
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Practice-Sets"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Practice-Sets"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Practice Sets
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Solved-Papers"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Solved-Papers"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Solved Papers
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Practice-&-Solved"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Practice-&-Solved"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Practice & Solved
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Reference-Books"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Reference-Books"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Reference Books
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="New-Releases"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="New-Releases"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              New Releases
            </label>
          </div>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Format
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Paper-Back"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Paper-Back"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Paper Back
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="E-Book"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="E-Book"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              E-Book
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Audible"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Audible"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Audible
            </label>
          </div>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Ratings
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Best-Seller"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Best-Seller"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Best Seller
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Best-Rated"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Best-Rated"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Best Rated
            </label>
          </div>
          <p className="text-base 2xl:text-xl text-black font-semibold mt-4 mb-2">
            Discount & Deals
          </p>

          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="20%"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="20%"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              20%
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="30%"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="30%"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              30%
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Offers"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Offers"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Offers
            </label>
          </div>
          <div className="flex items-center ms-4 pb-2 text-7xl">
            <input
              id="Free-Delivery"
              type="checkbox"
              value=""
              className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
            />
            <label
              htmlFor="Free-Delivery"
              className="ms-2 text-xs 2xl:text-lg text-black font-medium"
            >
              Free Delivery
            </label>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
  <BottomOffCanvas
        showOffCanvas={showOffCanvas}
        setShowOffCanvas={setShowOffCanvas}
      >
        <div className="py-2 !z-50 rounded-t-3xl mt-3 relative after:absolute after:size-full after:bg-white after:inset-0 after:!shadow-2xl after:shadow-slate-200 after:rotate-180 after:rounded-b-3xl after:-z-10 h-full flex flex-col overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b-2 px-5">
            <div className="font-medium text-sm">Filters</div>
            <div className="">
              <button
                className="flex items-center justify-center size-7 *:size-4 bg-secondary text-white rounded-full"
                onClick={() => setShowOffCanvas(false)}
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
          <div className="flex-1 h-full overflow-y-auto">
            <div className="flex items-center justify-between pt-3 gap-2 px-5">
              <div className="border-r-2 flex items-start gap-2 flex-col w-1/2">
                <div className="font-medium text-sm 2xl:text-4xl">Subjects</div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Physics"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="Physics"
                    className=" text-xs text-black font-medium"
                  >
                    Physics
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Mathematics"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="Mathematics"
                    className=" text-xs text-black font-medium"
                  >
                    Mathematics
                  </label>
                </div>
              </div>
              <div className=" flex items-start gap-2 flex-col w-1/2">
                <div className="font-medium text-sm 2xl:text-4xl">
                  Languages
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="English"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="English"
                    className=" text-xs text-black font-medium"
                  >
                    English
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Hindi"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="Hindi"
                    className=" text-xs text-black font-medium"
                  >
                    Hindi
                  </label>
                </div>
              </div>
            </div>
            <div className=" mt-3 p-4 bg-gray-300 gap-2 px-5">
              <div className="font-medium text-sm 2xl:text-4xlblock pb-4">
                Type
              </div>
              <div className="flex items-center justify-between ">
                <div className=" flex items-start gap-2 flex-col w-1/2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Guide"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Guide"
                      className=" text-xs text-black font-medium"
                    >
                      Study Guide
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Practice"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Practice"
                      className=" text-xs text-black font-medium"
                    >
                      Practice Sets
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Solved"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Solved"
                      className=" text-xs text-black font-medium"
                    >
                      Solved Papers
                    </label>
                  </div>
                </div>
                <div className=" flex items-start gap-2 flex-col w-1/2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Practice"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Practice"
                      className=" text-xs text-black font-medium"
                    >
                      Practice & Solved
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Reference"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Reference"
                      className=" text-xs text-black font-medium"
                    >
                      Reference Books
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Releases"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Releases"
                      className=" text-xs text-black font-medium"
                    >
                      New Releases
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center  border-b-2 justify-between py-3 gap-2 px-5">
              <div className="border-r-2 flex items-start gap-2 flex-col w-1/2">
                <div className="font-medium text-sm 2xl:text-4xl">Format</div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="paperBack"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="paperBack"
                    className=" text-xs text-black font-medium"
                  >
                    Paper Back
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="eBook"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="eBook"
                    className=" text-xs text-black font-medium"
                  >
                    E-Book
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Audible"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="Audible"
                    className=" text-xs text-black font-medium"
                  >
                    Audible
                  </label>
                </div>
              </div>
              <div className=" flex items-start gap-2 flex-col w-1/2">
                <div className="font-medium text-sm 2xl:text-4xl">
                  Review & Ratings
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="bestSeller"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="bestSeller"
                    className=" text-xs text-black font-medium"
                  >
                    Best Seller
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="bestRated"
                    className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                  />
                  <label
                    htmlFor="bestRated"
                    className=" text-xs text-black font-medium"
                  >
                    Best Rated
                  </label>
                </div>
              </div>
            </div>
            <div className=" mt-3 p-4 -300 gap-2 px-5">
              <div className="font-medium text-sm 2xl:text-4xlblock pb-4">
                Discount & Deals
              </div>
              <div className="flex items-center justify-between ">
                <div className=" flex items-start gap-2 flex-col w-1/2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="20%"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="20%"
                      className=" text-xs text-black font-medium"
                    >
                      20%
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="30%"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="30%"
                      className=" text-xs text-black font-medium"
                    >
                      30%
                    </label>
                  </div>
                </div>
                <div className=" flex items-start gap-2 flex-col w-1/2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Offers"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="Offers"
                      className=" text-xs text-black font-medium"
                    >
                      Offers
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="freeDelivery"
                      className="!size-4 2xl:!size-6 border-gray-300 bg-gray-100 rounded-md custom-checkbox "
                    />
                    <label
                      htmlFor="freeDelivery"
                      className=" text-xs text-black font-medium"
                    >
                      Free Delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full text-center py-5 px-5">
            <button className="w-[70%] py-2 font-medium text-white rounded-3xl bg-primary">
              Apply
            </button>
          </div>
        </div>
      </BottomOffCanvas>
    </>
  )
}

export default FiltersComponent;