import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Pagination,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';

import NewsCard from '../../components/NewsCard/NewsCard';
import Header from '../../components/Header/Header';

import { getNewsAction } from '../../store/actions';

import './styles.css';

export default function AllNews() {
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuanity] = useState(3);
  const [newsForRender, setNewsForRender] = useState([]);
  const menuItemArray = [3, 5, 10];

  const pages = useMemo(() => Math.ceil(newsArray.length / quantity), [quantity, newsArray.length]);
  const lastIndex = currentPage * quantity;
  const firstIndex = lastIndex - quantity;
  const arrayForRender = useMemo(
    () => newsArray.slice(firstIndex, lastIndex),
    [pages, currentPage],
  );

  useEffect(() => {
    setNewsForRender(arrayForRender);
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  }, [currentPage, newsArray, quantity]);

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  const handleQuantity = (event) => {
    setQuanity(event.target.value);
  };

  return (
    <div>
      <Header pageName="News" />
      <div className="allNews">
        {isLoading && 'loading'}
        {!isLoading
        && newsForRender.length > 0
        && newsForRender.map((news) => (
          <NewsCard news={news} author={news.author} key={news.id} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={pages}
          page={currentPage}
          onChange={(_, number) => setCurrentPage(number)}
        />
        <FormControl variant="standard" sx={{ ml: 7, minWidth: 60 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={quantity}
            label={quantity}
            onChange={handleQuantity}
          >
            { menuItemArray.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>) }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
