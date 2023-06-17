import { NavLink } from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li><NavLink to="/" className={css.navLink}>Home</NavLink></li>
          <li><NavLink to="/tweets" className={css.navLink}>Tweets</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
