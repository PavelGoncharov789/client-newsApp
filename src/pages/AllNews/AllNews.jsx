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
import Search from '../../components/Search/Search';
import useSearch from '../../hooks/useSearch';

import { getNewsAction } from '../../store/actions';

import './styles.css';

import {
  SEARCH_OPTIONS,
  SEARCH_VARIANTS,
  QUANTITY_VARIANTS
} from '../../constants/constants';

export default function AllNews() {
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuanity] = useState(3);
  const [searchText, setSearchText] = useState('');
  const [searchId, setSearchId] = useState(SEARCH_VARIANTS.all);

  const foundNews = useSearch(newsArray, searchText, searchId, SEARCH_OPTIONS);

  const pages = useMemo(() => {
    if (foundNews) {
      return Math.ceil(foundNews.length / quantity);
    }
    return Math.ceil(newsArray.length / quantity);
  }, [quantity, newsArray.length, foundNews]);

  const arrayForRender = useMemo(() => {
    const lastIndex = currentPage * quantity;
    const firstIndex = lastIndex - quantity;
    if (foundNews && searchText.length) {
      return foundNews.slice(firstIndex, lastIndex);
    }
    return newsArray.slice(firstIndex, lastIndex);
  }, [pages, currentPage, newsArray, foundNews]);

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  }, [currentPage, newsArray, quantity, pages]);

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  const handleQuantity = (event) => {
    setQuanity(event.target.value);
  };

  return (
    <div>
      <Header pageName="News" />
      <Search
        searchId={searchId}
        setSearchText={setSearchText}
        setSearchId={setSearchId}
        searchVariants={SEARCH_OPTIONS}
      />
      <div className="allNews">
        {isLoading && 'loading'}
        {!isLoading && arrayForRender.length > 0
        && arrayForRender.map((news) => (
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
            {QUANTITY_VARIANTS.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
