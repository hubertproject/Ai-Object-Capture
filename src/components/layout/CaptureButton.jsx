 // CaptureButton.jsx
import React from 'react';

const CaptureButton = ({ onCapture }) => {
  return (
    <button
      className="bg-green-500 rounded-md p-2 text-white"
      onClick={onCapture}
    >
      Capture
    </button>
  );
};

export default CaptureButton;
