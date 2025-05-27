import React from 'react';

function SmallBox({ color, value, label, iconPath }) {
  return (
    <div className="col-lg-3 col-6">
      <div className={`small-box bg-${color}`}>
        <div className="inner">
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SmallBox;
