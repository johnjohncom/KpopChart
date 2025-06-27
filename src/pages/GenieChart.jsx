import React, { useEffect, useState } from 'react';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';
import { fetchWithState } from '../utils/fetchUtil';
import ChartList from '../components/ChartList';

function GenieChart() {
  const [songs, set_songs] = useState([]);
  const [loading, set_loading] = useState(true);
  const [error, set_error] = useState(null);

  useEffect(() => {
    let is_mounted = true;
    set_loading(true);
    set_error(null);
    fetchWithState(API_BASE_URL + API_ENDPOINTS.GENIE_TOP200)
      .then((result) => {
        if (is_mounted) {
          set_songs(Array.isArray(result.data) ? result.data : []);
          set_error(result.error);
          set_loading(result.loading);
        }
      });
    return () => {
      is_mounted = false;
    };
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>지니 TOP200</h2>
      <ChartList songs={songs} loading={loading} error={error} />
    </div>
  );
}

export default GenieChart;
