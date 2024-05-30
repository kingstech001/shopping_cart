import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="flex items-center gap-2 my-5">
      <FaStar className="text-[#F3BC2A]" style={{fill:'#F3BC2A'}}/>
      <FaStar className="text-[#F3BC2A]" style={{fill:'#F3BC2A'}}/>
      <FaStar className="text-[#F3BC2A]" style={{fill:'#F3BC2A'}}/>
      <FaStar className="text-[#F3BC2A]" style={{fill:'#F3BC2A'}}/>
      <FaStar className="text-[#F3BC2A]" style={{fill:'#F3BC2A'}}/>
      <p className="text-[#4A4D5E]">435 ratings</p>
    </div>
  );
};

export default Rating;
