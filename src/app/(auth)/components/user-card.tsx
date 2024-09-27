import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Users } from 'lucide-react';

export async function UserCard() {
  const userCount = await prisma.user.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Users className="w-8 h-8 text-purple-600 mr-2" />
          Users
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-end">
        <p className="text-6xl font-bold">{userCount}</p>
      </CardContent>
    </Card>
  );
}
