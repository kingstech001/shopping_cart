import React from "react";
import Button from "./button";
import { FiHeart } from "react-icons/fi";

const ButtonContainer = () => {
  return (
    <div className="my-5">
        <p className="my-2 font-bold text-[#4A4D5E]">$ 14.99</p>
        <div className="flex items-center gap-2">
            <Button label={'Oder now'} style={'bg-[#4A4D5E] p-2 px-[45px]  rounded-xl text-white font-medium'}/>
            <Button label={<FiHeart style={{fill:'#4A4D5E'}}/>} style={'border-2 border-[#4A4D5E] rounded-xl text-[#4A4D5E] p-2 text-[20px] '}/>
        </div>
    </div>
  );
};

export default ButtonContainer;
