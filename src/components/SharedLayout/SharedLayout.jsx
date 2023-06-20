import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { animateScroll } from 'react-scroll';

const SharedLayout = () => {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={'Loading...'}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
