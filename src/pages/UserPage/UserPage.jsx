import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getUserDataAction(id));
  }, [dispatch, id]);

  const arrayForRender = userData?.news?.length > 0;

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
            {arrayForRender ? userData.news.map((element) => (
              <NewsCard element={element} key={element.id} />
            )) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
