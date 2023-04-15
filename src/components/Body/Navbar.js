import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">BOOKSTORE CMS</div>
          <ul>
            <li><NavLink to="/">Books</NavLink></li>
            <li><NavLink to="/Categories">Categories</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
