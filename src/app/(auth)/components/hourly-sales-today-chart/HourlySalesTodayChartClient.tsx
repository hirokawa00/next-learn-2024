'use client';

import { LoadingSpinner } from '@/components/loading-spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarElement, CategoryScale, type ChartData, Chart as ChartJS, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface WeeklySalesChartClientProps {
  hourlySalesData: ChartData<'bar'>;
}

export function HourlySalesTodayChartClient({ hourlySalesData }: WeeklySalesChartClientProps) {
  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Sales</CardTitle>
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
