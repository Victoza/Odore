import React, { useState, useEffect } from 'react'
import { BiCart, BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

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
                    Odore Perla
                    <span className='text-sm text-[#d9a84f]'>
                        <GoDotFill/>
                    </span>
                </h2>

                <nav className='hidden lg:block'>
                    <ul className='flex justify-evenly'>
                        <li className='px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer'>Home</li>
                        <li className='px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer'>Collection</li>
                        <li className='px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer'>Deals</li>
                        <li className='px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer'>Reviews</li>
                        <li className='px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer'>Contact</li>
                    </ul>
                </nav>

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
                <nav className='lg:hidden py-6 bg-gray-50'>
                    <ul className='flex flex-col text-center justify-evenly px-6'>
                        <li className='px-4 py-2 text-lg font-semibold rounded-full hover:bg-orange-200 hover:text-[#d9a84f] cursor-pointer'>Home</li>
                        <li className='px-4 py-2 text-lg font-semibold rounded-full hover:bg-orange-200 hover:text-[#d9a84f] cursor-pointer'>Collection</li>
                        <li className='px-4 py-2 text-lg font-semibold rounded-full hover:bg-orange-200 hover:text-[#d9a84f] cursor-pointer'>Deals</li>
                        <li className='px-4 py-2 text-lg font-semibold rounded-full hover:bg-orange-200 hover:text-[#d9a84f] cursor-pointer'>Reviews</li>
                        <li className='px-4 py-2 text-lg font-semibold rounded-full hover:bg-orange-200 hover:text-[#d9a84f] cursor-pointer'>Contact</li>
                    </ul>
                </nav>
            )}

        </section>
    )
}

export default Header