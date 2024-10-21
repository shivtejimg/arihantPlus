import React from "react";

const OffCanvas = ({ isOpen, onClose, children }) => {
  return (
    <>
    <div className={`${isOpen ? "absolute top-0 left-0 size-full z-[49] bg-black/50" : ""}`} onClick={onClose} ></div>
    <div
      className={`absolute inset-y-0 h-full flex flex-col right-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out bg-white shadow-lg`}
      style={{ width: "300px" }} 
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <button onClick={onClose} className="text-gray-500">
          &#x2715; {/* Close icon */}
        </button>
      </div>
      <>{children}</>
    </div>
    </>
  );
};

export default OffCanvas;
