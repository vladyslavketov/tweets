import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
