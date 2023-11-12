import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from '@/store';
import { PATHS } from '@/config';

interface WithAuthProps {
  children: React.ReactElement;
}

export function WithAuth({ children }: WithAuthProps) {
  const location = useLocation();
  const user = useTypedSelector((store) => store.auth.user);

  if (!user) {
    return <Navigate to={PATHS.auth.login} replace state={{ from: location }} />;
  }

  return children;
}
