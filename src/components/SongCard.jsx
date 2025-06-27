import React from 'react';
import {
  SONG_CARD_CONTAINER_STYLE,
  ALBUM_IMAGE_CONTAINER_STYLE,
  ALBUM_IMAGE_STYLE,
  CONTENT_CONTAINER_STYLE,
  RANK_TEXT_STYLE,
  TITLE_TEXT_STYLE,
  ARTIST_TEXT_STYLE,
  COMPOSER_TEXT_STYLE
} from '../constants/songCardStyles';

const SongCard = ({ rank, title, artist, albumImage, composer }) => (
  <div style={SONG_CARD_CONTAINER_STYLE}>
    <div style={ALBUM_IMAGE_CONTAINER_STYLE}>
      {albumImage ? (
        <img 
          src={albumImage} 
          alt={`${title} 앨범`}
          style={ALBUM_IMAGE_STYLE}
        />
      ) : (
        '앨범'
      )}
    </div>
    <div style={CONTENT_CONTAINER_STYLE}>
      <div style={RANK_TEXT_STYLE}>
        #{rank}
      </div>
      <div style={TITLE_TEXT_STYLE}>
        {title}
      </div>
      <div style={ARTIST_TEXT_STYLE}>
        {artist}
      </div>
      {composer && (
        <div style={COMPOSER_TEXT_STYLE}>
          작곡: {composer}
        </div>
      )}
    </div>
  </div>
);

export default SongCard;