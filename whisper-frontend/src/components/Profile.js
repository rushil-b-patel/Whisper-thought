import React from 'react';
import { useAuth } from '../Auth/AuthContext';  

const Profile = () => {
  const { user, logout } = useAuth();
  console.log(user)

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
