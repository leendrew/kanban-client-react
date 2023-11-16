import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
