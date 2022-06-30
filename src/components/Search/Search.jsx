import React, { useState, useEffect } from 'react';
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

const ARRAY_SELECT = [
  { id: 'title', text: 'Загловку' },
  { id: 'text', text: 'Тексту' },
  { id: 'author', text: 'Автору' },
  { id: 'tags', text: 'Тегам' },
];

function Search({ arrayForFilter, setResultArray }) {
  const [value, setValue] = useState('');
  const [searchId, setSearchId] = useState('title');

  useEffect(() => {
    if (value.length < 1) {
      setResultArray(null);
    }
  }, [value]);

  function handleSearch() {
    const result = arrayForFilter.filter((item) => item[searchId].includes(value));
    setResultArray(result);
  }

  return (
    <div className="search">
      <SearchIcon onClick={handleSearch} className="search-icon" />
      <TextField
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
      />
      <FormControl className="select">
        <InputLabel id="demo-simple-select-label">Искать по</InputLabel>
        <Select
          value={searchId}
          label="Искать по"
          onChange={(e) => setSearchId(e.target.value)}
        >
          {ARRAY_SELECT.map((item) => (
            <MenuItem value={item.id} key={item.id}>{item.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Search.propTypes = {
  arrayForFilter: PropTypes.array.isRequired,
  setResultArray: PropTypes.func.isRequired,
};


export default Search;
