import { useCallback, useEffect, useState } from 'react';

import { fetchAllUsers, fetchUsers } from '../../services/api';
import getCurrentItemsPerPage from '../../utils/getCurrentItem';
import forUseLocalStorage from '../../utils/useLocalStorage';
import UserList from '../../components/UserList/UserList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Filter from '../../components/Filter/Filter';
import { ITEMS_PER_PAGE } from '../../constans';
import css from './Tweets.module.css';

const Tweets = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [disabledLoadMoreBtn, setDisabledLoadMoreBtn] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('show all');

  const setAllUsers = async () => {
    const allUsers = await fetchAllUsers();
    const upodateAllUsers = allUsers.map(item => ({
      ...item,
      isFollowing: false,
    }));
    forUseLocalStorage('users', 'set', upodateAllUsers);
  };

  const setUsersPerPage = useCallback(async () => {
    const usersDB = await fetchUsers(page);
    const chekedUsers = forUseLocalStorage('users')?.filter(({ id }) =>
      usersDB.some(x => x.id === id)
    );

    setUsers(prevState => [...prevState, ...chekedUsers]);
  }, [page]);

  const setUsersToRender = useCallback(async () => {
    if (!forUseLocalStorage('users')) {
      await setAllUsers();
    }

    switch (currentFilter) {
      case 'show all':
        setUsersPerPage();
        setTotalPages(
          Math.ceil(forUseLocalStorage('users').length / ITEMS_PER_PAGE)
        );
        break;

      case 'follow':
        const followUsers = forUseLocalStorage('users')?.filter(
          i => !i.isFollowing
        );
        const followUsersPerPage = getCurrentItemsPerPage(followUsers, page);
        setUsers(prevState => [...prevState, ...followUsersPerPage]);
        setTotalPages(Math.ceil(followUsers.length / ITEMS_PER_PAGE));
        break;

      case 'followings':
        const followingsUsers = forUseLocalStorage('users')?.filter(
          i => i.isFollowing
        );
        const followingsUsersPerPage = getCurrentItemsPerPage(
          followingsUsers,
          page
        );
        setUsers(prevState => [...prevState, ...followingsUsersPerPage]);
        setTotalPages(Math.ceil(followingsUsers.length / ITEMS_PER_PAGE));
        break;

      default:
        const defaultUsers = forUseLocalStorage('users');
        const defaultUsersPerPage = getCurrentItemsPerPage(defaultUsers, page);
        setUsers(prevState => [...prevState, ...defaultUsersPerPage]);
        setTotalPages(Math.ceil(defaultUsers.length / ITEMS_PER_PAGE));
    }
  }, [currentFilter, setUsersPerPage, page]);

  const handlePageIncrement = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSelectFilter = option => {
    setCurrentFilter(option);
    setPage(1);
    setUsers([]);
    setDisabledLoadMoreBtn(false);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setUsersToRender();
  }, [isFirstRender, setUsersToRender]);

  useEffect(() => {
    if (totalPages > page) setDisabledLoadMoreBtn(false);
    else setDisabledLoadMoreBtn(true);
  }, [totalPages, page]);

  return (
    <section className="section tweets">
      <div className="container">
        {users && (
          <div className={css.tweets__wrap}>
            <Filter
              currentFilter={currentFilter}
              handleSelectFilter={handleSelectFilter}
            />
            <div className={css.userList__wrap}>
              <UserList users={users} />
            </div>
            {!disabledLoadMoreBtn && (
              <LoadMoreBtn
                onClick={handlePageIncrement}
                disabled={disabledLoadMoreBtn}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tweets;
