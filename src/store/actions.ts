import { ITrack } from './../interfaces';
import Spotify from '../spotify';

export const search = (query: string) => async (dispatch: Function) => {
  const searchResults = await Spotify.search(query);
  dispatch({
    type: 'SEARCH',
    payload: searchResults
  });
};

export const savePlaylist = (playlistName: string, playlistTracks: ITrack[]) => async (
  dispatch: Function
) => {
  const trackURIs = playlistTracks.map(track => track.uri);
  await Spotify.savePlaylist(playlistName, trackURIs);
  dispatch({
    type: 'REFRESH'
  });
};
