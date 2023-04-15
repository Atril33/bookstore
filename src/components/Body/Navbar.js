import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <header>
        <div className="logo">BOOKSTORE CMS</div>
        <nav>
          <ul>
            <li className="link-item"><NavLink to="/" style={{ color: '#e8e8e8', fontSize: '17px' }}>Books</NavLink></li>
            <li className="link-item"><NavLink to="/Categories" style={{ color: '#e8e8e8', fontSize: '17px' }}>Categories</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
