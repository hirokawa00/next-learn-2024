'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, Network, ServerCrash, TrendingUp } from 'lucide-react';

export const MonitoringDashboard = () => {
  // サンプルデータ
  const networkBandwidthUsage = 70; // ネットワーク帯域幅の使用率
  const connectionTime = 120; // 接続時間 (ms)
  const systemUptime = '5日 12時間 34分'; // システム稼働時間
  const recentErrorCount = 3; // 最近のエラー数

  return (
    <>
      {/* ネットワーク確認セクション */}
      <h2 className="text-xl font-bold mb-2">Network Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        {/* Network Bandwidth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="inline-block mr-2" />
              Network Bandwidth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl mb-2">使用率: {networkBandwidthUsage}%</div>
            <Progress value={networkBandwidthUsage} className="mb-4 transition-all" />
          </CardContent>
        </Card>

        {/* Connection Time */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="inline-block mr-2" />
              Connection Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{connectionTime} ms</div>
          </CardContent>
        </Card>
      </div>

      {/* 稼働状況セクション */}
      <h2 className="text-xl font-bold mb-2">System Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* System Uptime */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="inline-block mr-2" />
              System Uptime
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{systemUptime}</div>
          </CardContent>
        </Card>

        {/* Recent Error Count */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ServerCrash className="inline-block mr-2" />
              Recent Error Count
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{recentErrorCount}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
