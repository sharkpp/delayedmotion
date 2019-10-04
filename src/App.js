"use struct";

import React, { useState } from 'react';

import './App.css';

import { Card, Button } from 'react-bootstrap'

import Stepper from 'react-stepper-horizontal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import UploadImageView from './views/UploadImage';
import SelectAreaView from './views/SelectArea';
import DownloadImageView from './views/DownloadImage';

import SimplePopup from './components/SimplePopup';
import PrivacyPolicy from './components/PrivacyPolicy';

import { Step } from './misc/constants';

const Steps = [
  { title: '画像をアップロード' },
  { title: '揺らす範囲を設定' },
  { title: '完成'}
];

function App({ models }) {

  const [ step,  setStep  ] = useState(Step.UploadImage);
  const [ image, setImage ] = useState(null);
  const [ image2, setImage2 ] = useState(null);
  const [ showPrivacyPolicy, setShowPrivacyPolicy ] = useState(false);

  const handelUploadImageFinish = (selectedImage) => {
    setImage(selectedImage);
    setStep(Step.SelectArea);
  };

  const handelSelectAreaFinish = (generatedImage) => {
    setImage2(generatedImage);
    setStep(Step.DownloadImage);
  };

  const handelDownloadImageFinish = () => {
    setStep(Step.UploadImage);
  };

  return (
    <div className="App">
      <h1>
        揺れる<ruby>
          ※<rp>(</rp><rt>ちょめ</rt><rp>)</rp>
          ※<rp>(</rp><rt>ちょめ</rt><rp>)</rp>
        </ruby>画像ジェネレータ
      </h1>
      <div className="stepper">
        <Stepper steps={Steps} activeStep={step} />
      </div>
      <Card>
        {[
          <UploadImageView   models={models} onNextStep={handelUploadImageFinish} />,
          <SelectAreaView    models={models} onNextStep={handelSelectAreaFinish}    image={image} />,
          <DownloadImageView models={models} onNextStep={handelDownloadImageFinish} image={image2} />
        ][step]}
      </Card>
      <div className="footer">
          <Button variant="link" size="sm" onClick={() => setShowPrivacyPolicy(true)}>
            <FontAwesomeIcon icon={faUserShield} /> プライバシーポリシー
          </Button>
          <Button variant="link" size="sm" target="_blank" href="https://twitter.com/sharkpp">
            <FontAwesomeIcon icon={faTwitter} /> @sharkpp
          </Button>
          <Button variant="link" size="sm" target="_blank" href="https://github.com/sharkpp/delayedmotion/issues/new">
            <FontAwesomeIcon icon={faBug} /> 不具合報告
          </Button>
      </div>
      <SimplePopup
        open={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        caption="プライバシーポリシー"
      >
        <PrivacyPolicy />
      </SimplePopup>
    </div>
  );
}

export default App;
