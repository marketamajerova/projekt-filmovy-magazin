import React, { Children } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <nav className='menu'>
          <Link to ="/home"> Home </Link>
          <Link to ="/reviews"> Reviews </Link>
          <Link to ="/articles"> Articles </Link>
          <Link to ="/movies"> Movies </Link>
        </nav>
    )
}

export default Menu;