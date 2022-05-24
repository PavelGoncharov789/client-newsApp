import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { News } from '../news/News';
import './styles.css';
import {getNewsAction} from '../../store/actions';

export const AllNews = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);

  useEffect(() => {
      dispatch(getNewsAction());
  }, []);


  return (
    <div className='allNews'>
      {isLoading?'loading':allNews.map((element, index) => <News element={element} key={index} />
      )}
    </div>
  );
};
