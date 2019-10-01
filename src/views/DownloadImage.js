"use struct";

import React, { useState, useEffect, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import './DownloadImage.css';
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
      <Form.Group>
        <Button onClick={handleDownload} >
          ダウンロード
        </Button>
      </Form.Group>
      <div className="image-preview">
        <img src={prevewImage} className="layout" />
        <img src={prevewImage} className="main" style={{ left: 0, top: 0 }} />
      </div>
    </>
  );
}
