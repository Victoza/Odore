import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import {  FaFacebookF, FaLinkedin } from 'react-icons/fa';
import {  GoLocation } from "react-icons/go";
import { LiaLinkedin } from 'react-icons/lia';
import {  MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  return (
    <section className='py-8'>
        <div className='px-6 md:px-8 lg:px-10 max-w-7xl mx-auto'>
            
            <div className='flex items-center gap-1'>
                <h3 className='flex text-xl font-semibold pb-4'>Odore Perla</h3>
            </div>
            <h3 className='text-orange-200 text-xl pb-8'>Where Luxury meets the art of fragrance</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-center w-full'>
                <div className='space-y-6 w-60%'>
                    <p className='font-medium'>Alamat Kami</p>
                    <div className='flex items-center gap-4'>
                        <GoLocation className='text-3xl  text-orange-200'/>
                        <p className='font-light'>Jalan Swandama Raya Kampung Baru IV No. 1 Jarkata - 12250 Indonesia</p>
                    </div>
                </div>
                <div className='w-20%'>
                    <h3 className='text-xl font-semibold pb-8'>Contact Info</h3>
                    <div className='flex items-center gap-4 py-2'>
                        <span><MdOutlineMail size={24} className='text-orange-300'/></span>
                        <span>support@odoreperla.com</span>
                    </div>
                    <div className='flex items-center gap-4 py-2'>
                        <span><BiPhoneCall size={24} className='text-orange-300'/></span>
                        <span>0877-4904-5697</span>
                    </div>
                </div>
                <div className='w-20%'>
                    <h3 className='text-xl font-semibold pb-8'>Social Media</h3>
                    <div className='flex gap-2'>
                        <span className='bg-amber-100 size-12 rounded-full flex items-center justify-center'>
                            <FaFacebookF size={24}/>
                        </span>
                        <span className='bg-amber-100 size-12 rounded-full flex items-center justify-center'>
                            <BsTwitterX size={24}/>
                        </span>
                        <span className='bg-amber-100 size-12 rounded-full flex items-center justify-center'>
                            <BsInstagram size={24}/>
                        </span>
                        <span className='bg-amber-100 size-12 rounded-full flex items-center justify-center'>
                            <FaLinkedin size={24}/>
                        </span>
                    </div>
                </div>
        </div>
        <div className='flex gap-8 py-6'>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
        </div>
        </div>
    </section>
  )
}

export default Footer