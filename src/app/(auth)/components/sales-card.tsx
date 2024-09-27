import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { DollarSign } from 'lucide-react';

export async function SalesCard() {
  const salesCount = await prisma.sale.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <DollarSign className="w-8 h-8 text-yellow-600 mr-2" />
          Sales Today
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-end">
        <p className="text-6xl font-bold">{salesCount}</p>
      </CardContent>
    </Card>
  );
}
