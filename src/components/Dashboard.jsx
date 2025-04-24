import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Dashboard() {
  const [user, setUser] = useState(null);

  const genres = [
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Romance',
    'Biography',
    'Children\'s Books',
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.container}>
      <h1>📊 Admin Dashboard</h1>
      {user && <p>Welcome, {user.displayName || user.email}!</p>}
      <h2 style={{ marginTop: '2rem' }}>📚 Manage Book Genres</h2>
      <div style={styles.genreList}>
        {genres.map((genre, index) => (
          <Link
            key={index}
            to={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`}
            style={styles.genreLink}
          >
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  genreList: {
    marginTop: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  genreLink: {
    padding: '0.75rem 1.25rem',
    backgroundColor: '#edf2f7',
    color: '#2d3748',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    minWidth: '140px',
    transition: 'background-color 0.3s ease',
  },
};

export default Dashboard;
