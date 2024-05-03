'use server';

import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';

export async function getFathers() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  return await prisma.user.findMany({
    where: {
      troopId: session.user.troopId,
      father: null,
    },
  });
}
