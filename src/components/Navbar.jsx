import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-list'>
            <li><Link to='/'>🏠Home</Link></li>
            <li><Link to='/contacto'>📒Contacto</Link></li>
        </ul>
        <h2 className='logo'>Happy Cake 🍰</h2>
        
    </div>
  )
}

export default Navbar