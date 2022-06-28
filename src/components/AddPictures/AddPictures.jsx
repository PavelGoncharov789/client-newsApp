import React from 'react';
import PropTypes from 'prop-types';

function AddPictures({ setFile }) {
  const onSelectImageHandler = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
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
