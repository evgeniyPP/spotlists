import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../store/actions';
import styles from '../styles/SearchBar.module.css';

const SearchBar: React.FC = _ => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  return (
    <div className={styles.searchBar}>
      <input
        placeholder="Введите песню, альбом или артиста"
        onChange={e => setQuery(e.currentTarget.value)}
      />
      <button className={styles.searchButton} onClick={_ => dispatch(search(query))}>
        ПОИСК
      </button>
    </div>
  );
};

export default SearchBar;

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: ''
//     };
//     this.search = this.search.bind(this);
//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   search() {
//     this.props.onSearch(this.state.term);
//   }

//   handleTermChange(event) {
//     this.setState({
//       term: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="SearchBar">
//         <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
//         <button className="SearchButton" onClick={this.search}>
//           SEARCH
//         </button>
//       </div>
//     );
//   }
// }
