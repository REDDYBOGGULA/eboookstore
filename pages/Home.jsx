import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>Welcome to the eShop Admin Panel 👋</h1>
        <p>This is the home page. Use the links below to navigate:</p>
        <div style={styles.links}>
          <Link to="/dashboard" style={styles.link}>Go to Dashboard</Link>
          {/* Future links:
          <Link to="/products" style={styles.link}>Manage Products</Link>
          <Link to="/orders" style={styles.link}>View Orders</Link> */}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '4rem',
    textAlign: 'center',
  },
  links: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  link: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    width: 'fit-content',
  },
};

export default Home;
