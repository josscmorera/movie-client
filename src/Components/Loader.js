import React from 'react';
import '../Styles/Loader.css'

const Loader = ({ size=20 }) => {
  const loaderStyle = {
    width: size,
    height: size,
    borderWidth: size / 10,
  };

  return (
    <div className="loader-container">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};



export default Loader;