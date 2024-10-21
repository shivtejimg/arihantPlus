import designedPlusIcon from "../../assets/img/designedPlusIcon.svg";
import mobileScreen from "../../assets/img/mobileScreen.svg";

const FeatureComponent = () => {
  return (
    <div className="bg-white max-w-6xl 2xl:w-full 2xl:max-w-full h-full 2xl:px-40  px-6  mx-auto py-16">
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <div className="size-full">
          <div className="w-2/3">
            <div className="text-4xl font-semibold pb-12">
              <span className="text-primary ">Arihant Plus</span>{" "}
              Unmatched
              <span> Online Preparation</span>
            </div>
            <div className="flex flex-col gap-5 text-base font-semibold">
              <div className="flex items-center gap-3">
                <img src={designedPlusIcon} alt="" />
                <div className="">Live Classes</div>
              </div>
              <div className="flex items-center gap-3">
                <img src={designedPlusIcon} alt="" />
                <div className="">Mock Tests</div>
              </div>
              <div className="flex items-center gap-3">
                <img src={designedPlusIcon} alt="" />
                <div className="">Current Affairs</div>
              </div>
              <div className="flex items-center gap-3">
                <img src={designedPlusIcon} alt="" />
                <div className="">Instant Doubt Solving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="size-full">
          <div className="">
            <img src={mobileScreen} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureComponent