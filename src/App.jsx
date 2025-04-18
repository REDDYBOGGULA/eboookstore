// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componets/Login';
import Register from './componets/Register';
import Home from './componets/Home';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                {isLogin ? <Login /> : <Register />}
                <p>
                  {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
                  <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                  </button>
                </p>
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
