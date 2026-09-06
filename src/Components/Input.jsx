import React from 'react'

const Input = ({children,placeholder}) => {
  const className = 'w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-orange-400'
  
  return (
    <div className='relative flex items-center'>
        {children}
        <input type="text" placeholder={`${placeholder}`} className={className}/>
    </div>
  )
}

export default Input