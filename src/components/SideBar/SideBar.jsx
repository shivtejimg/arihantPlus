
const SideBar = ({ showSideBar, setShowSideBar, children }) => {
  return (
    <>
      {showSideBar ? <div
        className="fixed top-[118px]  left-0 w-full  h-full bg-black opacity opacity-40 z-50"
        onClick={() => setShowSideBar(false)}
      ></div> : ""}
      <div
        className={`fixed top-[124px] right-0 z-[100] h-screen p-4  transition-transform ${showSideBar ? "transform-none" : "translate-x-full"
          } bg-white w-[85%] sm:w-1/2 rounded-bl-3xl`}
      >
        {children}
      </div>
    </>
  );
};

export default SideBar;
