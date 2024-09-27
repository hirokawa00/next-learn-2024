// コンテナコンポーネント: HourlySalesTodayChartServer.tsx
import type { ChartData } from 'chart.js';
import { HourlySalesTodayChartClient } from './HourlySalesTodayChartClient';

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function HourlySalesTodayChartServer() {
  // 6秒の遅延を追加
  await delay(6000);
  // サーバー側でのデータフェッチ (ここではダミーデータ)
  const hourlySalesData: ChartData<'bar'> = {
    labels: [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
    ],
    datasets: [
      {
        label: 'Sales',
        data: [
          100, 150, 80, 200, 300, 400, 350, 280, 420, 500, 450, 600, 700, 650, 500, 550, 600, 620, 500, 430, 300, 280,
          200, 150,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <HourlySalesTodayChartClient hourlySalesData={hourlySalesData} />;
}
