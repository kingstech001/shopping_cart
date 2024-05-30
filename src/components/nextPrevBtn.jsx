import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const NextPrevBtn = () => {
  return (
    <div className='flex items-center'>
        <button><FaArrowLeft /></button>
        <div className='flex items-center my-5'>
            <div className='w-fit p-1.5 bg-black m-2 rounded'></div>
            <div className='w-fit p-1.5 bg-[#DADCE9] m-2 rounded'></div>
            <div className='w-fit p-1.5 bg-[#DADCE9] m-2 rounded'></div>
            <div className='w-fit p-1.5 bg-[#DADCE9] m-2 rounded'></div>
            <div className='w-fit p-1.5 bg-[#DADCE9] m-2 rounded'></div>
        </div>
        <button><FaArrowRight /></button>
    </div>
  )
}

export default NextPrevBtn