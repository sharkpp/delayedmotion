"use struct";

import React, { useState, useEffect, useCallback, createRef } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './SelectArea.css';

const BlockSize = 5;

export default function ({ onNextStep, image }) {

  const [ canvasRef ] = useState(createRef());
  const [ canvasMaskRef ] = useState(createRef());
  const [ canvasOffscreenRef ] = useState(createRef());
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

  }, [image, canvasRef, canvasOffscreenRef]);

  // 範囲変更
  const handleChangeArea = useCallback(() => {
    const newCrop = Object.assign({}, crop, {
      // 領域を丸める
      width:  Math.floor(crop.width  / BlockSize) * BlockSize + 1,
      height: Math.floor(crop.height / BlockSize) * BlockSize + 1,
    });

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const scale  = image.width / canvas.clientWidth;

    const canvasOffscreen = canvasOffscreenRef.current;
    const ctxOffscreen    = canvasOffscreen.getContext('2d');
    ctxOffscreen.drawImage(image, 0, 0, image.width, image.height);

    const xiMax = Math.floor(newCrop.width  / BlockSize);
    const yiMax = Math.floor(newCrop.height / BlockSize);
    const canvasMask = canvasMaskRef.current;
    canvasMask.width = xiMax;
    canvasMask.height= yiMax;
    const ctxMask    = canvasMask.getContext('2d');

    if (canvasMask.width < 1 || canvasMask.height < 1) {
      ctx.drawImage(canvasOffscreen, 0, 0);
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
    const xOffset = newCrop.x * scale;
    const yOffset = newCrop.y * scale;

    ctxOffscreen.fillStyle = 'rgb(0,0,0,0.5)';
    ctxOffscreen.fillRect(newCrop.x * scale, newCrop.y * scale,
                          Math.floor((newCrop.width  + 1) / BlockSize) * xyStep,
                          Math.floor((newCrop.height + 1) / BlockSize) * xyStep);

    for (let y = yOffset, yi = 0; yi < yiMax; y += xyStep, ++yi) {
      for (let x = xOffset, xi = 0; xi < xiMax; x += xyStep, ++xi) {
        if (0 === maskData[(xi + yi * xiMax) * 4 + 0] && Math.random() < 0.3) {
          ctxOffscreen.fillStyle = '#FFFFFF';
          ctxOffscreen.fillRect(x, y, xyStep + scale, xyStep + scale);
        }
      }
    }

    ctx.drawImage(canvasOffscreen, 0, 0);

    setCrop(newCrop);
  }, [image, canvasRef, canvasOffscreenRef, canvasMaskRef, crop]);

  // 範囲確定
  const handleAreaLock = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.toBlob((imageBlob) => {
      onNextStep(imageBlob);
    }, 'image/jpeg', 0.9);
  }, [canvasRef, onNextStep]);
  
  const cropValid = crop.width && crop.height;

  return (
    <Card.Body>
      <Card.Text>
        <Form.Group>
          {!!cropValid&&<Button onClick={handleAreaLock} >
            選択完了
          </Button>}
          {!cropValid&&<Alert variant='info'>
            揺らす範囲を選択してください
          </Alert>}
        </Form.Group>
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
    </Card.Body>
  );
}
