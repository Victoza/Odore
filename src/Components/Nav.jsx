import React from 'react'

const Nav = ({children,class1,class2}) => {
  return (
    <nav className={class1}>
        <ul className={class2}>
            {children}
        </ul>
    </nav>

  )
}

export default Nav