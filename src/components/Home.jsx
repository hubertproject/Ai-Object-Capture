 // src/pages/Home.jsx
import React from 'react';
import CaptureButton from './layout/CaptureButton';

const Home = () => {
  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Access the camera stream, you can do further processing with the stream if needed

      // For example, you might want to display the camera stream in a video element
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      videoElement.autoplay = true;
      document.body.appendChild(videoElement);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div className="text-center">
       
      <div className="bg-blue-500 rounded-md p-4 mb-4 h-48 w-64">
        {/* Your content here */}
        
      </div>
      <CaptureButton onCapture={handleCapture} />
    </div>
  );
};

export default Home;
