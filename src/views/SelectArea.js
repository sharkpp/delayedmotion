"use struct";

import React, { useState, useEffect, useCallback, createRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function ({ onNextStep, image }) {

  const [ canvasRef, setCanvasRef ] = useState(createRef());
  const [ canvasMaskRef, setCanvasMaskRef ] = useState(createRef());
  const [crop, setCrop] = useState({ });

  useEffect(() => {

    const canvas = canvasRef.current;
    canvas.width = image.width;
    canvas.height= image.height;
    const ctx    = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    
  }, [image]);

  const handleAreaLock = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const scale = image.width  / canvas.clientWidth;
    //const scaleY = image.height / canvas.clientHeight;

    const canvasMask = canvasMaskRef.current;
    canvasMask.width = crop.width;
    canvasMask.height= crop.height;
    const ctxMask    = canvasMask.getContext('2d');
    ctxMask.fillStyle = '#000000';
    ctxMask.fillRect(0, 0, canvasMask.width, canvasMask.height);
    ctxMask.fillStyle = '#000000';

    ctx.fillStyle = 'rgb(0,0,0,0.5)';
    ctx.fillRect(crop.x * scale, crop.y * scale, crop.width * scale, crop.height * scale);



    /*
    const xOffset = crop.x * scale;
    const xMax = crop.width * scale;
    const xStep= 5 * scale;
    const xMid = xMax / 2;
    const yOffset = crop.y * scale;
    const yMax = crop.height * scale;
    const yStep= 5 * scale;
    const yMid = yMax / 2;
    ctx.fillStyle = '#FFFFFF';
    const cMax = yMax * xMax;
    for (let y = 0.0, yi = 0; y < yMax; y += yStep, ++yi) {
      for (let x = 0.0, xi = 0; x < xMax; x += xStep, ++xi) {
        if (!(y<yMid/2&&x<xMid/2))continue;
        if (1||Math.random() < 0.4) {
          const deg = Math.atan2(y - yMid, x - xMid);
          const xCircle = Math.cos(deg) * xMid;
          const yCircle = Math.sin(deg) * yMid;
          const dCircle = Math.sqrt(Math.abs(xCircle * xCircle) + Math.abs(yCircle * xCircle));
          const dxy = Math.sqrt(Math.abs((x - xMid) * (x - xMid)) + Math.abs((y - yMid) * (y - yMid)));
          //console.log([xi,yi,dCircle,dxy,dxy < dCircle]);
          //const xf = xCircle < xMid ? x < xCircle : xCircle < x;
          //const yf = yCircle < yMid ? y < yCircle : yCircle < y;
          console.log([xi,yi,x/xStep,y/xStep,deg,(xCircle+xMid)/xStep,(yCircle+yMid)/xStep]);
          if ( dxy < dCircle ) {
            ctx.fillStyle = 'rgb(255,255,255,0.5)';//'#FFFFFF';
            ctx.fillRect(xOffset + x, yOffset + y, xStep+scale, yStep+scale);
          }
          ctx.fillStyle = 'rgb(255,0,0,'+((y*yMax+x)/cMax)+')';
          ctx.fillRect(xOffset + xMid + xCircle, yOffset + yMid + yCircle, xStep+scale, yStep+scale);
        }
      }
    }
*/
    canvas.toBlob((imageBlob) => {
      onNextStep(imageBlob);
    }, 'image/jpeg', 0.9);
  }, [crop]);
    
  return (
    <>
      <Card.Text>
      <Button onClick={handleAreaLock} >
        選択完了
      </Button>
        <ReactCrop
          renderComponent={
            <canvas ref={canvasRef} style={{ width: '100%' }} />
          }
          crop={crop}
          onChange={newCrop => setCrop(newCrop)}
        />
        <canvas ref={canvasMaskRef} style={{ display: 'none' }} />
      </Card.Text>
    </>
  );
}
