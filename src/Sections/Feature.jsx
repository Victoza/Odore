import React from 'react'
import ProductCard from '../Components/ProductCard'
import image1 from '../assets/images/new1.jpg'
import image2 from '../assets/images/new2.jpg'
import image3 from '../assets/images/new3.jpg'
const Feature = () => {
  const featured = [
    {
      image:image1,
      name:"jkf",
      description:""
    },
    {
      image:image2,
      name:"nemn",
      description:""
    },
    {
      image:image3,
      name:"nemn",
      description:""
    }
  ]
  return (
    <section className='py-12' id='products'>
        <div className='mx-auto max-w-7xl px-8 md:px-12 lg:px-24 space-y-8'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Featured Collection</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-8'>
              {featured.map((product,index)=>(
                <ProductCard key={index} product={product}/>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Feature