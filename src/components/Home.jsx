import React, { useRef } from 'react';
import CaptureButton from './layout/CaptureButton';

const Home = () => {
  const videoRef = useRef(null);

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Access the camera stream
      videoRef.current.srcObject = stream;

      // Display the camera stream in a video element (hidden)
      videoRef.current.play();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takeSnapshot = () => {
    const video = videoRef.current;

    // Ensure the video is playing
    if (video.paused) {
      video.play();
    }

    // Create a canvas element to capture the frame
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the captured frame to a data URL (base64-encoded image)
    const imageDataUrl = canvas.toDataURL('image/png');

    // Log or use the imageDataUrl as needed
    console.log('Captured Image:', imageDataUrl);

    // Stop the camera stream after capturing the image
    const streamTracks = video.srcObject.getTracks();
    streamTracks.forEach((track) => track.stop());
  };

  return (
    <div className="text-center">
      <div className="bg-blue-500 rounded-md p-4 mb-4 h-48 w-64">
        {/* Display the captured image here */}
        <video ref={videoRef} className="w-full h-full" style={{ display: 'none' }}></video>
      </div>
      <CaptureButton onCapture={handleCapture} />
    </div>
  );
};

export default Home;
