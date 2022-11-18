import React from 'react'
import './home.css'
import Navbar from '../components/navbar/Navbar'
import AboutImg from '../assets/images/about-img.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='hero'>
            <Navbar/>
            <div className="header">
                <h3>Traditional Ethiopian Food</h3>
                <h1>WELCOME</h1>
                <button className='btn'>Our Menu</button>
            </div>
            <div/>
        </div>
        <div className='about'>
            <img src={AboutImg} alt=""/>
            <div className="description">
                <h1>About Us</h1>
                <p>Our families love for food and cooking started this whole idea of opening our own restaurants here in London. Our Mother who grew up in Latin America didn’t have any clue about Ethiopian Cuisine but once she came back to Ethiopia she started experimenting with different dishes and that lead to perfecting it. She worked in restaurant for more than a decade.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home