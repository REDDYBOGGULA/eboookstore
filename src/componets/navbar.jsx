import { auth } from '../firebase';
import { useEffect, useState } from 'react';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <span style={styles.menuItem}>Home</span>
        <span style={styles.menuItem}>Welcome</span>
      </div>
      <div style={styles.right}>
        {user ? <span>{user.email}</span> : <span>Guest</span>}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
  left: {
    display: 'flex',
    gap: '1rem',
  },
  right: {
    fontWeight: 'bold',
  },
  menuItem: {
    cursor: 'pointer',
  },
};

export default Navbar;
