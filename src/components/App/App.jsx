import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from '../SharedLayout/SharedLayout';
import Home from '../../pages/Home/Home';
import Tweets from '../../pages/Tweets/Tweets';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default App;
