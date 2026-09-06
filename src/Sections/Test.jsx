import React from 'react'
import Header from '../Components/Header'
import Input from '../Components/Input'
import { CgMail } from 'react-icons/cg'
import ProductCard from '../Components/ProductCard'
import Button from '../Components/Button'

const Test = () => {
  return (
    <div>
        <Header/>
        <Input placeholder="Enter your mail"><CgMail/></Input>
        <Input placeholder="Enter your mail"><CgMail/></Input>
        <Input placeholder="Enter your mail"><CgMail/></Input>
        <Button>HELLOO</Button>
        <ProductCard/>
    </div>
  )
}

export default Test