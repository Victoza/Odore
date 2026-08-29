import React from 'react'
import img from '../assets/images/commit.png'
import Button from '../Components/Button'

const Commitment = () => {
  return (
    <section className='py-8'>
        <div className='bg-[#ffff] items-center max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-8 lg:px-12'>
          <div>
            <img src={img} alt="" className='w-120'/>
          </div>
          <div className='space-y-6 px-4'>
            <h2 className='text-2xl md:text-3xl'>A Commitment To Purity</h2>
            <p className='max-w-lg'>We believe in a sustainable luxury. Every bottle of Odera Perla is crafted with responsibly sourced ingredients, ensuring a lasting impact on you not on the environment.</p>
            <Button variant='black'>Learn More</Button>
          </div>
        </div>
    </section>
  )
}

export default Commitment