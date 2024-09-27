'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress'; // Shadcn Progress Component
import { Cpu, HardDrive, MemoryStick } from 'lucide-react'; // アイコンをインポート

export const ResourceMonitoring = () => {
  const cpuUsage = 65; // CPU使用率のサンプル値
  const memoryUsage = 80; // メモリ使用率のサンプル値
  const storageUsage = 50; // ストレージ使用率のサンプル値

  return (
    <>
      {/* CPU使用率 */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Cpu className="inline-block mr-2" /> CPU Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl mb-2">使用率: {cpuUsage}%</div>
          <Progress value={cpuUsage} className="mb-4" />
        </CardContent>
      </Card>

      {/* メモリ使用率 */}
      <Card>
        <CardHeader>
          <CardTitle>
            <MemoryStick className="inline-block mr-2" /> Memory Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl mb-2">使用率: {memoryUsage}%</div>
          <Progress value={memoryUsage} className="mb-4" />
        </CardContent>
      </Card>

      {/* ストレージ使用率 */}
      <Card>
        <CardHeader>
          <CardTitle>
            <HardDrive className="inline-block mr-2" /> Storage Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl mb-2">使用率: {storageUsage}%</div>
          <Progress value={storageUsage} className="mb-4" />
        </CardContent>
      </Card>
    </>
  );
};
