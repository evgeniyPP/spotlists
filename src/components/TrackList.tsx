import React from 'react';
import { IFrom, ITrack } from '../interfaces';
import Track from './Track';
import styles from '../styles/TrackList.module.css';

interface ITrackListProps {
  from: IFrom;
  tracks: ITrack[];
}

const TrackList: React.FC<ITrackListProps> = props => (
  <div className={styles.tracklist}>
    {props.tracks.map(track => (
      <Track track={track} key={track.id} from={props.from} />
    ))}
  </div>
);

export default TrackList;
