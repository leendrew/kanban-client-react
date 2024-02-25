import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from '@/store';
import { PATHS } from '@/config';

export function WithAuth() {
  const location = useLocation();
  const isAuth = useSelector((store) => !!store.auth.user);

  if (!isAuth) {
    return (
      <Navigate
        to={PATHS.auth.login}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
