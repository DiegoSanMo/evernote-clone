import React from 'react';
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* <li><Link >Sass</Link></li>
        <li><Link >Components</Link></li> */}
        <li><NavLink to="favorites">JavaScript</NavLink></li>
      </ul>
    </div>
  </nav>
  )
}
