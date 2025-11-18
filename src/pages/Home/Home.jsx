import React from 'react'
import './home.css'
import logo from '../../assets/logo_logo.png'

const Home = () => {
  return (
    <section className='hero'>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className='text'>
          <img className="blink"  src={logo} alt="" />
          <h1  >Nayla & Caike </h1>
        </div>
          
        <h1 >Nosso Casamento</h1>
        <p >Bem-vindos ao nosso álbum especial</p>
      </div>
    </section>
  )
}

export default Home