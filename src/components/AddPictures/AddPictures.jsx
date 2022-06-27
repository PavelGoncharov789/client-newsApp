import React from 'react';
import PropTypes from 'prop-types';

function AddPictures({ setFile }) {
  
  const onSelectImageHandler = (files) => {
    const file = files[0];
    setFile(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
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
