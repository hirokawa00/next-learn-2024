'use server';

import type { ChartData } from 'chart.js';
import { WeeklySalesChartClient } from './WeeklySalesChart';

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 週間売上チャート コンテナー層
 * @summary データを取得
 * @returns
 */
export async function WeeklySalesChartServer() {
  // 3秒の遅延を追加
  await delay(3000);
  // データフェッチ (実際にはAPIやDBから取得)
  const jsonData = [
    { date: '09/18', sales: 5000 },
    { date: '09/19', sales: 4000 },
    { date: '09/20', sales: 3000 },
    { date: '09/21', sales: 7000 },
    { date: '09/22', sales: 2000 },
    { date: '09/23', sales: 4000 },
    { date: '09/24', sales: 8000 },
    { date: '09/25', sales: 5000 },
    { date: '09/26', sales: 4000 },
    { date: '09/27', sales: 3000 },
    { date: '09/28', sales: 7000 },
    { date: '09/29', sales: 2000 },
    { date: '09/30', sales: 4001 },
    { date: '10/01', sales: 8000 },
  ];

  // 日付と売上をそれぞれ抽出
  const labels = jsonData.map((item) => item.date);
  const salesData = jsonData.map((item) => item.sales);

  // クライアントで利用するためデータをセット
  const weeklySalesData: ChartData<'bar'> = {
    labels: labels,
    datasets: [
      {
        label: 'Sales',
        data: salesData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return <WeeklySalesChartClient weeklySalesData={weeklySalesData} />;
}
