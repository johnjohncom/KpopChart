import React from 'react';
import ChartList from '../components/ChartList';

// 테스트용 샘플 데이터
const sampleSongs = [
  {
    rank: 1,
    title: "Seven (feat. Latto)",
    artist: "정국",
    composer: "Andrew Watt, Jon Bellion",
    albumImage: null
  },
  {
    rank: 2,
    title: "Get Up",
    artist: "NewJeans",
    composer: "250, Frankie Scoca",
    albumImage: null
  },
  {
    rank: 3,
    title: "UNFORGIVEN (feat. Nile Rodgers)",
    artist: "LE SSERAFIM",
    composer: "BANG PD, Pdogg, Supreme Boi",
    albumImage: null
  }
];

const MelonChart = () => (
  <div>
    <h1>멜론 탑100 차트</h1>
    <ChartList songs={sampleSongs} />
  </div>
);

export default MelonChart;
