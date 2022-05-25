import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';

import { News } from '../news/NewsCard';
import {getNewsAction} from '../../store/actions';

export const AllNews = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);
useEffect(() => {console.log('allNews', allNews)}, [allNews]);
  useEffect(() => {
      dispatch(getNewsAction());
  }, []);


  return (
    <div className='allNews'>
      {isLoading&&'loading'}
      {allNews.length > 0 && allNews.map((element, index) => (<News element={element} key={index} />))}
    </div>
  );
};
