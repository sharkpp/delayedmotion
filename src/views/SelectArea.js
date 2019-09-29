"use struct";

import React, { useState, useEffect, createRef } from 'react';

export default function ({ onNextStep, image }) {

  const [ canvasRef, setCanvasRef ] = useState(createRef());

  useEffect(() => {

    const canvas = canvasRef.current;
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fdd000';
    ctx.fillRect(10, 10, 140, 30);

    ctx.font = "bold 20px 'MS Pゴシック'";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#002B69';
    ctx.fillText('てすと', 80, 25);

    setTimeout(() => {
      canvas.toBlob((imageBlob) => {
        onNextStep(imageBlob);
      }, 'image/jpeg', 0.9);
    },5000);
  }, [image]);

    
  return (
    <div className="App">
      <canvas ref={canvasRef} style={{ width: '100%' }} />
    </div>
  );
}
