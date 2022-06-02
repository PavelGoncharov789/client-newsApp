import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDataAction } from '../../store/actions/user-action';

function UserPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer.user);
  const userData = useSelector((state) => state.userReducer.userData);

  useEffect(() => {
    if (authUser) {
      dispatch(getUserDataAction(authUser.id));
    }
  }, [authUser]);

  return (
    <div>
      <h1>USER PAGE</h1>
    </div>
  );
}

export default UserPage;
