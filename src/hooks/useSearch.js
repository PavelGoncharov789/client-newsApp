import { useState, useEffect } from 'react';

const _ = require('lodash');

export default function useSearch(
  arrayToSearch,
  searchField,
  searchId,
  searchVariant,
) {
  const [searchResult, setSearchResult] = useState();

  function handleSearch() {
    const result = arrayToSearch.filter((element) =>
      searchVariant[searchId].fields.some((field) =>
        _.get(element, field).includes(searchField)));
    setSearchResult(result);
  }

  useEffect(() => {
    if (searchField.length < 1) {
      setSearchResult(null);
    } else {
      setTimeout(() => {
        handleSearch(searchField);
      }, 2000);
    }
  }, [searchField, searchId]);

  return searchResult;
}
