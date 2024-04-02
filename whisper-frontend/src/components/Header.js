import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

const Header = () => {
  const [userName, setUserName] = useState('');
  const isLoggedIn = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (isLoggedIn && user) {
      setUserName(user.username);
    }
  }, [isLoggedIn, user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="bg-black text-white py-4 px-12 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto bg-none" />
        <span className="text-xl font-semibold">Whisper</span>
      </div>

      <div className="flex-grow text-center">
        <nav className="space-x-10">
          <Link to="/communities" className="hover:text-gray-300">Communities</Link>
          <Link to="/department" className="hover:text-gray-300">Department</Link>
          <Link to="/reviews" className="hover:text-gray-300">Reviews</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-8">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="text-gray-300 hover:text-white">{userName}</Link>
            <button onClick={handleLogout} className="border border-gray-300 px-4 py-1 rounded-md hover:bg-gray-700 hover:text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="border border-gray-300 px-4 py-1 rounded-md hover:bg-gray-700 hover:text-white">Sign in</button>
            </Link>
            <Link to="/register">
              <button className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-600">Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;