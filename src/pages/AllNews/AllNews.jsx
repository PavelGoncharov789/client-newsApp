import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../../components/NewsCard/NewsCard';
import Header from '../../components/Header/Header';

import { getNewsAction } from '../../store/actions';

import './styles.css';
import NewsPagination from '../../components/Pagination/Pagination';

export default function AllNews() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsReducer.newsList);
  const isLoading = useSelector((state) => state.newsReducer.loading);
  const [allNews, setAllNews] = useState([]);
  console.log(news);

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
          && allNews.map((news) => (
            <NewsCard news={news} author={news.author} key={news.id} />
          ))}
      </div>
      {news?
      <NewsPagination news={news} setAllNews={setAllNews}/>
      :null
    }
    </div>
  );
}
