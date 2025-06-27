import React from 'react';
import SongCard from './SongCard';
import {
  CHART_LIST_CONTAINER_STYLE,
  LOADING_MESSAGE_STYLE
} from '../constants/chartListStyles';

const ChartList = ({ songs = [] }) => (
  <div style={CHART_LIST_CONTAINER_STYLE}>
    {songs.length > 0 ? (
      songs.map((song) => (
        <SongCard
          key={song.rank}
          rank={song.rank}
          title={song.title}
          artist={song.artist}
          albumImage={song.albumImage}
          composer={song.composer}
        />
      ))
    ) : (
      <div style={LOADING_MESSAGE_STYLE}>
        차트 데이터를 불러오는 중...
      </div>
    )}
  </div>
);

export default ChartList;