import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePlaylist } from '../store/actions';
import { IState } from '../interfaces';
import TrackList from './TrackList';
import styles from '../styles/Playlist.module.css';

const Playlist: React.FC = _ => {
  const dispatch = useDispatch();
  const playlistName = useSelector((state: IState) => state.playlistName);
  const playlistTracks = useSelector((state: IState) => state.playlistTracks);

  return (
    <div className={styles.playlist}>
      <input
        value={playlistName}
        placeholder="Название плейлиста"
        onChange={e => dispatch({ type: 'CHANGE_NAME', payload: e.currentTarget.value })}
      />
      <TrackList from="playlist" tracks={playlistTracks} />
      <button
        className={styles.savePlaylist}
        onClick={() => {
          dispatch(savePlaylist(playlistName, playlistTracks));
        }}
      >
        СОХРАНИТЬ
      </button>
    </div>
  );
};

export default Playlist;
