import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="navbar">
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header