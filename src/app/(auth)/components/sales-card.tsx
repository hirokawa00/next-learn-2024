import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { DollarSign } from 'lucide-react';

export async function SalesCard() {
  const salesCount = await prisma.sale.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Today</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <DollarSign className="w-10 h-10 text-yellow-600 mr-2" />
        <p className="text-6xl font-bold">{salesCount}</p>
      </CardContent>
    </Card>
  );
}
