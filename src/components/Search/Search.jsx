import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '@mui/icons-material/Search';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import './styles.css';

function Search({
  searchText,
  searchId,
  setSearchText,
  setSearchId,
  searchVariants,
}) {
  return (
    <div className="search">
      <SearchIcon className="search-icon" />
      <TextField
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <FormControl className="select">
        <InputLabel id="demo-simple-select-label">Искать по</InputLabel>
        <Select
          value={searchId}
          label="Искать по"
          onChange={(e) => setSearchId(e.target.value)}
        >
          {Object.values(searchVariants).map((item) => (
            <MenuItem value={item.id} key={item.id}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  searchId: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchId: PropTypes.func.isRequired,
  searchVariants: PropTypes.shape({}).isRequired,
};

export default Search;
