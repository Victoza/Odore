import React from 'react'
import img from '../assets/images/perf1.jpg'
import Button from './Button'

const ProductCard = () => {
  return (
    <div className=' bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all duration-500 '>
        <img src={img} alt="" className='w-full rounded-xl object-cover'/>
        <div className='p-4 space-y-4'>
            <h3 className='text-xl md:text-2xl  font-bold'>Celestial Blossom</h3>
            <p className='text-xl'>A floral symphony of gardenia, jasmine for lasting elegance</p>
            <div className='flex gap-4'>
              <Button>Shop Now</Button>
              
              <p className='text-xl md:text-2xl flex justify-center items-center'>$250</p>
                {/* <button className='bg-orange-200 p-4 rounded-lg text-white font-semibold'>Shop Now</button>
                <button className=' p-4 rounded-lg text-black font-semibold'>$250</button> */}
            </div>
        </div>
    </div>
  )
}

export default ProductCard