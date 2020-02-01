import React from 'react';
import TrackList from './TrackList';
import { useSelector } from 'react-redux';
import { IState } from '../interfaces';
import styles from '../styles/SearchResults.module.css';

const SearchResults: React.FC = _ => {
  const tracks = useSelector((state: IState) => state.searchResults);

  return (
    <div className={styles.searchResults}>
      <h2>Результаты</h2>
      <TrackList from="search" tracks={tracks} />
    </div>
  );
};

export default SearchResults;
