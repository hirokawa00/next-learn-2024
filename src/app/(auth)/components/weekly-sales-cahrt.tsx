'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { BarElement, CategoryScale, Chart as ChartJS, LinearScale } from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function WeeklySalesChart() {
  const weeklySalesData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Sales',
        data: [5000, 4000, 3000, 7000, 2000, 4000, 8000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hourly Sales Today</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80">
        <Bar data={weeklySalesData} options={options} />
      </CardContent>
    </Card>
  );
}
