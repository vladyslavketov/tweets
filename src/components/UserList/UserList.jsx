import css from './UserList.module.css';
import UserCard from '../UserCard/UserCard';

const UserList = ({ users }) => {
  return (
    <ul className={css.userList}>
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
