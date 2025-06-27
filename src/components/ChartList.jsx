// ChartList: 차트 데이터 목록 렌더링, 로딩/에러 상태 표시
import React from "react";
import SongCard from "./SongCard";

function ChartList({ songs, loading, error }) {

  if (loading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>에러: {error}</div>;
  }
  if (!songs || songs.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      {songs.map((song) => (
        <SongCard
          key={song.rank + song.title}
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

export default ChartList;
