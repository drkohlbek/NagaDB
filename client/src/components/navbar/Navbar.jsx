import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/logo-withtext.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nagadb__navbar">
      <div className="nagadb__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nagadb__navbar-links">
        <div className="nagadb__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/veterans">Veterans</Link></p>
          <p><Link to="/cemeteries">Cemeteries</Link></p>
          <p><a href="https://www.projectnaga.org/get-involved-1" target="_blank" rel="noopener noreferrer">Contact</a></p>
        </div>
        <div className="nagadb__navbar-site">
          <a href="https://www.projectnaga.org" target="_blank" rel="noopener noreferrer">
            <button type="button">Project NAGA®</button>
          </a>
        </div>
        <div className="nagadb__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="nagadb__navbar-menu_container shadow-pop-tr">
              <div className="nagadb__navbar-menu_container-links">
                <p className='underline'><Link to="/">Home</Link></p>
                <p className='underline'><Link to="/veterans">Veterans</Link></p>
                <p className='underline'><Link to="/cemeteries">Cemeteries</Link></p>
                <p className='underline'><a href="https://www.projectnaga.org/get-involved-1" target="_blank" rel="noopener noreferrer">Contact</a></p>
              </div>
              <div className="nagadb__navbar-menu_container-links-site">
                <a href="https://www.projectnaga.org" target="_blank" rel="noopener noreferrer">
                  <button type="button">Project NAGA®</button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar