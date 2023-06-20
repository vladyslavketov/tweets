import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const updPathname = pathname.replace('/', '');

  return (
    <header className={css.header}>
      <div className="container">
        <Link to="/" className={css.logo}>
          follo
        </Link>
        <nav>
          <ul className={css.navList}>
            <li>
              {updPathname ? (
                <button className={css.navLink} onClick={() => navigate(-1)}>
                  Back to home
                </button>
              ) : (
                <NavLink to="/tweets" className={css.navLink}>
                  Go to tweets
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
