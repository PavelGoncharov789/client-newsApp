import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';



function Search() {
const [value, setValue] = useState();
console.log(value);

  return (
    <>
        <SearchIcon />
      <TextField type="text" value={value} onChange={(e) =>setValue(e.target.value)}/>

    </>
  );
}

export default Search;
