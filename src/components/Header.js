import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
  <header className='flex flex-center flex-between'>
    <a href="" className='logo'>
        Food Dairy
    </a>
    <nav>
        <ul className='flex'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='Checkout'>Checkout</Link>
            </li>
        </ul>
    </nav>
  </header>
  )
}

export default Header