import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="nagadb__header section__padding" id="home">
      <div className="nagadb__header-content">
        <h1>NagaDB</h1>
        <p>The world's first</p>
        <p>open-sourced veterans database</p>
        
        <div className="nagadb__header-content__buttons">
          <a href="/#about">
            <button type='button'>About</button>
          </a>
          <Link to="/veterans">
            <button type='button'>Veterans</button>
          </Link>
          <Link to="/cemeteries">
            <button type='button'>Cemeteries</button>
          </Link>
        </div>
      </div>
      <div className="nagadb__header-image">
        <img src={logo} alt="logo" />
        
      </div>
      
    </div>
  )
}

export default Header