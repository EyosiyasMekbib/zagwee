import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import {AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='navs'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Contact</a>
        </nav>
        <a href="#" className="logo"><img src={logo} alt="logo" height={'140vh'}/></a>
        <div className="icons">
            <a href="#"><AiOutlineInstagram size={'1.5em'} color={'white'} style={{paddingLeft: "1em" }}/></a>
            <a href="#"><AiFillFacebook size={'1.5em'} color={'white'} style={{paddingLeft: "1em" }}/></a>
        </div>
    </div>
  )
}

export default Navbar