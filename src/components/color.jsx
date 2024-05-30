import React from "react";

const Color = () => {
    return (
        <div className="flex items-center">
            <p className="font-medium text-[#4A4D5E]">Color</p>
            <div className="flex">
                <div className='p-3 m-2 rounded-md w-fit bg-[#718CAA]'></div>
                <div className='p-3 m-2 rounded-md w-fit bg-[#4A4D5E]'></div>
                <div className='p-3 m-2 rounded-md w-fit bg-[#E687E3]'></div>
                <div className='p-3 m-2 rounded-md w-fit bg-[#E6B63A]'></div>
                <div className='p-3 m-2 rounded-md w-fit bg-[#5EA219]'></div>
            </div>
        </div>
    );
};

export default Color;
