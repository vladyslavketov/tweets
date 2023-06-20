import { useState } from 'react';

import css from './Filter.module.css';

const Filter = ({ currentFilter, handleSelectFilter }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['show all', 'follow', 'followings'];

  const onFilterChange = option => {
    handleSelectFilter(option);
    setIsActive(false);
  };

  return (
    <div className={css.filter}>
      <span>Select tweets</span>
      <div className={css.filter__listWrap}>
        {!isActive && (
          <button
            className={css.filter__currentBtn}
            onClick={() => setIsActive(true)}
          >
            {currentFilter}
          </button>
        )}
        {isActive && (
          <ul className={css.filter__list}>
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className={css.filter__btn}
                  onClick={() => onFilterChange(option)}
                  disabled={currentFilter === option}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
