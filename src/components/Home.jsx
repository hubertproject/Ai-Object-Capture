import React, { useRef } from 'react';
import CaptureButton from './layout/CaptureButton';

const Home = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Access the camera stream
      videoRef.current.srcObject = stream;

      // Display the camera stream in a video element
      videoRef.current.play();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takeSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Ensure the video is playing
    if (video.paused) {
      video.play();
    }

    // Capture the current frame from the video stream
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the captured frame to a data URL
    const imageDataUrl = canvas.toDataURL('image/png');

    // You can use the imageDataUrl to display the captured image or send it to a server
    console.log('Captured Image:', imageDataUrl);
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 rounded-md p-4 mb-4 h-48 w-64 relative">
        {/* Display the captured image here */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" style={{ borderRadius: 'inherit' }}></canvas>
      </div>
      <video ref={videoRef} className="hidden"></video>
      <CaptureButton onCapture={handleCapture} />
    </div>
  );
};

export default Home;
