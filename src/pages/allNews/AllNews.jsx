import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';

import NewsCard from '../news/NewsCard';
import { getNewsAction } from '../../store/actions';

export default function AllNews() {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  return (
    <div className="allNews">
      {isLoading && 'loading'}
      {
      !isLoading
      && allNews.length > 0
      && allNews.map((element) => (<NewsCard element={element} key={element.id} />))
      }
    </div>
  );
}
