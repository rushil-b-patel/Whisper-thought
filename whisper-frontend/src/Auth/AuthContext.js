import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (!token) {
          setUser(null);
          return;
        }
    
        const response = await axios.get('http://localhost:8000/user/getuser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        // console.log('User data:', response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };    

    getUserData();
  }, [token]);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken); 
    localStorage.setItem('token', authToken);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);