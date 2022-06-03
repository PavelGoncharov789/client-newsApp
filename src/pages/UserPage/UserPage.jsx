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

  if (error) {
    return (
      <div>
        <Header />
        <h3 className="error">{error}</h3>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="content">
        <div className="user-info">
          <UserInfo userData={userData} />
        </div>
        <div className="user-news">
          {
          !isLoading
          && userData
          && userData?.news?.length > 0
          && userData?.news?.map((element) => (<NewsCard element={element} key={element.id} />))
          }
        </div>
      </div>
    </div>
  );
}

export default UserPage;
