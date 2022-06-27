import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../../components/NewsCard/NewsCard';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import { getNewsAction } from '../../store/actions';

import './styles.css';

export default function AllNews() {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);
  const [resultArray, setResultArray] = useState();

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);
  console.log(resultArray);

  return (
    <div>
      <Header pageName="News" />
      <Search arrayForFilter={allNews} setResultArray={setResultArray} />
      <div className="allNews">
        {isLoading && 'loading'}
        {!isLoading && allNews.length > 0
          ? resultArray
            ? resultArray.map((news) => (
                <NewsCard news={news} author={news.author} key={news.id} />
              ))
            : allNews.map((news) => (
                <NewsCard news={news} author={news.author} key={news.id} />
              ))
          : null}
      </div>
    </div>
  );
}
