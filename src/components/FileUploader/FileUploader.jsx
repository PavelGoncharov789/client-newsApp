import React from 'react';
import PropTypes from 'prop-types';

function FileUploader({ setFile }) {
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
        onChange={onSelectImageHandler}
      />
    </div>
  );
}

FileUploader.propTypes = {
  setFile: PropTypes.func.isRequired,
};

export default FileUploader;
