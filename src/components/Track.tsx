import React from 'react';
import { ITrack, IFrom } from '../interfaces';
import styles from '../styles/Track.module.css';
import { useDispatch } from 'react-redux';

interface ITrackProps {
  key: string | number;
  track: ITrack;
  from: IFrom;
}

const Track: React.FC<ITrackProps> = props => {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <Button track={props.track} from={props.from} />
    </div>
  );
};

export default Track;

interface IButtonProps {
  track: ITrack;
  from: IFrom;
}

function Button(props: IButtonProps) {
  const dispatch = useDispatch();

  const addTrack = () => {
    dispatch({
      type: 'ADD_TRACK',
      payload: props.track
    });
  };

  const removeTrack = () => {
    dispatch({
      type: 'REMOVE_TRACK',
      payload: props.track.id
    });
  };

  if (props.from === 'search') {
    return (
      <button className={styles.action} onClick={addTrack}>
        +
      </button>
    );
  } else {
    return (
      <button className={styles.action} onClick={removeTrack}>
        –
      </button>
    );
  }
}

// class Track extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addTrack = this.addTrack.bind(this);
//     this.removeTrack = this.removeTrack.bind(this);
//   }

//   renderAction() {
//     const { isRemoval } = this.props;
//     if (!isRemoval)
//   return (
//     <button className="Track-action" onClick={this.addTrack}>
//       +
//     </button>
//   );
// else
//   return (
//     <button className="Track-action" onClick={this.removeTrack}>
//       -
//     </button>
//   );
//   }

//   addTrack() {
//     this.props.onAdd(this.props.track);
//   }

//   removeTrack() {
//     this.props.onRemove(this.props.track);
//   }

//   render() {
//     const { track } = this.props;

//     return (
//       <div className="Track">
//         <div className="Track-information">
//           <h3>{track.name}</h3>
//           <p>
//             {track.artist} | {track.album}
//           </p>
//         </div>
//         {this.renderAction()}
//       </div>
//     );
//   }
// }
