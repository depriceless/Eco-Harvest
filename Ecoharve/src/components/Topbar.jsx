import React from 'react';
import './Topbar.css';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><FaPhone /> 09151311892</span>
        <span><FaEnvelope /> Ecoharvestfarmsandagro@gmail.com</span>
      </div>
      <div className="topbar-right">
  <a href="https://www.facebook.com/profile.php?id=61579004541621" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com/ecoharvestfarmsandagro" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://vm.tiktok.com/ZMSTa9EHT/" target="_blank" rel="noopener noreferrer">
    <FaTiktok />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61579004541621" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
</div>
    </div>
  );
};

export default Topbar;
