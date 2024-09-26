import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

import { Users } from 'lucide-react';

export async function UserCard() {
  const userCount = await prisma.user.count();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Users className="w-10 h-10 text-purple-600 mr-2" />
        <p className="text-6xl font-bold">{userCount}</p>
      </CardContent>
    </Card>
  );
}
