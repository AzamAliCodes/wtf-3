"use client";
import React from 'react';
import '../styles/MatrixLoader.css';

const MatrixLoader = () => {
  return (
    <div className="ai-matrix-loader">
      <div className="digit">0</div>
      <div className="digit">1</div>
      <div className="digit">0</div>
      <div className="digit">1</div>
      <div className="digit">1</div>
      <div className="digit">0</div>
      <div className="digit">0</div>
      <div className="digit">1</div>
      <div className="glow"></div>
    </div>
  );
};

export default MatrixLoader;
