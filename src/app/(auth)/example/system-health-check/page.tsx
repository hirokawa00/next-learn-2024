import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Cloud, Database, XCircle } from 'lucide-react';

import { MonitoringDashboard } from './components/monitoring-dashboard';
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
        <MonitoringDashboard />
      </div>
    </ContentLayout>
  );
}
