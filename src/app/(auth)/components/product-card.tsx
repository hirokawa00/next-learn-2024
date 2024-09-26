import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Package } from 'lucide-react';

export async function ProductCard() {
  const productCount = await prisma.product.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Package className="w-10 h-10 text-green-600 mr-2" />
        <p className="text-6xl font-bold">{productCount}</p>
      </CardContent>
    </Card>
  );
}
