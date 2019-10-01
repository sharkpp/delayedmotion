"use struct";

import React, { useState, useCallback } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
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

  return (
    <div className="App">
      <div className="stepper">
        <Stepper steps={Steps} activeStep={step} />
      </div>
      <Card>
        <Card.Body>
          {[
            <UploadImageView onNextStep={handelUploadImageFinish} />,
            <SelectAreaView  onNextStep={handelSelectAreaFinish}  image={image} />,
            <DownloadImageView  image={image2} />
          ][step]}
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
