export type IActionType =
  | 'ADD_TRACK'
  | 'REMOVE_TRACK'
  | 'SEARCH'
  | 'CHANGE_NAME'
  | 'REFRESH'
  | 'DEFAULT';

export interface ITrack {
  id: string | number;
  name: string;
  artist: string;
  album: string;
  uri: string;
}

export interface IState {
  searchResults: ITrack[];
  playlistTracks: ITrack[];
  playlistName: string;
}

export interface IAction {
  type: IActionType;
  payload: any;
}

export interface IAccessToken {
  status: boolean;
  accessToken?: string;
}

export type IFrom = 'playlist' | 'search';

export type IHandler = {
  [type in IActionType]: (state: IState, action?: IAction) => IState;
};
