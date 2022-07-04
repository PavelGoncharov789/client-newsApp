import { useState, useEffect } from 'react';
const _ = require('lodash');

export default function useSearch(
  arrayToSearch,
  searchField,
  searchId,
  searchVariant
) {
  const [searchReult, setSearchReult] = useState();
  
  function handleSearch() {
    const result = arrayToSearch.filter((element) =>
      searchVariant[searchId].fields.some((field) =>
        Object.values(element[field]).includes(searchField)
      )
    );
    
    setSearchReult(result);
  }

  useEffect(() => {
    if (searchField.length < 1) {
      setSearchReult(null);
    } else {
      setTimeout(() => {
      handleSearch(searchField);
      }, 2000);
    }
  }, [searchField]);

  return searchReult;
}
