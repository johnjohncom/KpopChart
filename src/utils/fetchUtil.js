// 공통 fetch 유틸 함수 (에러/로딩 처리 포함)
export async function fetchWithState(url, options = {}) {
  let result = { data: null, error: null, loading: true };
  
  try {
    // URL 검증
    if (!url || typeof url !== 'string') {
      throw new Error('유효하지 않은 URL입니다.');
    }
    
    const response = await fetch(url, {
      ...options,
      // 보안 헤더 추가
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      // 상세한 에러 정보를 숨기고 일반적인 메시지 반환
      if (response.status >= 500) {
        throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else if (response.status === 404) {
        throw new Error('요청한 데이터를 찾을 수 없습니다.');
      } else if (response.status === 403) {
        throw new Error('접근 권한이 없습니다.');
      } else {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
    }
    
    const data = await response.json();
    result.data = data;
  } catch (error) {
    // 에러 메시지 일반화 (개발 환경에서만 상세 정보 표시)
    if (process.env.NODE_ENV === 'development') {
      console.error('API 요청 에러:', error);
    }
    result.error = error.message || '알 수 없는 에러가 발생했습니다.';
  } finally {
    result.loading = false;
  }
  
  return result;
}
