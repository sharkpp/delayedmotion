"use struct";

import React, { useState, useEffect, useCallback } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './DownloadImage.css';
const FileDownload = require('js-file-download');

export default function ({ image, onNextStep }) {

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

  const handleNext = useCallback(() => {
    onNextStep();
  }, [onNextStep]);

  return (
    <>
      <Form.Row>
        <Form.Group as={Col}>
          <Button onClick={handleDownload} >
            ダウンロード
          </Button>
        </Form.Group>
        <Form.Group as={Col}>
          <Button variant="secondary" onClick={handleNext} >
            最初からやり直す
          </Button>
        </Form.Group>
      </Form.Row>
      <div className="image-preview">
        <img src={prevewImage} className="layout" />
        <img src={prevewImage} className="main" style={{ left: 0, top: 0 }} />
      </div>
    </>
  );
}
