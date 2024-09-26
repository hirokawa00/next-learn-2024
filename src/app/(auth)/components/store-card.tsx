import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Store } from 'lucide-react';

export async function StoreCard() {
  const storeCount = await prisma.store.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Store className="w-10 h-10 text-blue-600 mr-2" />
        <p className="text-6xl font-bold">{storeCount}</p>
      </CardContent>
    </Card>
  );
}
