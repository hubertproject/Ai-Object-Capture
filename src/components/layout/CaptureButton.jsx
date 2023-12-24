 // src/components/CaptureButton.jsx
import React from 'react';

const CaptureButton = ({ onCapture }) => {
  return (
    <button onClick={onCapture} className="bg-blue-500 text-white p-2 rounded-md rounded-b-none">
      Capture
    </button>
  );
};

export default CaptureButton;
