"use struct";

import React from 'react';

import {useDropzone} from 'react-dropzone'
import 'react-dropzone/examples/theme.css';

export default function ({ onNextStep }) {

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
    onDrop: handleDrop
  });

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} は利用できません。
    </li>
  ));

  return (
    <>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>画像をここにドロップするか、クリックして選択してください</p>
        <em>jpeg もしくは png のみ指定可能)</em>
      </div>
      <ol>
        {rejectedFilesItems}
      </ol>
    </>
  );
}
