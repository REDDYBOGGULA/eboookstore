// src/components/Home.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import UserProfile from './UserProfile'; // 


function Home() {
  const navigate = useNavigate();
  const [showGenres, setShowGenres] = useState(false);

  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction',
    'Fantasy', 'Mystery', 'Romance', 'Biography', "Children's Books"
  ];

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/')).catch(console.error);
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>📚 Bookstore</div>
        <div style={styles.navLinks}>
          <span style={styles.navItem}>Home</span>
          <span style={styles.navItem}>Shop</span>
          <span style={styles.navItem}>Dashboard</span>
          <span style={styles.navItem}>About</span>
          <span style={styles.navItem}>Contact</span>
        </div>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </nav>

      {/* User Profile */}
      <div style={styles.profileBox}>
        <UserProfile />
      </div>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Discover Your Next Read</h1>
          <p style={styles.heroDesc}>
            Your one-stop online bookstore for browsing, managing, and discovering amazing books.
          </p>
          <button style={styles.shopButton} onClick={() => setShowGenres(!showGenres)}>
            {showGenres ? 'Hide Genres' : 'Show Genres'}
          </button>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
          alt="Books Illustration"
          style={styles.heroImage}
        />
      </header>

      {/* Genres Section */}
      {showGenres && (
        <section style={styles.genres}>
          <h2>Browse by Genre</h2>
          <div style={styles.genreGrid}>
            {genres.map((genre, index) => (
              <Link
                key={index}
                to={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`}
                style={styles.genreItem}
              >
                {genre}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    fontWeight: 500,
  },
  navItem: {
    cursor: 'pointer',
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  profileBox: {
    margin: '1rem 2rem',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    maxWidth: '420px',
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem 2rem',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  heroText: {
    flex: 1,
    paddingRight: '2rem',
    minWidth: '280px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'red',
  },
  heroDesc: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#555',
  },
  shopButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  heroImage: {
    width: '200px',
    height: 'auto',
    marginTop: '1rem',
  },
  genres: {
    backgroundColor: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  genreGrid: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  genreItem: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#e2e8f0',
    color: '#2d3748',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Home;

