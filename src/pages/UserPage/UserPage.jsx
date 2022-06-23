import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';
import UserInfo from '../../components/UserInfo/UserInfo';
import ModalForm from '../../components/modal/ModalForm';

import { getUserDataAction } from '../../store/actions/user-action';

import './style.css';
import Search from '../../components/Search/Search';

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const isLoading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.error);
  const user = useSelector((state) => state.authReducer.user);
  const [newsArray, setNews] = useState([]);
  const [resultArray, setResultArray] = useState();

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
      <Search
        arrayForFilter={userData?.news}
        setResultArray={setResultArray}
      />
      {error ? (
        <h3 className="error">Что-то пошло не так, попробуйте позже</h3>
      ) : (
        <div className="content">
          <div className="user-info">
            {userData ? <UserInfo user={userData} /> : null}
            {user?.id == id ? <ModalForm /> : null}
          </div>
          {resultArray 
          ? <div className="user-news">
              {resultArray.length > 0 ? resultArray.map((news) => (
                <NewsCard news={news} author={userData} key={news.id} />
              )) : <h3 className="error">Нет результата </h3>}
            </div>
          : <div className="user-news">
              {newsArray.length > 0 ? newsArray.map((news) => (
                <NewsCard news={news} author={userData} key={news.id} />
              )) : <h3 className="error">Пока нет добавленых новостей</h3>}
            </div>}
        </div>
      )}
    </div>
  );
}

export default UserPage;
