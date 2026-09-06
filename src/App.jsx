import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Slider from './Sections/Slider'
import ProductCard from './Components/ProductCard'
import Feature from './Sections/Feature'
import Choose from './Sections/Choose'
import Testimonial from './Sections/Testimonial'
import Commitment from './Sections/Commitment'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Nav from './Components/Nav'
import NavLink from './Components/NavLink'
import Header from './Components/Header'
import Test from './Sections/Test'
import Demo from './Pages/Demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/demo' element={<Demo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
