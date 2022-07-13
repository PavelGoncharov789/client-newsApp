import React from "react";
import PropTypes from "prop-types";

import "./style.css";

function FileUploader({ setFile }) {
  const onSelectImageHandler = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="input-container">
      <div className="input-div">
        <input
          className="input"
          type="file"
          accept=".jpg, .jpeg, .png"
          id="inputGroupFile01"
          onChange={onSelectImageHandler}
        />
      </div>
    </div>
  );
}

FileUploader.propTypes = {
  setFile: PropTypes.func.isRequired,
};

export default FileUploader;
