import React from 'react'

const Button = ({children,variant="orange"}) => {
    const colors = {
        orange:"bg-[#efad59]",
        black:'bg-black',
        
    }
  return (
    <button className={`${colors[variant]} skew-x-6deg rounded-xl px-6 py-2 text-xl md:text-2xl text-white shadow-md hover:scale-105 duration-300 transition cursor-pointer`}>
        <span className='inline-block skew-x-6deg'>
            {children}
        </span>
    </button>
  )
}

export default Button