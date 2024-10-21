const CustomButtonSecondary = ({ children, selected, onClick }) => {
  console.log({ selected });
  return (
    <button
      type="button"
      className={`min-w-[126px] sm:min-w-[200px] px-5 max-sm:py-2 sm:h-[55px]  2xl:h-[75px] border-secondary border rounded-full max-[392px]:text-xs text-sm sm:text-xl 2xl:text-2xl font-semibold !leading-normal ${selected
        ? "bg-secondary text-white"
        : "text-secondary"
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButtonSecondary;