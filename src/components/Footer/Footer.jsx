import { Link } from 'react-router-dom';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>Powerd By</p>
      <Link
        className={css.footer__link}
        to="https://vketov.space"
        target="_blank"
      >
        vketoV.Space
      </Link>
    </footer>
  );
};

export default Footer;
