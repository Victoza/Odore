import React, { useState, useEffect } from 'react'
import { BiCart, BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import Nav from './Nav';
import NavLink from './NavLink';

const Header = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const closeMenu = () => { setIsMenuOpen(false)}

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className='fixed top-0 left-0 right-0 z-30'>
            <div className={`flex justify-between items-center max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-5 lg:px-8 transition-all duration-300 ${
                isScrolled ? 'bg-gray-100 shadow-md' : 'bg-transparent'
            }`}>
                
                <h2 className='flex items-center text-xl md:text-2xl lg:text-3xl font-semibold py-1 px-4 bg-white rounded-full'>
                    {children}
                    <span className='text-sm text-[#d9a84f]'>
                        <GoDotFill/>
                    </span>
                </h2>

                <Nav class1='hidden lg:block' class2='flex justify-evenly'>
                    <NavLink onClick={closeMenu}>Home</NavLink>
                    <NavLink onClick={closeMenu}>About</NavLink>
                    <NavLink onClick={closeMenu}>Products</NavLink>
                    <NavLink onClick={closeMenu}>Reviews</NavLink>
                    <NavLink onClick={closeMenu}>Contact</NavLink>
                </Nav>

                <div className='hidden md:flex items-center bg-amber-300/5 rounded-full px-4 py-2 gap-4'>
                    <div className='flex items-center gap-2'>
                        <input 
                            type="text" 
                            placeholder='Search' 
                            className='rounded-full px-4 py-1 outline-none focus:outline-gray-200'
                        />
                        <BiSearch size={18} className='cursor-pointer hover:scale-105'/>
                    </div>

                    <div>
                        <BiCart size={24}/>
                    </div>
                </div>

                <button 
                    onClick={() => {setIsMenuOpen(prev => !prev)}} 
                    className='block lg:hidden'
                >
                    {isMenuOpen ? 
                        <RxCross2 size={24}/> : 
                        <GiHamburgerMenu size={24}/>
                    }
                </button>

            </div>

            {isMenuOpen && (
                <>
                  <Nav class1='lg:hidden py-6 bg-gray-50' class2='flex flex-col text-center justify-evenly px-6' >
                    <NavLink onClick={closeMenu} href='#home' py='py-2'>Home</NavLink>
                    <NavLink onClick={closeMenu} href='#about' py='py-2'>About</NavLink>
                    <NavLink onClick={closeMenu} href='#products' py='py-2'>Products</NavLink>
                    <NavLink onClick={closeMenu} href='#reviews' py='py-2'>Reviews</NavLink>
                    <NavLink onClick={closeMenu} href='#contact' py='py-2'>Contact</NavLink>
                </Nav>  
            
                
               </> 
            )}

        </section>
    )
}

export default Header