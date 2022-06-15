import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import UserInfo from '../../components/UserInfo/UserInfo';

import { getUserDataAction } from '../../store/actions/user-action';

import './style.css';

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const isLoading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.error);
  const [newsArray, setNews] = useState([]);

  useEffect(() => {
    dispatch(getUserDataAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setNews(userData?.News ?? []);
  }, [userData?.News]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Header pageName="user-news" />
      {error ? (
        <h3 className="error">Пока нет добавленых новостей</h3>
      ) : (
        <div className="content">
          <div className="user-info">
            {userData ? <UserInfo user={userData} /> : null}
          </div>
          <div className="user-news">
            {newsArray.length > 0 ? newsArray.map((news) => (
              <NewsCard news={news} key={news.id} />
            )) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
