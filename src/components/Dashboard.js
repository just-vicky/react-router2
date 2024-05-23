import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const user = { name: 'John Doe', role: 'Admin' }; // Example user data

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet context={{ user }} />
    </div>
  );
};

export default Dashboard;
