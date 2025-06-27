// 데이터 검증 및 sanitization 유틸 함수
export function validateApiUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }
  
  try {
    const parsedUrl = new URL(url);
    // localhost나 허용된 도메인만 허용
    const allowedHosts = ['localhost', '127.0.0.1'];
    const allowedProtocols = ['http:', 'https:'];
    
    return allowedProtocols.includes(parsedUrl.protocol) && 
           (allowedHosts.includes(parsedUrl.hostname) || parsedUrl.hostname.endsWith('.local'));
  } catch {
    return false;
  }
}

export function validateImageUrl(imageUrl) {
  if (!imageUrl || typeof imageUrl !== 'string') {
    return false;
  }
  
  try {
    const parsedUrl = new URL(imageUrl);
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
  } catch {
    return false;
  }
}

export function sanitizeString(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  
  // HTML 특수문자 이스케이프
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export function validateSongData(song) {
  if (!song || typeof song !== 'object') {
    return false;
  }
  
  const { rank, title, artist, composer, albumImage } = song;
  
  return (
    typeof rank === 'number' && rank > 0 &&
    typeof title === 'string' && title.length > 0 &&
    typeof artist === 'string' && artist.length > 0 &&
    typeof composer === 'string' && composer.length > 0 &&
    (!albumImage || validateImageUrl(albumImage))
  );
}

export function sanitizeSongData(song) {
  if (!validateSongData(song)) {
    return null;
  }
  
  return {
    rank: song.rank,
    title: sanitizeString(song.title),
    artist: sanitizeString(song.artist),
    composer: sanitizeString(song.composer),
    albumImage: song.albumImage || '/default-album.svg'
  };
}