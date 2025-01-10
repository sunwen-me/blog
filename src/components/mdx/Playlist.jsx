import React, { useState } from 'react';

const Playlist = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { title: 'Song 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Song 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Song 3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
  ];

  return (
    <div>
      <h3>Song Playlist</h3>
      <ul>
        {tracks.map((track, index) => (
          <li key={index} onClick={() => setCurrentTrack(track.url)}>
            {track.title}
          </li>
        ))}
      </ul>

      {currentTrack && (
        <div style={{ marginTop: '20px' }}>
          <h4>Now Playing</h4>
          <audio controls src={currentTrack} style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Playlist;
