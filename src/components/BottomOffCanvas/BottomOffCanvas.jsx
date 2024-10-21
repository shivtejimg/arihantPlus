import React, { useEffect } from "react";

const BottomOffCanvas = ({ showOffCanvas, setShowOffCanvas, children }) => {
 
  useEffect(() => {
    const body = document.body;
    if (showOffCanvas) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [showOffCanvas]);

  return (
    <>
      {showOffCanvas ? (
        <div
          className="fixed inset-0 w-full h-full bg-gray-600 opacity-40 z-[100]"
          onClick={() => setShowOffCanvas(false)}
        ></div>
      ) : (
        ""
      )}
      <div
        className={`fixed max-h-[85dvh] h-full left-0 right-0 ${
          showOffCanvas ? "bottom-0" : "bottom-[-100%]"
        } w-full overflow-hidden  transition-all duration-500 ease-in-out rounded-2xl  z-[101]`}
      >
        {children}
      </div>
    </>
  );
};
export default BottomOffCanvas;
