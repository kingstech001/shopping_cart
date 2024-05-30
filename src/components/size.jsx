import React from 'react'

const Size = () => {
    return (
        <div className='flex items-center'>
            <p className='text-[#4A4D5E] font-medium'>Size</p>
            <div className="flex mx-2">
                <div className='text-[#4a4d5e] px-2 m-2 rounded-md w-fit border-2 border-[#4A4D5E]'>S</div>
                <div className='text-[#4a4d5e] px-2 m-2 rounded-md w-fit'>M</div>
                <div className='text-[#4a4d5e] px-2 m-2 rounded-md w-fit'>L</div>
                <div className='text-[#4a4d5e] px-2 m-2 rounded-md w-fit'>XL</div>
            </div>
        </div>
    )
}

export default Size