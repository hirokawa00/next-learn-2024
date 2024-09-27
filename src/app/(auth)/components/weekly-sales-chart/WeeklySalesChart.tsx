'use client';

import { LoadingSpinner } from '@/components/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarElement, CategoryScale, type ChartData, Chart as ChartJS, LinearScale } from 'chart.js';
import { saveAs } from 'file-saver';
import { DownloadIcon } from 'lucide-react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // 凡例を非表示に設定
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // X軸のグリッド線を非表示
      },
    },
    y: {
      grid: {
        display: false, // Y軸のグリッド線を非表示
      },
    },
  },
};

interface WeeklySalesChartClientProps {
  weeklySalesData: ChartData<'bar'>;
}

/**
 * 週間売上チャート プレゼンテーション層
 * @summary クライアントコンポーネント
 * @param param0
 * @returns
 */
export function WeeklySalesChartClient({ weeklySalesData }: WeeklySalesChartClientProps) {
  const downloadCSV = () => {
    const csvRows: string[] = [];
    // ヘッダーを作成
    const headers = ['Date', 'Sales'];
    csvRows.push(headers.join(','));

    // データを行に追加
    weeklySalesData.labels?.forEach((label, index) => {
      const row = [label, weeklySalesData.datasets[0].data[index]];
      csvRows.push(row.join(','));
    });

    // CSVデータを文字列に変換
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    // file-saverを使用してダウンロード
    saveAs(blob, 'weekly_sales_data.csv');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Weekly Sales
          <Button variant="ghost" onClick={downloadCSV}>
            <DownloadIcon />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80">
        <Bar data={weeklySalesData} options={options} />
      </CardContent>
    </Card>
  );
}

export function SkeletonLoading() {
  return (
    <Skeleton className="w-full h-96">
      <LoadingSpinner />
    </Skeleton>
  );
}
