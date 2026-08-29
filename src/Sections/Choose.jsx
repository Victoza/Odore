import React from 'react'
import image from '../assets/images/perf1.jpg'
import image1 from '../assets/images/new1.jpg'
import image2 from '../assets/images/new2.jpg'
import image3 from '../assets/images/new4.jpg'

const Choose = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col lg:flex-row  py-8 px-4 md:px-6 lg:px-8 gap-6 bg-linear-to-r from-white via-white to-[#fff4e8]'>
        <div className='w-40% grid grid-cols-2 gap-4'>
           <div className='flex flex-col gap-4'>
               <img src={image3} alt="" className='h-64 rounded-2xl object-cover'/>
               <img src={image1} alt="" className='h-48 rounded-2xl object-cover'/>
           </div> 
           <div className='flex flex-col gap-4'>
               <img src={image} alt="" className='h-48 rounded-2xl object-cover'/>
               <img src={image2} alt="" className='h-64 rounded-2xl object-cover'/>
           </div> 
           <div>
            
           </div> 
        </div> 
        {/* text */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='relative p-4 pt-6 bg-transparent rounded-2xl space-y-4'>
              <p className='bg-white inline-block md:text-md lg:text-lg shadow-md p-4 rounded-2xl font-semibold text-xl text-orange-200'>01</p>
              <h3 className='text-2xl'>Artistic Design</h3>
              <p>Every fragrance is a masterpiece, crafted with precision by world class perfumes.</p>
            </div>
            <div className='relative p-4 bg-transparent rounded-2xl space-y-4'>
              <span className='bg-white inline-block shadow-md p-4 rounded-2xl font-semibold text-xl text-orange-200'>02</span>
              <h3 className='text-2xl'>Organic Ingredients</h3>
              <p>Sourced from Nature's finest, each note embodies sophistication.</p>
            </div>
            <div className='relative p-4 pt-6 bg-transparent rounded-2xl space-y-4'>
              <p className='bg-white inline-block shadow-md p-4 rounded-2xl font-semibold text-xl text-orange-200'>03</p>
              <h3 className='text-2xl'>Sustainable Elegance</h3>
              <p>Indulge guilt free with fragrances designed to honour the planet.</p>
            </div>
            <div className='relative p-4 pt-6 bg-transparent rounded-2xl space-y-4'>
              <p className='bg-white inline-block shadow-md p-4 rounded-2xl font-semibold text-xl text-orange-200'>04</p>
              <h3 className='text-2xl'>Exclusive Collections</h3>
              <p>Discover scents as rare and unique as the moments they inspire.</p>
            </div>
        </div> 
    </section>
  )
}

export default Choose