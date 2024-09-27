import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Cloud, Database, XCircle } from 'lucide-react';

import { ResourceMonitoring } from './components/resource-monitoring';

export default function Page() {
  return (
    <ContentLayout title="System Health Check Dashboard">
      <div className="min-h-screen  p-6">
        {/* ヘルスチェックセクション */}
        <h2 className="text-xl font-bold mb-2">Health Check</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* DB接続ステータス */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Database className="inline-block mr-2" /> DB Connection Status
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-2xl text-green-600 flex items-center">
                <CheckCircle className="inline-block mr-2" />
                接続中
              </div>
            </CardContent>
          </Card>

          {/* API応答ステータス */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Cloud className="inline-block mr-2" /> API Response Status
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-2xl text-green-600 flex items-center">
                <CheckCircle className="inline-block mr-2" />
                正常
              </div>
            </CardContent>
          </Card>

          {/* エラーレート */}
          <Card className="border-2 border-red-600">
            <CardHeader>
              <CardTitle>
                <AlertTriangle className="inline-block mr-2" /> Error Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-2xl text-red-700 flex items-center">
                <XCircle className="inline-block mr-2" />
                エラー数: 3
              </div>
            </CardContent>
          </Card>
        </div>

        {/* リソース確認セクション */}
        <h2 className="text-xl font-bold mb-2">Resource Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <ResourceMonitoring />
        </div>

        {/* ネットワーク確認セクション */}
        <h2 className="text-xl font-bold mb-2">Network Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Network Bandwidth</CardTitle>
            </CardHeader>
            <CardContent>{/* ネットワーク帯域幅の使用率とトレンドグラフ */}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connection Time</CardTitle>
            </CardHeader>
            <CardContent>{/* 接続時間の大きな数値表示 */}</CardContent>
          </Card>
        </div>

        {/* 稼働状況セクション */}
        <h2 className="text-xl font-bold mb-2">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>System Uptime</CardTitle>
            </CardHeader>
            <CardContent>{/* システム稼働時間の大きな数値表示 */}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Error Count</CardTitle>
            </CardHeader>
            <CardContent>{/* 最近のエラー数の大きな数値表示 */}</CardContent>
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
