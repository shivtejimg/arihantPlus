import starfill from "../../assets/img/starbg.png";

const RatingComponent = ({ data }) => {
  let stars = new Array(data?.review_rating || 0).fill("");
  return (
    <div className="mt-4">
      <p className="font-semibold text-base 2xl:text-2xl text-black">
        {data?.customer_name}
      </p>
      <div className="flex items-center">
        <div className="flex items-center gap-1 relative">
          {stars.map((el, i) => (
            <span className="*:size-4" key={i}>
              <img src={starfill} alt="" />
            </span>
          ))}
        </div>
        <p className="font-bold text-base 2xl:text-xl text-black ps-3">
          {data?.review_comment}
        </p>
      </div>
      {data?.review_date ? (
        <p className="text-sm 2xl:text-xl font-semibold text-gray1">
          Reviewed in India on {data?.review_date}
        </p>
      ) : (
        ""
      )}
      {data?.is_verified ? (
        <p className="text-[#FEA200] font-semibld py-1 text-sm 2xl:text-lg 2xl:font-bold">
          Verified Purchase
        </p>
      ) : (
        ""
      )}
      <p className="text-sm 2xl:text-xl font-semibold text-gray1">
        Good book to study for exam
      </p>
      <div className="flex items-center justify-between w-2/3 mt-3">
        <div className="text-sm 2xl:text-lg font-semibold rounded-full border border-black w-max px-5 py-[3px]">
          Helpful
        </div>
        <div>|</div>
        <div className="text-sm 2xl:text-xl font-semibold">Feedback</div>
      </div>
    </div>
  );
};

export default RatingComponent;
