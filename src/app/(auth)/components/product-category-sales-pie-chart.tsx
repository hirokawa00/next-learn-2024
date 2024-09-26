'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProductCategorySalesPieChart = () => {
  const data = {
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Other'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [3000, 5000, 2000, 1500, 2500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: 'rgba(128, 128, 128, 1)', // グレーの線の色
        borderWidth: 1, // 線の太さを指定することもできます
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>sales by Product Category</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80">
        <Pie data={data} options={options} />
      </CardContent>
    </Card>
  );
};
