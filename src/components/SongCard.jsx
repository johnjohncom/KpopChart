// SongCard: 곡 정보(순위, 제목, 작곡가, 가수, 앨범 사진) 표시
import React from "react";
import PropTypes from "prop-types";
import { sanitizeString, validateImageUrl } from "../utils/validation";

function SongCard({ rank, title, composer, artist, albumImage }) {
  // 이미지 URL 검증 및 fallback 처리
  const getSafeImageUrl = (imageUrl) => {
    if (!imageUrl || !validateImageUrl(imageUrl)) {
      return '/default-album.svg'; // 기본 이미지
    }
    return imageUrl;
  };

  // props 검증
  if (!rank || !title || !composer || !artist) {
    return null; // 필수 데이터가 없으면 렌더링하지 않음
  }

  return (
    <div className="song-card">
      <div style={{ marginRight: 16 }}>
        <img 
          src={getSafeImageUrl(albumImage)} 
          alt={`${sanitizeString(title)} 앨범 커버`}
          onError={(e) => {
            e.target.src = '/default-album.svg';
          }}
        />
      </div>
      <div>
        <div style={{ fontWeight: "bold", fontSize: 18 }}>
          {rank}. {sanitizeString(title)}
        </div>
        <div style={{ color: "#666", fontSize: 14 }}>
          작곡: {sanitizeString(composer)}
        </div>
        <div style={{ color: "#333", fontSize: 15 }}>
          가수: {sanitizeString(artist)}
        </div>
      </div>
    </div>
  );
}

SongCard.propTypes = {
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  composer: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  albumImage: PropTypes.string,
};

SongCard.defaultProps = {
  albumImage: '/default-album.svg',
};

export default SongCard;
