import React from "react";
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
      const { tracks, onAdd, onRemove, isRemoval } = this.props;

      return (
        <div className="TrackList">
            { tracks.map(track => {
                return (
                  <Track track={track} key={track.id} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />
                )
            }) }
        </div>
      )
    }
}

export default TrackList;