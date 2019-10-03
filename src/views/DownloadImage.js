"use struct";

import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Form, Col } from 'react-bootstrap';
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
    <Card.Body>
      <Form.Row>
        <Form.Group as={Col}>
          <Button onClick={handleDownload} >
            ダウンロード
          </Button>
        </Form.Group>
        <Form.Group as={Col}>
          <Button variant="link" onClick={handleNext} >
            新規作成
          </Button>
        </Form.Group>
      </Form.Row>
      <div className="image-preview">
        <img src={prevewImage} className="layout" alt="layout" />
        <img src={prevewImage} className="main"   alt="生成画像" style={{ left: 0, top: 0 }} />
      </div>
    </Card.Body>
  );
}
