import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import './VideoButton.css';

function HomePage() {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);

  useEffect(() => {
    const checkMetamaskConnection = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setIsMetamaskConnected(true);
        } catch (error) {
          setIsMetamaskConnected(false);
        }
      }
    };

    checkMetamaskConnection();
  }, []);

  return (
    <div className="video-button-container">
      <h2 className="video-button-header">Welcome to our video page</h2>
      <p className="video-button-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Link to='/video'>
        <Button variant="primary" disabled={!isMetamaskConnected} className="video-button">
          Watch Video
        </Button>
      </Link>
      <footer className="video-button-footer">Copyright © 2023</footer>
    </div>
  );
}

export default HomePage;
