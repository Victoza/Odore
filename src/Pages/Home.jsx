import React from 'react'
import Hero from '../Sections/Hero'
import Slider from '../Sections/Slider'
import About from '../Sections/About'
import Feature from '../Sections/Feature'
import Choose from '../Sections/Choose'
import Testimonial from '../Sections/Testimonial'
import Commitment from '../Sections/Commitment'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Slider/>
        <About/>
        <Feature/>
        <Choose/>
        <Testimonial/>
        <Commitment/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home