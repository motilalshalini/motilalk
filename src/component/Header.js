import React from 'react'
import {navLink} from 'react-router-dom';

function Header() {
    return(
        <>
      <div className='navbar'>
        <ul>
            <li><navLink to= '/'>Home</navLink></li>
        </ul>
      </div>
        </>
    )
}


export default Header;