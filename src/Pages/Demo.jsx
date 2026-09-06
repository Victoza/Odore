import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import { NavLink } from 'react-router-dom'
import Input from '../Components/Input'
import image from '../assets/images/perf1.jpg'
import ProductCard from '../Components/ProductCard'
import Button from '../Components/Button'
import { BiUser } from 'react-icons/bi'


const Demo = () => {
  return (
    <div>
      <div>
        <Header>Demo</Header>
      </div> 


        <div className='pt-32 mb-36 px-8'>
          <Input placeholder="Enter your Full Name">
            <BiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
          </Input>
        </div>


        <div className='my-24 flex justify-center gap-'>
          <Button>Order Now</Button>
          <Button variant='black'>Order Now</Button>
        </div>

        
        <div className='w-90 mx-auto'>
          <ProductCard className='mt-32' image={image} title="Celestial Blossom" desc="A floral symphony of gardenia, jasmine for lasting elegance" price="$250" text="Shop Now"/>
        </div>
    </div>
  )
}

export default Demo