import React from 'react'
import img from '../assets/images/perf1.jpg'
import Button from './Button'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all duration-500 '>
        <img src={product.image} alt="" className='w-full h-64 rounded-xl object-cover'/>
        <div className='p-4 space-y-4'>
            <h3 className='text-xl md:text-2xl  font-bold'>{product.name}</h3>
            <p className='text-xl'>A floral symphony of gardenia, jasmine for lasting elegance</p>
            <div className='flex gap-4'>
              <Button>Shop Now</Button>
              
              <p className='text-xl md:text-2xl flex justify-center items-center'>{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard