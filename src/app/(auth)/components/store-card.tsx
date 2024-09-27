import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Store } from 'lucide-react';

export async function StoreCard() {
  const storeCount = await prisma.store.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Store className="w-8 h-8 text-blue-600 mr-2" />
          Store
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-end">
        <p className="text-6xl font-bold">{storeCount}</p>
      </CardContent>
    </Card>
  );
}
