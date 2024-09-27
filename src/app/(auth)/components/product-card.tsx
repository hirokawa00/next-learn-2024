import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Package } from 'lucide-react';

export async function ProductCard() {
  const productCount = await prisma.product.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Package className="w-8 h-8 text-green-600 mr-2" />
          Product
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-end">
        <p className="text-6xl font-bold">{productCount}</p>
      </CardContent>
    </Card>
  );
}
