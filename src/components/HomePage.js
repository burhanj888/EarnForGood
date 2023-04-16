import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  

  return (
    <div>
      <Link to='/video'>
      <Button variant="primary">
        Watch Video
      </Button>
      </Link>
    </div>
  );
}

export default HomePage;
