import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import UserInfo from '../../components/UserInfo/UserInfo';
import AddNewsModal from '../../components/AddNewsModal/AddNewsModal';

import { getUserDataAction } from '../../store/actions/user-action';

import './style.css';

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const isLoading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.error);
  const authUserId = useSelector((state) => state.authReducer.user?.id);
  const [newsArray, setNews] = useState([]);

  useEffect(() => {
    dispatch(getUserDataAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setNews(userData?.news ?? []);
  }, [userData?.news]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Header pageName="user-news" />
      {error ? (
        <h3 className="error">Что-то пошло не так, попробуйте позже</h3>
      ) : (
        <div className="content">
          <div className="user-info">
            {userData ? <UserInfo user={userData} /> : null}
            {authUserId === Number(id) ? <AddNewsModal /> : null}
          </div>
          <div className='news-content'>
          {newsArray.length > 0 ? newsArray.map((news) => (
            <NewsCard news={news} author={userData} key={news.id} />
          )) : <h3 className="error">Пока нет добавленых новостей</h3>}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
