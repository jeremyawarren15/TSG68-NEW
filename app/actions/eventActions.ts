import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/prisma/prisma';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';

export async function getEvent(eventId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
      troopId: session.user.troopId,
    },
  });

  if (!event) {
    throw new Error('Event not found.');
  }

  return event;
}

export async function getEvents() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  return await prisma.event.findMany({
    where: {
      troopId: session.user.troopId,
    },
    orderBy: {
      startDate: Prisma.SortOrder.asc,
    },
  });
}
