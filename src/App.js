"use struct";

import React, { useState, useCallback } from 'react';
import './App.css';

import UploadImageView from './views/UploadImage';
import SelectAreaView from './views/SelectArea';
import DownloadImageView from './views/DownloadImage';

import { Step } from './misc/constants';

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
      {[
        <UploadImageView onNextStep={handelUploadImageFinish} />,
        <SelectAreaView  onNextStep={handelSelectAreaFinish}  image={image} />,
        <DownloadImageView  image={image2} />
      ][step]}
    </div>
  );
}

export default App;
