import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <section className="section">
      <div className={css.container}>
        <div className={css.title__wrap}>
          <h2>looking for a Developer</h2>
          <h1>to create tools and solutions</h1>
          <h2>for your business?</h2>
        </div>
        <h2>need quality and fast solutions?</h2>
        <strong>we can solve your problem</strong>
        <div>
          <p>create a simple app in 5 days</p>
          <p>using React - a JavaScript library</p>
          <p>for building user interfaces</p>
        </div>
        <div>
          <p>a prototype of this application will be</p>
          <p>will be sent to you free of charge</p>
          <p>for your review and testing</p>
        </div>
        <div className={css.example}>
          <p>for example</p>
          <p>we want show your part of our follo app</p>
          <p>basic feature:</p>
          <p>
            you can interact with the data collection, sort the data, change the
            state of the data, and save it
          </p>
          <NavLink to="/tweets" className={css.navLink}>
            Go to tweets
          </NavLink>
          <p>
            all data is fictitious and is used only to demonstrate the
            application's capabilities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
