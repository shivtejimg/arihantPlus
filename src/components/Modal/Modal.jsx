export default function Modal({ setShowModal, children,size }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-3xl 2xl:max-w-4xl  p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">{children}</div>
        </div>
      </div>
    </div>
  );
}