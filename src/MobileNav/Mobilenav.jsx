import React, { useState } from 'react';
import './Mobilenav.css';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className="menu-class">
      <ul>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/career">Career</Link>
        
      </ul>
    </div>
  );
}

function MobileMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-item">
      <div className="tap-menu">
        <button onClick={toggleMenu} className="tap-me-menu">
        <IoMenu />
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default MobileMenu;
