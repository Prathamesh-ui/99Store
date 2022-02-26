import React from 'react'
import Carousel from '../components/Carousal'
import Navbar from '../components/Navbar'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
        <Navbar />
        <Carousel />
    </div>
  )
}

export default Header