import React from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'
import img from '../assets/images/removebg.png'

// import HeroContent from '../Components/HeroContent'

const Hero = () => {
  return (
    <section className='relative max-w-7xl mx-auto pt-18 bg-[#f7f6f3] overflow-hidden' id='home'>
        <div className='px-4 md:px-8 lg:px-16'>
            <div className="absolute -top-20 -left-28 h-75 w-75 rounded-full border border-[#d9b87b]" />
            <div className="absolute -top-20 -left-28 h-67.5 w-67.5 rounded-full border border-[#d9b87b]" />
            <div className="absolute -top-20 -left-28 h-60 w-60 rounded-full border border-[#d9b87b]" />
            <div className="absolute -top-20 -left-28 h-85 w-85 rounded-full border border-[#d9b87b]" />
            <div className="absolute -top-20 -left-28 h-95 w-95 rounded-full border border-[#d9b87b]" />
            <Header>Odore Perla</Header>
            {/* Hero content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-12 pt- items-start pt-8'>
                <div className='self-start md:pt-8 lg:pt-16 space-y-4'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight'>A Symphony <br/> of Scent</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis neque earum eos, cupiditate quo. Nesciunt, architecto veritatis.</p>
                    <div className='flex gap-4'>
                        {/* <button className='bg-[#d9a84f] rounded-md p-2'>Shop Now</button>
                        <button className='bg-black rounded-md p-2 text-white'>View Details</button> */}
                        <Button>Shop Now</Button>
                        <Button variant='black'>View Details</Button>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-xl font-semibold'>Our Experts</h3>
                        <p className='max-w-xs'>Harness the power of natural ingredients to standout your personality</p>
                        <p className='text-[#d9b87b] text-lg'>Explore More →</p>
                    </div>
                </div>
                <div className='flex justify-center md:pl-8'>
                    {/* Image carousel */}
                    <img src={img} alt="" className='w-60 max-w-sm md:max-w-md lg:max-w-lg object-contain'/>
                    {/* buttons */}
                </div>
                {/* Slider */}
                
            </div>
        </div>
        

    </section>
  )
}

export default Hero