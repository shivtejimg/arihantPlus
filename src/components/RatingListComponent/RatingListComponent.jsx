import starfill from "../../assets/img/starbg.png";
import RatingComponent from "../RatingComponent/RatingComponent";

const RatingListComponent = ({ data }) => {
  return (
    <div className=" border-t border-black py-10">
      <div className="grid-cols-12 sm:gap-16 grid py-5 max-w-6xl 2xl:w-full 2xl:max-w-full 2xl:px-40 px-6 lg:px-8 mx-auto gap-y-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4">
          <div className="text-xl font-semibold text-black  2xl:text-xl mb-3">
            Reviews
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-1 relative">
              <span className="*:size-4">
                <img src={starfill} alt="" />
              </span>
              <span className="*:size-4">
                <img src={starfill} alt="" />
              </span>
              <span className="*:size-4">
                <img src={starfill} alt="" />
              </span>
              <span className="*:size-4">
                <img src={starfill} alt="" />
              </span>
              <span className="*:size-4">
                <img src={starfill} alt="" />
              </span>
            </div>
            {data.rating ? (
              <p className="font-semibold text-black  2xl:text-xl ps-3">
                {data?.rating?.toFixed(1)} out of 5 star
              </p>
            ) : (
              ""
            )}
          </div>
          {data?.no_of_ratings ? (
            <p className="font-semibold text-black  2xl:text-xl text-sm mt-2">
              {data?.no_of_ratings} ratings
            </p>
          ) : (
            ""
          )}
          <div className="flex gap-3 py-2 items-center">
            <p className="font-semibold text-black  2xl:text-xl text-sm">
              5 star
            </p>
            <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[52%] before:bg-primary before:inset-0"></div>
            <p className="font-semibold text-black  2xl:text-xl text-sm">52%</p>
          </div>

          <div className="flex gap-3 py-2 items-center">
            <p className="font-semibold text-black  2xl:text-xl text-sm">
              4 star
            </p>
            <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[24%] before:bg-primary before:inset-0"></div>
            <p className="font-semibold text-black  2xl:text-xl text-sm">24%</p>
          </div>

          <div className="flex gap-3 py-2 items-center">
            <p className="font-semibold text-black  2xl:text-xl text-sm">
              3 star
            </p>
            <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[12%] before:bg-primary before:inset-0"></div>
            <p className="font-semibold text-black  2xl:text-xl text-sm">12%</p>
          </div>

          <div className="flex gap-3 py-2 items-center">
            <p className="font-semibold text-black  2xl:text-xl text-sm">
              2 star
            </p>
            <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[8%] before:bg-primary before:inset-0"></div>
            <p className="font-semibold text-black  2xl:text-xl text-sm">8%</p>
          </div>
          <div className="flex gap-3 py-2  items-center">
            <p className="font-semibold text-black  2xl:text-xl text-sm">
              1 star
            </p>
            <div className="w-44 sm:w-60 bg-transprint border p-3 2xl:p-4 rounded-lg overflow-hidden relative before:absolute before:h-full before:w-[2%] before:bg-primary before:inset-0"></div>
            <p className="font-semibold text-black  2xl:text-xl text-sm">2%</p>
          </div>
          <div className="text-lg sm:text-[24px] mt-2 font-semibold text-black">
            Review this product
          </div>
          <p className="text-base 2xl:text-xl sm:text-lg font-normal">
            Share your thoughts with other customers
          </p>
          <a
            href="#"
            className=" block text-base 2xl:text-2xl font-semibold text-center rounded-xl border border-black py-2 mt-3"
          >
            Write a product review
          </a>
        </div>
        <div className="col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <div className="text-sm 2xl:text-xl text-white font-semibold bg-black rounded-full py-1 px-6 w-max">
            Top review
          </div>
          <p className="text-xl font-semibold text-black  2xl:text-xl mt-3">
            Top reviews from India
          </p>
          {data?.reviews?.map((review, i) => {
            return <RatingComponent data={review} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingListComponent;
