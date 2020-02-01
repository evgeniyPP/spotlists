import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../store/actions';
import styles from '../styles/SearchBar.module.css';

const SearchBar: React.FC = _ => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(search(query));
    setQuery('');
  }, [dispatch, query]);

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleClick();
      }
    };

    document.addEventListener('keydown', handlePress);
    return () => document.removeEventListener('keydown', handlePress);
  }, [handleClick]);

  return (
    <div className={styles.searchBar}>
      <input
        value={query}
        placeholder="Введите песню, альбом или артиста"
        onChange={e => setQuery(e.currentTarget.value)}
      />
      <button className={styles.searchButton} onClick={handleClick}>
        ПОИСК
      </button>
    </div>
  );
};

export default SearchBar;
