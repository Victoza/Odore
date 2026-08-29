import React from 'react'
import { FcCallback } from 'react-icons/fc'
import img from '../assets/images/contact.png'
import { BiChat, BiPhone, BiTag, BiUser } from 'react-icons/bi'
import { RiCustomerService2Line } from "react-icons/ri";
import { FiHeart, FiShield } from "react-icons/fi";
import { MdEmail } from 'react-icons/md'
import Button from '../Components/Button'

const Contact = () => {
  return (
    <section className='py-12'>
      <div className='relative overflow-hidden max-w-7xl mx-auto p-6 md:p-12  bg-[#feecd9] flex flex-col lg:flex-row gap-8'>
            <div className='absolute -top-4 -left-4 border-2 border-amber-500 rounded-full size-16'/>
            <div className='absolute -top-8 -left-8 border-8 border-amber-500 rounded-full size-28'/>
        {/* First half */}
        <div className='flex flex-col w-40%' >
          <p className='text-xl font-medium py-4 z-10'>GET IN TOUCH</p>
          <h2 className='text-2xl md:text-3xl font-medium py-4'>We'd Love To Hear From You</h2>
          <p className='max-w-xl font-light py-4'>Have a question abput our fragrances, your order or just want to say hello? We're here to help</p>
          {/* Icons begin*/}
          <div className='space-y-6'>
            <div className='flex items-center gap-6'>
              <div className='bg-transparent border border-orange-200 size-12 rounded-full flex justify-center items-center'><RiCustomerService2Line size={24} className='text-orange-300'/></div>
              <div className='font-light'>
                <p>Quick Response</p>
                <p>We reply within 24hours</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='bg-transparent border border-orange-200 size-12 rounded-full flex justify-center items-center'><FiShield size={24} className='text-orange-300'/></div>
              <div className='font-light'>
                <p>Quick Response</p>
                <p>We reply within 24hours</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='bg-transparent border border-orange-200 size-12 rounded-full flex justify-center items-center'><FiHeart size={24} className='text-orange-300'/></div>
              <div className='font-light'>
                <p>Quick Response</p>
                <p>We reply within 24hours</p>
              </div>
            </div>
            {/* Icons end */}
          </div>
          <img src={img} alt="" className='w-120 mt-auto'/>
        </div>
        {/* Second half  */}
        <div className='bg-white p-6 lg:px-8 rounded-2xl shadow-lg w-60%'>
          <h3 className='mb-6 text-2xl font-medium'>Send Us A Message</h3>
          <p className='mb-12 text-xl font-light'>Fill out the form and we'll get back to you as soon as possible.</p>
          <form action="" className='space-y-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

              <div className='relative flex items-center'>
                <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input type="text" placeholder='Full Name' className='w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'/>
              </div>

              <div className='relative flex items-center'>
                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input type="text" placeholder='Full Name' className='w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'/>
              </div>
            </div>
            <div className='relative flex items-center'>
                <BiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input type="text" placeholder='Phone Number(Optional)'className='w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'/>
              </div>
            <div className='relative flex items-center'>
                <BiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
                <input type="text" placeholder='Subject' className='w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'/>
            </div>
            <div className='relative flex items-center'>
                <BiChat className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
                <textarea name="" id="" placeholder='Your Message'className='w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'></textarea>
            </div>
            <div className='mt-12'>
              <Button variant='black'>Send Message →</Button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact