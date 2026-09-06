import React from 'react'
import Button from './Button'

const ProductCard = ({image,title,desc,price,text}) => {
  return (
    <div className=' bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all duration-500 '>
        <img src={image} alt="" className='w-full rounded-xl object-cover'/>
        <div className='p-4 space-y-4'>
            <h3 className='text-xl md:text-2xl  font-bold'>{title}</h3>
            <p className='text-xl'>{desc}</p>
            <div className='flex gap-4'>
              <Button>{text}</Button>
              
              <p className='text-xl md:text-2xl flex justify-center items-center'>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard