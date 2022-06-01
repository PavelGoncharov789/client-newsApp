import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDataAction } from '../../store/actions/user-action';

function UserPage() {
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.userReducer.userData);
  // console.log("asdas", userData);
  useEffect(() => {
      dispatch(getUserDataAction());
  }, []);

  return (<h1>USER PAGE</h1>);
}

export default UserPage;
