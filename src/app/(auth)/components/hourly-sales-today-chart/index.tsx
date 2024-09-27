'use server';

import { Suspense } from 'react';
import { SkeletonLoading } from './HourlySalesTodayChartClient';
import { HourlySalesTodayChartServer } from './HourlySalesTodayChartServer';

/**
 * 週間売上チャート ラッパー
 * @summary サーバーコンポーネント
 * @returns
 */
export async function HourlySalesTodayChart() {
  return (
    <Suspense fallback={<SkeletonLoading />}>
      <HourlySalesTodayChartServer />
    </Suspense>
  );
}
