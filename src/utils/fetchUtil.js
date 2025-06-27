// 공통 fetch 유틸 함수 (에러/로딩 처리 포함)
export async function fetchWithState(url, options = {}) {
  let result = { data: null, error: null, loading: true };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    result.data = data;
  } catch (error) {
    result.error = error.message || '알 수 없는 에러';
  } finally {
    result.loading = false;
  }
  return result;
}
