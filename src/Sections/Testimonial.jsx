import React, { useState } from 'react'
import image1 from '../assets/images/img1.png'
import image2 from '../assets/images/img2.png'
import image3 from '../assets/images/img3.png'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Testimonial = () => {
    const testimonials = [
        {
        image:image1,
        title:"Great Service",
        message:"Noir Elixir is pure magic ...",
        name:"Sopjia L.",
        role:"CEO of Angria Company"    
        },
        {
        image:image2,
        title:"Absolutely Amazing",
        message:"The fragrance is incredible and lasts all day",
        name:"Jane D.",
        role:"Creative Director"    
        },
        {
        image:image3,
        title:"Great Service",
        message:"Noir Elixir is purely fantastic ...",
        name:"Sopjia L.",
        role:"CEO of Angria Company"    
        }
    ]
    const[current, setCurrent] = useState(0)
    const nextSlide = ()=>{
        setCurrent((current + 1)% testimonials.length)
    }
    const prevSlide = () => {
        setCurrent((current - 1 + testimonials.length)% testimonials.length)
    }
    const testimonial = testimonials[current]
  return (
    <section className='py-8 px-6 md:px-8 lg:px-16'>
        <div className='relative bg-[#fdf6ed] rounded-2xl max-w-7xl mx-auto py-16 overflow-hidden'>
            <div className='absolute -top-4 -left-4 border-2 border-amber-500 rounded-full size-16'/>
            {/* <div className='absolute -top-8 -left-8 border border-amber-500 rounded-full size-20'/> */}
            <div className='absolute -top-8 -left-8 border-8 border-amber-500 rounded-full size-28'/>
                <h2 className='text-center text-2xl md:text-3xl font-semibold'>What Our Customers Say</h2>
            <div className='flex flex-col md:flex-row p-16 justify-center gap-6 lg:gap-12'>
                <img src={testimonial.image} alt="" className='w-80 rounded-2xl'/>
                <div className='space-y-4 relative'>
                    <h3 className='text-2xl font-semibold'>{testimonial.title}</h3>
                    <p className='max-w-lg text-xl font-light'>{testimonial.message}</p>
                    <div>
                        <p className='text-2xl'>{testimonial.name}</p>
                        <p>{testimonial.role}</p>
                    </div>
                </div>
                
            </div>
            <div className='flex justify-center gap-6'>
                <button onClick={nextSlide} className='size-12 p-4 text-black flex items-center justify-center rounded-full bg-white shadow-lg'><BsArrowLeft size={24}/></button>
                <button onClick={prevSlide} className='size-12 p-4 text-white flex items-center justify-center rounded-full bg-orange-400 shadow-lg'><BsArrowRight/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial