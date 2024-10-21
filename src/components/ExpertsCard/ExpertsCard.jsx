import React from 'react'
import founder1 from "../../assets/img/founder1.png";

const ExpertsCard = () => {
  return (
    <div className="hover:scale-105 pb-4 group duration-300 relative before:absolute before:w-8 before:h-1 before:rounded-md before:bg-primary before:bottom-2 before:-translate-y-16 before:opacity-0 before:hover:opacity-100 before:hover:translate-y-0 before:transition-all before:duration-300 p-4">
    <div className="size-[120px] md:size-[160px]  rounde-full  *:size-full *:object-cover">
      <img src={founder1} alt="" />
    </div>
    <p className="text-sm font-bold text-black mt-4 duration-300 group-hover:text-primary">DC Pandey</p>
    <div className="text-sm font-semibold text-gray1 ">Author and JEE Mentor</div>
    <div className="text-xs text-gray1 font-semibold">Physics classes for IIT JEE/NEET Aspirants.</div>
   </div>
  )
}

export default ExpertsCard;