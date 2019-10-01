"use struct";

import React, { useState, useCallback } from 'react';
import './App.css';
import { Card, Row, Col, Button } from 'react-bootstrap'
import Stepper from 'react-stepper-horizontal';

import UploadImageView from './views/UploadImage';
import SelectAreaView from './views/SelectArea';
import DownloadImageView from './views/DownloadImage';

import { Step } from './misc/constants';

const Steps = [
  { title: '画像をアップロード' },
  { title: '揺らす範囲を設定' },
  { title: '完成'}
];

const Title = '踊る ○□△ ジェネレータ';

function App() {

  const [ step,  setStep  ] = useState(Step.UploadImage);
  const [ image, setImage ] = useState(null);
  const [ image2, setImage2 ] = useState(null);

  const handelUploadImageFinish = useCallback((selectedImage) => {
    setImage(selectedImage);
    setStep(Step.SelectArea);
  });

  const handelSelectAreaFinish = useCallback((generatedImage) => {
    setImage2(generatedImage);
    setStep(Step.DownloadImage);
  });

  const handelDownloadImageFinish = useCallback(() => {
    setStep(Step.UploadImage);
  });

  return (
    <div className="App">
      <h1>
        {Title}
      </h1>
      <div className="stepper">
        <Stepper steps={Steps} activeStep={step} />
      </div>
      <Card>
        <Card.Body>
          {[
            <UploadImageView   onNextStep={handelUploadImageFinish} />,
            <SelectAreaView    onNextStep={handelSelectAreaFinish}    image={image} />,
            <DownloadImageView onNextStep={handelDownloadImageFinish} image={image2} />
          ][step]}
        </Card.Body>
      </Card>
      <Row>
        <Col>
        </Col>
        <Col>
          <Button href="https://twitter.com/sharkpp" variant="link">
            @sharkpp
          </Button>
          <Button href="https://github.com/sharkpp/delayedmotion/issues/new" variant="link">
            不具合報告
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
