import React, { useRef, useState } from 'react';
import CaptureButton from './layout/CaptureButton';

const Home = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const activateCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Access the camera stream
      videoRef.current.srcObject = stream;

      // Set the camera to active
      setIsCameraActive(true);
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

    // Stop the camera stream after capturing the image
    const streamTracks = video.srcObject.getTracks();
    streamTracks.forEach((track) => track.stop());

    // Set the camera to inactive
    setIsCameraActive(false);
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 rounded-md p-4 mb-4 h-48 w-64 relative">
        {/* Display the captured image here */}
        {isCameraActive && (
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" style={{ borderRadius: 'inherit' }}></canvas>
        )}
      </div>
      {isCameraActive ? (
        <CaptureButton onCapture={takeSnapshot} />
      ) : (
        <CaptureButton onCapture={activateCamera} />
      )}
      <video ref={videoRef} className="hidden"></video>
    </div>
  );
};

export default Home;
