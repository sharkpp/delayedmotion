"use struct";

import React, { useState, useEffect, useCallback, createRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function ({ onNextStep, image }) {

  const [ canvasRef, setCanvasRef ] = useState(createRef());
  const [ canvasMaskRef, setCanvasMaskRef ] = useState(createRef());
  const [ canvasOffscreenRef, setCanvasOffscreenRef ] = useState(createRef());
  const [crop, setCrop] = useState({ });

  useEffect(() => {

    // 画像を描画
    const canvas = canvasRef.current;
    canvas.width = image.width;
    canvas.height= image.height;
    const ctx    = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const canvasOffscreen = canvasOffscreenRef.current;
    canvasOffscreen.width = image.width;
    canvasOffscreen.height= image.height;

  }, [image]);

  // 範囲変更
  const handleChangeArea = useCallback((newCrop) => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const scale  = image.width / canvas.clientWidth;

    const canvasOffscreen = canvasOffscreenRef.current;
    const ctxOffscreen    = canvasOffscreen.getContext('2d');
    ctxOffscreen.drawImage(image, 0, 0, image.width, image.height);

    const canvasMask = canvasMaskRef.current;
    canvasMask.width = crop.width  / 5;
    canvasMask.height= crop.height / 5;
    const ctxMask    = canvasMask.getContext('2d');

    if (canvasMask.width < 1 || canvasMask.height < 1) {
      return;
    }

    ctxMask.fillStyle = '#000000';
    ctxMask.fillRect(0, 0, canvasMask.width, canvasMask.height);
    ctxMask.fillStyle = '#FF0000';
    ctxMask.beginPath();
    ctxMask.ellipse(canvasMask.width / 2, canvasMask.height / 2, canvasMask.width / 2 * 0.9, canvasMask.height / 2 * 0.9, 0, 0, 2 * Math.PI);
    ctxMask.fill();
    const maskData = ctxMask.getImageData(0, 0, canvasMask.width, canvasMask.height).data; // [ R(0,0), G(0,0), B(0,0), alpha(0,0), ... ]

    const xyStep  = 5 * scale;
    const xOffset = crop.x * scale;
    const xMax    = xOffset + crop.width * scale;
    const yOffset = crop.y * scale;
    const yMax    = yOffset + crop.height * scale;

    ctxOffscreen.fillStyle = 'rgb(0,0,0,0.5)';
    ctxOffscreen.fillRect(crop.x * scale, crop.y * scale, Math.floor((crop.width + 1) / 5) * xyStep, Math.floor((crop.height + 1) / 5) * xyStep);

    for (let y = yOffset, yi = 0; y < yMax; y += xyStep, ++yi) {
      for (let x = xOffset, xi = 0; x < xMax; x += xyStep, ++xi) {
        if (0 == maskData[(xi + yi * canvasMask.width) * 4 + 0] && Math.random() < 0.3) {
          ctxOffscreen.fillStyle = '#FFFFFF';
          ctxOffscreen.fillRect(x, y, xyStep + scale, xyStep + scale);
        }
      }
    }

    ctx.drawImage(canvasOffscreen, 0, 0);

  }, [canvasRef, canvasOffscreenRef, canvasMaskRef, crop]);

  // 範囲確定
  const handleAreaLock = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.toBlob((imageBlob) => {
      onNextStep(imageBlob);
    }, 'image/jpeg', 0.9);
  }, [image, crop]);
  
  const cropValid = crop.width && crop.height;

  return (
    <>
      <Card.Text>
      <Button disabled={!cropValid} onClick={handleAreaLock} >
        選択完了
      </Button>
        <ReactCrop
          renderComponent={
            <canvas ref={canvasRef} style={{ width: '100%' }} />
          }
          crop={crop}
          onChange={newCrop => setCrop(newCrop)}
          onComplete={() => handleChangeArea()}
        />
      </Card.Text>
      <canvas ref={canvasOffscreenRef} style={{ width: '100%', display: 'none' }} />
      <canvas ref={canvasMaskRef} style={{ display: 'none' }} />
    </>
  );
}
