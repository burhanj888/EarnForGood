import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './components/VideoComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route exact path="/video" element={<VideoPlayer></VideoPlayer>} />
    </Routes>
    </Router>
  );
}

export default App;
