// components/FullScreenLoader.jsx
import React from 'react';
import logo from '../assets/logohimpunansatu.png'; // Ganti dengan path logo kamu

const FullScreenLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-[9999] flex flex-col items-center justify-center">
      <img src={logo} alt="HIMSI Pradita" className="w-32 h-32 mb-6 animate-pulse" />
      <div className="w-40 h-2 bg-purple-200 rounded-full overflow-hidden">
        <div className="h-full bg-purple-600 animate-loadingBar" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
