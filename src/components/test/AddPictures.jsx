import React, { useState, useRef, useCallback } from 'react';

import { Button, TextField } from '@mui/material';

import './styles.css';

function AddPictures({ setImage }) {
  const onSelectImageHandler = (files) => {
    console.log(files[0]);
    const file = files[0];
    setImage(file)
  };

  return (
    <div>
      <input
        type="file"
        id="inputGroupFile01"
        onChange={(e) => onSelectImageHandler(e.target.files)}
      />
    </div>
  );
}

export default AddPictures;
