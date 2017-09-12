var playlist = {
  'Brand New': 'Jesus Christ'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName] = songTitle;
  return playlist;
}