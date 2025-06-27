// API 관련 상수 분리
import { validateApiUrl } from '../utils/validation';

// 환경 변수 검증 및 fallback 처리
const getApiBaseUrl = () => {
  const envUrl = process.env.REACT_APP_API_BASE_URL;
  
  if (envUrl && validateApiUrl(envUrl)) {
    return envUrl;
  }
  
  // 개발 환경에서만 경고 표시
  if (process.env.NODE_ENV === 'development') {
    console.warn('API_BASE_URL이 설정되지 않았거나 유효하지 않습니다. 기본값을 사용합니다.');
  }
  
  return 'http://localhost:5000';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  MELON_TOP100: '/v1/melon/music/chart/100',
  BUGS_TOP100: '/v1/bugs/music/chart/100',
  GENIE_TOP200: '/v1/genie/music/chart/200',
};
