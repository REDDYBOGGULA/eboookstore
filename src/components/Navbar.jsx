// src/components/Navbar.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <span style={{ marginRight: '1rem' }}>
        {user ? `Logged in as: ${user.email}` : 'Not logged in'}
      </span>
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;



