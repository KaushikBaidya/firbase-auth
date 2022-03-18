import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function NavBar(props) {
  const [errorMsg, setErrorMsg] = useState('')

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setErrorMsg('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <NavLink exact to="/" className="nav-logo">
              Authentication
            </NavLink>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            {props.name && (
              <li className="nav-item" onClick={handleSignOut}>
                Sign Out
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
