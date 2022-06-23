import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';

function NewsPagination({ news, setAllNews }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(news.length / 50);

  const lastIndex = currentPage * pages;
  const firstIndex = lastIndex - pages;
  const currentIndex = news.slice(firstIndex, lastIndex);
  console.log(currentIndex);
  useEffect(()=>{
    setAllNews(currentIndex);
  },[currentPage])

  return (
    <>
      <Pagination
        count={pages}
        page={currentPage}
        onChange={(_, number) => setCurrentPage(number)}
      />
    </>
  );
}
export default NewsPagination;
