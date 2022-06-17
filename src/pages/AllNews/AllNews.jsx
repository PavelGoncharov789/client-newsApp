import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../../components/NewsCard/NewsCard';
import Header from '../../components/Header/Header';

import { getNewsAction } from '../../store/actions';

import './styles.css';

export default function AllNews() {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  return (
    <div>
      <Header pageName="News" />
      <div className="allNews">
        {isLoading && 'loading'}
        {!isLoading
          && allNews.length > 0
          && allNews.reverse().map((news) => (
            <NewsCard news={news} author={news.author} key={news.id} />
          ))}
      </div>
    </div>
  );
}
