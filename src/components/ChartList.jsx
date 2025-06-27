// ChartList: 차트 데이터 목록 렌더링, 로딩/에러 상태 표시
import React from "react";
import PropTypes from "prop-types";
import SongCard from "./SongCard";
import { validateSongData, sanitizeSongData } from "../utils/validation";

function ChartList({ songs, loading, error }) {
  if (loading) {
    return <div>로딩 중...</div>;
  }
  
  if (error) {
    return (
      <div style={{ color: "red", padding: "16px", backgroundColor: "#fff5f5", border: "1px solid #fed7d7", borderRadius: "4px" }}>
        에러: {error}
      </div>
    );
  }
  
  if (!songs || songs.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  // 데이터 검증 및 sanitization
  const validSongs = songs
    .filter(validateSongData)
    .map(sanitizeSongData)
    .filter(Boolean); // null 값 제거

  if (validSongs.length === 0) {
    return <div>유효한 데이터가 없습니다.</div>;
  }

  return (
    <div>
      {validSongs.map((song) => (
        <SongCard
          key={`${song.rank}-${song.title}-${song.artist}`} // 더 안전한 key 생성
          rank={song.rank}
          title={song.title}
          composer={song.composer}
          artist={song.artist}
          albumImage={song.albumImage}
        />
      ))}
    </div>
  );
}

ChartList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

ChartList.defaultProps = {
  songs: [],
  error: null,
};

export default ChartList;
