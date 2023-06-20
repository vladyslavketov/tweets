import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={disabled}>
      {disabled ? 'No More' : 'Load More'}
    </button>
  );
};

export default LoadMoreBtn;
