// SongCard: 곡 정보(순위, 제목, 작곡가, 가수, 앨범 사진) 표시
import React from "react";

function SongCard({ rank, title, composer, artist, albumImage }) {
  return (
    <div className="song-card">
      <div style={{ marginRight: 16 }}>
        <img src={albumImage} alt={title + " 앨범 커버"} />
      </div>
      <div>
        <div style={{ fontWeight: "bold", fontSize: 18 }}>{rank}. {title}</div>
        <div style={{ color: "#666", fontSize: 14 }}>작곡: {composer}</div>
        <div style={{ color: "#333", fontSize: 15 }}>가수: {artist}</div>
      </div>
    </div>
  );
}

export default SongCard;
