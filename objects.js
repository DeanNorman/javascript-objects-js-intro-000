var playlist = {
  'Brand New': 'Jesus Christ'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
