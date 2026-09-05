import React from 'react'

const NavLink = ({children, onClick, href='', py='', className="px-4 text-lg font-semibold hover:text-[#d9a84f] cursor-pointer"}) => {
  return (
    <a href={href} onClick={onClick} className={`${className} ${py}`}>{children}</a>
  )
}

export default NavLink