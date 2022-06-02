import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import NewsCard from '../../components/NewsCard/NewsCard';

import { getUserDataAction } from '../../store/actions/user-action';

import './style.css';

function UserPage() {
  const { id } = useParams();
  console.log(id,"iddd");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const isLoading = useSelector((state) => state.userReducer.loading);
  console.log(userData.news);

  useEffect(() => {
      dispatch(getUserDataAction(id));
  }, []);

  return (
    <div>
      <Header />
      <div className="content">
      {
      !isLoading
      && userData.news > 0
      && userData.news.map((element) => (<NewsCard element={element} key={element.id} />))
      }
      </div>
    </div>
  );
}

export default UserPage;
