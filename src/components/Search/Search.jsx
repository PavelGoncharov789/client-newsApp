import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

import './styles.css';

function Search({ arrayForFilter, setResultArray }) {
  const [value, setValue] = useState('');
  const [searchId, setSearchId] = useState('');
  const arraySelect = [
    { id: 'title', text: 'Загловку' },
    { id: 'text', text: 'Тексту' },
    { id: 'author', text: 'Автору' },
    { id: 'tags', text: 'Тегам' },
  ];

  useEffect(() => {
    if (value.length) {
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
          {arraySelect.map((item) => (
            <MenuItem value={item.id}>{item.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Search;
