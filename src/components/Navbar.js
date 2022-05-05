import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ESPM 50AC
          </Link> 

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>

          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Environment' className='nav-links' onClick={closeMobileMenu}>
                Environmental Reason
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Econ' className='nav-links' onClick={closeMobileMenu}>
                Economic Reason
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Conclusion' className='nav-links' onClick={closeMobileMenu}>
                Conclusion
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Reference' className='nav-links' onClick={closeMobileMenu}>
                Reference
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar