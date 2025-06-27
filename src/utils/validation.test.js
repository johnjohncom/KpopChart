// 보안 기능 테스트
import { 
  validateApiUrl, 
  validateImageUrl, 
  sanitizeString, 
  validateSongData, 
  sanitizeSongData 
} from '../utils/validation';

describe('Security Validation Tests', () => {
  describe('validateApiUrl', () => {
    test('허용된 localhost URL은 통과해야 함', () => {
      expect(validateApiUrl('http://localhost:5000')).toBe(true);
      expect(validateApiUrl('https://localhost:8080')).toBe(true);
      expect(validateApiUrl('http://127.0.0.1:3000')).toBe(true);
    });

    test('허용되지 않은 URL은 차단해야 함', () => {
      expect(validateApiUrl('http://malicious.com')).toBe(false);
      expect(validateApiUrl('javascript:alert(1)')).toBe(false);
      expect(validateApiUrl('ftp://localhost')).toBe(false);
      expect(validateApiUrl('')).toBe(false);
      expect(validateApiUrl(null)).toBe(false);
    });
  });

  describe('validateImageUrl', () => {
    test('유효한 이미지 URL은 통과해야 함', () => {
      expect(validateImageUrl('https://example.com/image.jpg')).toBe(true);
      expect(validateImageUrl('http://localhost/image.png')).toBe(true);
    });

    test('유효하지 않은 URL은 차단해야 함', () => {
      expect(validateImageUrl('javascript:alert(1)')).toBe(false);
      expect(validateImageUrl('data:image/svg+xml;base64,PHN2Zz4=')).toBe(false);
      expect(validateImageUrl('')).toBe(false);
      expect(validateImageUrl(null)).toBe(false);
    });
  });

  describe('sanitizeString', () => {
    test('HTML 특수문자가 이스케이프되어야 함', () => {
      expect(sanitizeString('<script>alert(1)</script>')).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
      expect(sanitizeString('"Hello" & \'World\'')).toBe('&quot;Hello&quot; &amp; &#x27;World&#x27;');
      expect(sanitizeString('  test  ')).toBe('test'); // trim 테스트
    });

    test('null/undefined/빈 문자열 처리', () => {
      expect(sanitizeString(null)).toBe('');
      expect(sanitizeString(undefined)).toBe('');
      expect(sanitizeString('')).toBe('');
      expect(sanitizeString(123)).toBe(''); // 숫자 타입
    });
  });

  describe('validateSongData', () => {
    const validSong = {
      rank: 1,
      title: 'Test Song',
      artist: 'Test Artist',
      composer: 'Test Composer',
      albumImage: 'https://example.com/image.jpg'
    };

    test('유효한 곡 데이터는 통과해야 함', () => {
      expect(validateSongData(validSong)).toBe(true);
    });

    test('필수 필드가 없으면 실패해야 함', () => {
      expect(validateSongData({ ...validSong, rank: null })).toBe(false);
      expect(validateSongData({ ...validSong, title: '' })).toBe(false);
      expect(validateSongData({ ...validSong, artist: undefined })).toBe(false);
      expect(validateSongData({ ...validSong, composer: '' })).toBe(false);
    });

    test('잘못된 타입은 실패해야 함', () => {
      expect(validateSongData({ ...validSong, rank: '1' })).toBe(false); // 문자열
      expect(validateSongData({ ...validSong, rank: 0 })).toBe(false); // 0 이하
      expect(validateSongData({ ...validSong, title: 123 })).toBe(false); // 숫자
    });
  });

  describe('sanitizeSongData', () => {
    test('유효한 데이터는 sanitize되어 반환되어야 함', () => {
      const input = {
        rank: 1,
        title: '<script>Test</script>',
        artist: 'Artist & Co',
        composer: '"Composer"',
        albumImage: 'https://example.com/image.jpg'
      };

      const result = sanitizeSongData(input);
      expect(result.title).toBe('&lt;script&gt;Test&lt;/script&gt;');
      expect(result.artist).toBe('Artist &amp; Co');
      expect(result.composer).toBe('&quot;Composer&quot;');
    });

    test('유효하지 않은 데이터는 null을 반환해야 함', () => {
      expect(sanitizeSongData(null)).toBe(null);
      expect(sanitizeSongData({})).toBe(null);
      expect(sanitizeSongData({ rank: 'invalid' })).toBe(null);
    });
  });
});