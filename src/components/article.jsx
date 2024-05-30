import React from 'react'
import Rating from './rating'
import Color from './color'
import Size from './size'
import ButtonContainer from './buttonContainer'


const Article = () => {
  return (
    <div className='bg-[#E4E6F2] rounded-l-xl p-10 w-[300px]'>
    <h1 className='text-[40px] font-medium leading-none text-[#474A5D]'>Soft fleece cat sweater</h1>
    <Rating />
    <Color />
    <Size />
    <ButtonContainer />
    </div>
  )
}

export default Article