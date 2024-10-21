import relatedVediosTeachers from "../../assets/img/relatedVediosTeacher.svg";
import toDoRecommended2 from "../../assets/img/toDoRecommended2.svg";
import recommendedPlayBtn from "../../assets/img/recommendedPlayBtn.svg";

const RelatedVideoCard = () => {
  return (
    <div className="size-full bg-white hover:shadow-xl duration-300 transition-all ease-in-out  rounded-lg">
    <div className="bg-primary relative rounded-t-lg p-5 text-white">
      <div className="w-2/3">
        <div className="flex gap-2 items-center ">
          <div className="bg-white rounded-full &.size-5 p-1">
            <img src={toDoRecommended2} alt="" />
          </div>
          <div className="font-semibold text-xs">
            India&apso;s No.1 Test Portal
          </div>
        </div>
        <div className="pt-4 font-semibold text-base ">
          <span className="text-base font-bold block">
            SSC CHSL
          </span>
          Best PYQs with solutions
        </div>
      </div>
      <div className=" w-fit absolute bottom-0 right-5 ">
        <img src={relatedVediosTeachers} alt="" />
      </div>
    </div>
    <div className="p-5 text-sm font-semibold">
      <div className="">
        SSC CHSL PYQs Series (Reasoning)
        <div className="">
          Best PYQs with solutions - March 2023
        </div>
      </div>
      <div className="py-5 font-medium text-xs">
        Prepare for SSC CHSl with Arihant Plus&apso;s daily PYQ
        series, Covering 2023&apso;s best questions ind Hindi
        and English
      </div>
      <button className="flex items-center gap-2">
        <div className="">
          <img src={recommendedPlayBtn} alt="" />
        </div>
        <div className="text-xs font-semibold">
          Watch now, best PYQs with solutions
        </div>
      </button>
    </div>
  </div>
  )
}

export default RelatedVideoCard