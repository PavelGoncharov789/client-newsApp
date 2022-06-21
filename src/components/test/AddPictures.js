import React, {useState, useRef, useCallback} from 'react';

import { Button, TextField } from '@mui/material';

import './styles.css';

function AddPictures({setImage}) {
  const fileRef = useRef(null);

  const handleSubmit = useCallback( event => {
    event.preventDefault();

    if(!fileRef.current) return void null;

    const reader = new FileReader();
    reader.onloadend = () => {
      const uint8Array = new Uint8Array(reader.result);
    };
    reader.readAsArrayBuffer(fileRef.current[0]);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          onChange={e => fileRef.current = e.target.files}
          accept="image/*"
          type="file"
          id="button-file"
        />
      </div>
      <Button type="submit">Загрузить</Button>
    </form>
  );
}

export default AddPictures;