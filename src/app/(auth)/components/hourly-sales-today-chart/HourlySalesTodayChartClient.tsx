'use client';

import { LoadingSpinner } from '@/components/loading-spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarElement, CategoryScale, type ChartData, Chart as ChartJS, LinearScale } from 'chart.js';
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
  hourlySalesData: ChartData<'bar'>;
}

export function HourlySalesTodayChartClient({ hourlySalesData }: WeeklySalesChartClientProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Today Sales
          <Button variant="ghost">
            <DownloadIcon />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80">
        <Bar data={hourlySalesData} options={options} />
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
