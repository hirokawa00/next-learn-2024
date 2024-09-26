'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const SalesForecastLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Actual Sales',
        data: [12000, 15000, 8000, 18000, 22000, 15000, 20000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Projected Sales',
        data: [20000, 22000, 21000, 25000, 27000, 30000, 31000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Forecast</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80">
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};
