import React, { useEffect, useState } from 'react';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';
import { fetchWithState } from '../utils/fetchUtil';
import ChartList from '../components/ChartList';

const MelonChart = () => {
  const [songs, set_songs] = useState([]);
  const [loading, set_loading] = useState(true);
  const [error, set_error] = useState(null);

  useEffect(() => {
    let is_mounted = true;
    set_loading(true);
    set_error(null);
    
    // API URL 검증
    if (!API_BASE_URL) {
      set_error('API 서버 설정이 올바르지 않습니다.');
      set_loading(false);
      return;
    }
    
    fetchWithState(API_BASE_URL + API_ENDPOINTS.MELON_TOP100)
      .then((result) => {
        if (is_mounted) {
          set_songs(Array.isArray(result.data) ? result.data : []);
          set_error(result.error);
          set_loading(result.loading);
        }
      })
      .catch((err) => {
        if (is_mounted) {
          set_error('데이터를 불러오는데 실패했습니다.');
          set_loading(false);
        }
      });
      
    return () => {
      is_mounted = false;
    };
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>멜론 TOP100</h2>
      <ChartList songs={songs} loading={loading} error={error} />
    </div>
  );
};

export default MelonChart;
