import React from 'react';
import { useAuth } from '../Auth/AuthContext';  

const Profile = () => {
  
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;