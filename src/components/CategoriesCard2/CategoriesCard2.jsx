import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const CategoriesCard = ({ data={},selectedCategory,handleClick=()=>{}}) => {
  return (
    <ErrorBoundary>
    <div className={`bg-white max-w-[134px] xl:w-[134px] p-2 xl:p-4  lg:w-[108px] items-center relative after:absolute after:size-full after:bg-white after:left-0 after:top-0  after:rounded-[10px] after:hover:w-[104%] after:hover:h-[104%] after:border after:hover:border-primary after:duration-500 hover:border-0 duration-500
       ${selectedCategory===data?.id ?  "after:border-primary mb-0 me-0":""} duration-300 border py-4 sm:py-6 rounded-[10px] group cursor-pointer`} onClick={()=>handleClick(data?.id)} >
      <div className=" min-w-9 size-9 *:object-contain relative z-20 *:size-full">
        <img src={data?.image} alt="" />
      </div>
      <p className={`text-xs xl:text-sm relative z-20 ${selectedCategory===data?.id ?"primarytext":"text-[#353C41]"} duration-300 font-semibold pt-2 sm:pt-3`}>
        {data?.name}
      </p>
    </div>
      {/* <div className={`bg-white max-sm:flex gap-3 items-center relative hover:w-[104%] h-[104%] border border-white hover:border-primary transition-[width]  duration-500
       ${selectedCategory===data?.id ?  "!border-primary mb-0 me-0":""} duration-300 border px-2 sm:px-4 py-2 sm:py-6 rounded-[10px] group cursor-pointer`} onClick={()=>handleClick(data?.id)} >
      <div className=" min-w-10 size-10 *:object-contain relative z-20 *:size-full">
        <img src={data?.image} alt="" />
      </div>
      <p className={`text-xs sm:text-sm 2xl:text-lg relative z-20 ${selectedCategory===data?.id ?"primarytext":"text-black"} duration-300 font-semibold sm:pt-3`}>
        {data?.name}
      </p>
    </div> */}
    </ErrorBoundary>
  );
};
export default CategoriesCard;