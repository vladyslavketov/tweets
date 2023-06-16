import { useEffect, useState } from 'react';

import UserList from '../../components/UserList/UserList';
import { fetchUsers } from '../../services/api';
import forUseLocalStorage from '../../utils/useLocalStorage';

const Tweets = () => {
  const lsUsers = forUseLocalStorage('users');
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [users, setUsers] = useState(lsUsers);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (!lsUsers) {
      fetchUsers().then(res => {
        forUseLocalStorage('users', 'set', res);
        setUsers(res);
      });
    }
  }, [isFirstRender, lsUsers]);

  return (
    <section className="section">
      <div className="container">
        {users && <UserList users={users} />}
      </div>
    </section>
  );
};

export default Tweets;
