import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
