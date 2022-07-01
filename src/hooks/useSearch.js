import { useState, useEffect } from 'react';
const _ = require('lodash');

export default function useSearch(arrayToSearch, searchField, searchId, searchVariant) {
  const [searchReult, setSearchReult] = useState();

  function handleSearch() {
    // const result = arrayToSearch.filter((element) => searchVariant[searchId].fileds.some((field) => {

    // }))


    // if (searchId == 'all') {
    //   const result = arrayToSearch.filter((item) => {
    //     let res;
    //     for(let key in searchVariant){
    //       if(typeof item[key] === 'object'){
    //         const elem = Object.values(item[key]).includes(searchField);
    //         if(elem) {
    //           res = item;
    //         }
    //       }
    //       else {
    //         const elem = item[key]?.includes(searchField);
    //         if(elem) {
    //           res = item;
    //         }
    //       }
    //     }
    //     return res;
    //   })
    //   setSearchReult(result);
    //   return;
    // }
    // const result = arrayToSearch.filter((item) => item[searchId].includes(searchField));
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
