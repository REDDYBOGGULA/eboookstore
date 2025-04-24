// src/components/UserProfile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={styles.error}>
        ⚠️ User not logged in
      </div>
    );
  }

  const name = user.displayName || 'shekhar';
  const email = user.email || 'Not available';

  return (
    <div style={styles.container}>
      <h2>👤 User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

const styles = {
  container: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '2rem auto',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  },
  error: {
    background: '#fff3f3',
    color: '#b00020',
    padding: '1rem',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '2rem auto',
    boxShadow: '0 0 10px rgba(255,0,0,0.2)',
    textAlign: 'center',
  },
};

export default UserProfile;
