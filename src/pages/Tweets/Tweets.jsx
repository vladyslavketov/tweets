import { useEffect, useState } from 'react';

import { fetchAllUsers, fetchUsers } from '../../services/api';
import forUseLocalStorage from '../../utils/useLocalStorage';
import UserList from '../../components/UserList/UserList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

const Tweets = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [users, setUsers] = useState([]);
  const [usersLS, setUsersLS] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [disabledLoadMoreBtn, setDisabledLoadMoreBtn] = useState(false);

  const onLoadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      setUsersLS(forUseLocalStorage('users'));
      return;
    }

    if (!totalPages) {
      fetchAllUsers().then(res => {
        setTotalPages(res.length / 3);

        if (Boolean(forUseLocalStorage('users'))) return;

        const newRes = res.map(item => ({ ...item, isFollowing: false }));
        forUseLocalStorage('users', 'set', newRes);
      });
      return;
    }

    fetchUsers(page).then(res => {
      const afterCheck = usersLS.filter(({ id }) => res.some(x => x.id === id));
      setUsers(prevState => [...prevState, ...afterCheck]);
    });

    if (page === totalPages) setDisabledLoadMoreBtn(true);
  }, [isFirstRender, totalPages, page, usersLS]);

  return (
    <section className="section tweets">
      <div className="container">
        {users && (
          <div className="tweets__wrap">
            <UserList users={users} />
            <LoadMoreBtn
              onClick={onLoadMoreBtnClick}
              disabled={disabledLoadMoreBtn}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tweets;
