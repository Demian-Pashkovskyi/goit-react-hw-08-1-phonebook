import Button from '@mui/material/Button';
import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser, removeUserData } from 'redux/auth/auth-slice';
import {
  selectIsLoggedIn,
  selectToken,
  selectUser,
} from 'redux/auth/auth-selectors';
import { useLogoutMutation } from 'services/contactsApi';
import { useFetchCurrentUserQuery } from 'services/contactsApi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [logout] = useLogoutMutation();
  const handleLogout = () => {
    logout();
    dispatch(removeUserData());
  };
  const { data, isSuccess } = useFetchCurrentUserQuery(undefined, {
    skip,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(refreshUser(data));
    }
  }, [data, dispatch, isSuccess]);

  useEffect(() => {
    if (!token && !isLoggedIn) {
      setSkip(true);
    } else {
      setSkip(false);
    }
  }, [isLoggedIn, token]);

  return (
    <Box display="flex" gridGap="10px" alignItems="center">
      {user?.email && (
        <>
          <span>Welcome, {user.email}</span>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </>
      )}
    </Box>
  );
};