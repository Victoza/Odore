import React from 'react'
import about from '../assets/images/about.png'
import Button from '../Components/Button'
const About = () => {
  return (
    <section className='py-6 bg-white' id='about'>
        <div className='flex max-w-7xl mx-auto flex-col lg:flex-row justify-center items-center'>
            <div className='w-full hidden lg:block'>
                <img src={about} alt=""/>
            </div>
            <div className='w-full md:px-36 p-6 space-y-6'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>About Us</h2>
                <p className='text-2xl'>Our Legacy of Luxury</p>
                <p className='max-w-xl'>At OdorePerla, we blend artisanal craftsmanship with the finest ingredients. Each scent is a journey, a sensory experience that embodies grace and sophistication.</p>
                <Button variant='black'>Learn More</Button>
            </div>
        </div>
    </section>
  )
}

export default About