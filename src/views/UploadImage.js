"use struct";

import React, { useState, useCallback } from 'react';

import { Nav, Card, Form, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import {useDropzone} from 'react-dropzone'
import 'react-dropzone/examples/theme.css';

import { ImageSourceType } from '../misc/constants';

import './UploadImage.css';

export default function ({ onNextStep }) {

  const [ imageSrcType, setImageSrcType ] = useState(ImageSourceType.FromLocal);
  const [ imageUrl, setImageUrl ] = useState('');
  const [ invalidImageUrl, setInvalidImageUrl ] = useState(false);
  const [ loadingImageUrl, setLoadingImageUrl ] = useState(false);

  const handleDrop = (files) => {
    if (files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          onNextStep(image);
        }
      }
      reader.readAsDataURL(files[0]);
    }
  };

  const {
    rejectedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: handleDrop,
    disabled: loadingImageUrl,
  });

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} は利用できません。
    </li>
  ));

  const handleSelectImageUrl = (e) => {
    setInvalidImageUrl(false);
    setImageUrl(e.target.value);
  };
  const handleSelectedImageUrl = useCallback(() => {
    setLoadingImageUrl(true);
    setInvalidImageUrl(false);
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = 'https://api-gw98.herokuapp.com/' + imageUrl;
    image.onload = (err) => {
      setLoadingImageUrl(false);
      onNextStep(image);
    }
    image.onerror = (err) => {
      setLoadingImageUrl(false);
      setInvalidImageUrl(true);
    }
  }, [onNextStep, imageUrl]);

  return (
    <>
      <Card.Header>
        <Nav variant="tabs" activeKey={imageSrcType} onSelect={k => setImageSrcType(k)}>
          <Nav.Item>
            <Nav.Link eventKey={ImageSourceType.FromLocal}>アップロード</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={ImageSourceType.FromUrl}>URLを指定</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

      {ImageSourceType.FromLocal === +imageSrcType && <Card.Body>
        <div {...getRootProps({className: 'dropzone'+(loadingImageUrl?' disabled':'')})}>
          <input {...getInputProps()} />
          <FontAwesomeIcon icon={faFileUpload} size="4x" />
          <p>画像をここにドロップするか、クリックして選択してください</p>
          <em>jpeg もしくは png のみ指定可能)</em>
        </div>
        <ol>
          {rejectedFilesItems}
        </ol>
      </Card.Body>}

      {ImageSourceType.FromUrl === +imageSrcType && <Card.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="画像のURL"
            value={imageUrl}
            onChange={handleSelectImageUrl}
            isInvalid={invalidImageUrl}
            readOnly={loadingImageUrl}
          />
          <InputGroup.Append>
            <Button 
              variant="outline-primary"
              onClick={handleSelectedImageUrl}
              disabled={!imageUrl || loadingImageUrl}
            >
              {loadingImageUrl && <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="btn-inner-spinner"
              />}
              画像を選択
            </Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid">
            指定したURLは画像として利用できませんでした
          </Form.Control.Feedback>
        </InputGroup>
      </Card.Body>}
    </>
  );
}
