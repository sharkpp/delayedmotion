"use struct";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
const FileDownload = require('js-file-download');

export default function ({ image }) {

  const [ prevewImage, setPrevewImage ] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPrevewImage(e.target.result);
    };
    reader.readAsDataURL(image);
  }, [image]);

  const handleDownload = useCallback(() => {
    FileDownload(image, 'sample.jpg', 'image/jpeg');
  }, [image]);

  return (
    <>
      download image
      <img src={prevewImage} style={{ width: '100%' }} />
      <Button onClick={handleDownload} >
        Download
      </Button>
    </>
  );
}
