import css from './FollowBtn.module.css';

const FollowBtn = ({ isFollowing, setIsFollowing }) => {
  return (
    <button
      className={css.followBtn}
      data-isfollowing={isFollowing}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {!isFollowing ? 'Follow' : 'Following'}
    </button>
  );
};

export default FollowBtn;
