import React, { useState } from "react";
import Header from "./components/Header";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Communities from "./components/Communities";
import Department from "./components/Department";
import Reviews from "./components/Reviews";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Profile from "./components/Profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSigninSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/communities" element={<Communities />} />
        <Route path="/department" element={<Department />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin onSigninSuccess={handleSigninSuccess} />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;