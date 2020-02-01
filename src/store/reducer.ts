import { IState, IAction, IHandler } from '../interfaces';

const initialState: IState = {
  searchResults: [],
  playlistName: '',
  playlistTracks: []
};

const handlers: IHandler = {
  ADD_TRACK: (state, action) =>
    action?.payload && !state.playlistTracks.find(savedTrack => savedTrack.id === action.payload.id)
      ? {
          ...state,
          playlistTracks: [...state.playlistTracks, action.payload]
        }
      : state,
  REMOVE_TRACK: (state, action) =>
    action?.payload
      ? {
          ...state,
          playlistTracks: state.playlistTracks.filter(track => track.id !== action.payload)
        }
      : state,
  SEARCH: (state, action) =>
    action?.payload
      ? {
          ...state,
          searchResults: action.payload
        }
      : state,
  CHANGE_NAME: (state, action) =>
    action && (action.payload !== null || undefined)
      ? {
          ...state,
          playlistName: action.payload
        }
      : state,
  REFRESH: state => ({
    ...state,
    playlistName: '',
    playlistTracks: []
  }),
  DEFAULT: state => state
};

export default (state = initialState, action: IAction) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
