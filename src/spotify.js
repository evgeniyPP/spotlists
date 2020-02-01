let accessToken;
const clientId = '55ea3ac239044c8ca84ab4a6125c783f';
const redirectUri = 'https://epp-spotlists.herokuapp.com/';

export default {
  checkAccessToken() {
    return Boolean(accessToken);
  },
  getAccessToken() {
    if (accessToken)
      return {
        status: true,
        accessToken
      };

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return {
        status: true,
        accessToken
      };
    } else {
      return {
        status: false
      };
    }
  },
  redirect() {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  },
  async search(query) {
    const accessToken = this.getAccessToken().accessToken;
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await response.json();
    if (!data.tracks) {
      return [];
    }
    return data.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!trackUris.length) {
      alert('Please, add some tracks');
      return Promise.resolve();
    }

    if (!name) {
      name = 'Новый плейлист';
    }

    const accessToken = this.getAccessToken().accessToken;
    const headers = { Authorization: `Bearer ${accessToken}` };

    const userResponse = await fetch('https://api.spotify.com/v1/me', { headers: headers });
    const user = await userResponse.json();

    const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({ name: name })
    });
    const playlist = await playlistResponse.json();

    return await fetch(
      `https://api.spotify.com/v1/users/${user.id}/playlists/${playlist.id}/tracks`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackUris })
      }
    );
  }
};
