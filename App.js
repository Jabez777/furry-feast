import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';
import SettingsPage from './pages/Admin/SettingsPage';
import ManageGallery from './pages/Admin/ManageGallery';
import ManageDonation from './pages/Admin/ManageDonation';
import ManagePetDog from './pages/Admin/ManagePetDog';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src="animal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="center-button" onClick={() => navigate('/Login')}>
        Go to Login
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component with the video and button */}
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
        <Route path="/admin/manage-gallery" element={<ManageGallery />} />
        <Route path="/admin/manage-donation" element={<ManageDonation />} />
        <Route path="/admin/manage-pet-dog" element={<ManagePetDog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
