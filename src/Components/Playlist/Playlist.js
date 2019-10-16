import React from "react";
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
      super(props);
      this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }

    render() {
      const { playlistTracks, onRemove, onSave } = this.props;
      return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={onSave} >SAVE TO SPOTIFY</button>
        </div>
      )
    }
}

export default Playlist;