'use server';

import { Suspense } from 'react';
import { SkeletonLoading } from './WeeklySalesChart';
import { WeeklySalesChartServer } from './WeeklySalesChart.container';

/**
 * 週間売上チャート ラッパー
 * @summary サーバーコンポーネント
 * @returns
 */
export async function WeeklySalesChart() {
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <WeeklySalesChartServer />
    </Suspense>
  );
}
