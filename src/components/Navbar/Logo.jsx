// import React from 'react'
// import Menu from '../../assets/Menu Icon.png'
// import RB from '../../assets/RedBuyers.png'
// import './Logo.css'

// const Logo = () => {
//   return (
//    <>
//    <div>
//     <img src={Menu} alt="" id='ham'/>
//    <img src={RB} width="109px" height="35px" alt='menu-icon' max-height= "50px"/>
//    </div>
//    </> 
//   )
// }

// export default Logo

import React, { useState } from 'react';
import MenuIcon from '../../assets/Menu Icon.png';
import CloseIcon from "../../assets/iconamoon_close.png"
import RB from '../../assets/RedBuyers.png';
import './Logo.css';

const Logo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div id="Logo">
        <img src={menuOpen ? CloseIcon : MenuIcon} alt="" id="ham" onClick={menuOpen ? closeMenu : toggleMenu} />
        <img src={RB} width="109px" height="35px" alt="menu-icon" max-height="50px" />
      </div>
      {menuOpen && (
        <div className="menu">
          <div className='menuIconClose'>
            <h1>Menu</h1>
          <img src={CloseIcon}  alt=""  id='closeIcon' onClick={closeMenu}/>
          </div>
          <ul>
            <h5>BUY & SELL</h5>
            <li>Sell</li>
            <li>Browse Home</li>
            <li>Buy</li>
            <li>Down Payment</li>
            <h5>COMPANY</h5>
            <li>About</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <h5>LOCATION</h5>
            <li>Greater Toronto Area</li>
            <li>Region of Peel</li>
            <li>Region of Hamilton</li>
            <li>Region of Waterloo</li>
            <li id='map'>View All Locations</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Logo;
