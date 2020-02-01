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

// class SearchResults extends React.Component {
//     render() {
//       const { searchResults, onAdd } = this.props;

//       return (
//         <div className="SearchResults">
//             <h2>Results</h2>
//             <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
//         </div>
//       )
//     }
// }

// class TrackList extends React.Component {
//   render() {
//     const { tracks, onAdd, onRemove, isRemoval } = this.props;

//     return (
//       <div className="TrackList">
//         {tracks.map(track => {
//           return (
//             <Track
//               track={track}
//               key={track.id}
//               onAdd={onAdd}
//               onRemove={onRemove}
//               isRemoval={isRemoval}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }
