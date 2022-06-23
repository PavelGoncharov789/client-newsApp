import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';

import './styles.css';

function NewsPagination({ newsArray, setAllNews }) {
  const [currentPage, setCurrentPage] = useState(1);
  const quantity = 3;

  const pages = Math.ceil(newsArray.length / quantity);
  const lastIndex = currentPage * quantity;
  const firstIndex = lastIndex - quantity;
  const currentIndex = newsArray.slice(firstIndex, lastIndex);

  useEffect(() => {
    setAllNews(currentIndex);
  }, [currentPage]);

  return (
    <div className='pagination'>
      <Pagination
        count={pages}
        page={currentPage}
        onChange={(_, number) => setCurrentPage(number)}
      />
    </div>
  );
}
export default NewsPagination;
