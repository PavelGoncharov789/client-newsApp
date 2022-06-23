import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function AddPictures({ setFile }) {
  
  const onSelectImageHandler = (files) => {
    const file = files[0];
    setFile(file);
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

AddPictures.propTypes = {
  setFile: PropTypes.func,
};

export default AddPictures;
