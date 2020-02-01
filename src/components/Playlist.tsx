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
  console.log(playlistName);

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

// class Playlist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleNameChange = this.handleNameChange.bind(this);
//   }

//   handleNameChange(event) {
//     this.props.onNameChange(event.target.value);
//   }

//   render() {
//     const { playlistTracks, onRemove, onSave } = this.props;
//     return (
//       <div className="Playlist">
//         <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
//         <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
//         <button className="Playlist-save" onClick={onSave}>
//           SAVE TO SPOTIFY
//         </button>
//       </div>
//     );
//   }
// }
