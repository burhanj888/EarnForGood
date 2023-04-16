import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVideoEnd = () => {
    setCompleted(true);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="https://www.shutterstock.com/shutterstock/videos/1057665724/preview/stock-footage-a-seconds-countdown-introduction-with-beautiful-slick-graphics.webm"
        onEnded={handleVideoEnd}
      />
      <Button variant="primary" onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </Button>
      {completed && (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      )}
    </div>
  );
}

export default VideoPlayer;
