const PdfModal = ({ children, showModal, setShowModal }) => {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center">
        <div className="relative w-full bg-transparent">
          <div className=" sm:flex justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
