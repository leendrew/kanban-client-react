import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <header className="header">Header</header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </>
  );
}
