import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Modal from './Modal';
import Preloader from './Preloader';
import Spotify from '../spotify';
import { IAccessToken, IState } from '../interfaces';
import styles from '../styles/App.module.css';
import { useSelector } from 'react-redux';

const App: React.FC = _ => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const playlistName = useSelector((state: IState) => state.playlistName);
  const playlistTracks = useSelector((state: IState) => state.playlistTracks);

  useEffect(() => {
    const accessToken: IAccessToken = Spotify.getAccessToken();
    if (!accessToken.status) {
      setShowModal(true);
    }
    setLoading(false);

    window.onbeforeunload = () => {
      localStorage.setItem(
        'spotlists/data',
        JSON.stringify({
          playlistName,
          playlistTracks
        })
      );
    };
  }, [playlistName, playlistTracks]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Modal isOpen={showModal} setLoading={setLoading} />
      <h1>
        Spot<span className={styles.highlight}>lists</span>
      </h1>
      <div className={styles.app}>
        <SearchBar />
        <div className={styles.playlist}>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
