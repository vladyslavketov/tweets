import { useEffect, useState } from 'react';
import FollowBtn from '../FollowBtn/FollowBtn';
import css from './UserCard.module.css';
import forUseLocalStorage from '../../utils/useLocalStorage';

const UserCard = ({ user }) => {
  const { id, tweets, followers, avatar } = user;
  const [isFollowing, setIsFollowing] = useState(user.isFollowing || false);
  const [countedFollowers, setCountedFollowers] = useState(followers);

  const updateIsFollowingInLs = () => {
    const usersLS = forUseLocalStorage('users');

    if (!Boolean(usersLS)) return;
    const indexCurrentUser = usersLS.findIndex(item => item.id === id);
    const updatedCurrentUser = (usersLS[indexCurrentUser] = {
      ...user,
      isFollowing,
    });

    usersLS.splice(indexCurrentUser, 1, updatedCurrentUser);
    forUseLocalStorage('users', 'set', usersLS);
  };

  useEffect(() => {
    if (!isFollowing) {
      setCountedFollowers(followers);
      return;
    }

    setCountedFollowers(followers + 1);
  }, [isFollowing, followers]);

  useEffect(updateIsFollowingInLs, [isFollowing, user, id]);

  return (
    <div className={css.userCard}>
      <img
        className={css.logo}
        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
        alt="Logo"
        width={76}
        height={22}
      />
      <img
        className={css.quoteImg}
        src={`${process.env.PUBLIC_URL}/images/quote.svg`}
        alt="Decore"
        width={308}
        height={168}
      />
      <div className={css.avatarBox}>
        <div className={css.avatarWrap}>
          <img
            className={css.avatar}
            src={avatar}
            alt="Avatar"
            width={62}
            height={62}
          />
        </div>
      </div>
      <p className={css.tweets}>
        <span>{tweets}</span> Tweets
      </p>
      <p className={css.followers}>
        <span>{countedFollowers.toLocaleString('en-US')}</span> Followers
      </p>
      <FollowBtn isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
    </div>
  );
};

export default UserCard;
