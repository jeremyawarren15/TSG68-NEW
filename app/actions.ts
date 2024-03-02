import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const prisma = new PrismaClient();

export async function getTroops() {
  return await prisma.troop.findMany();
}

export async function getTroop(id: string) {
  const troop = await prisma.troop.findUnique({
    where: {
      id: id
    },
  });

  if (!troop) {
    notFound();
  }

  return troop;
}

export async function getEvent(eventId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You need to be authenticated to view this page.");
  }

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
      troopId: session.user.troopId
    }
  })

  if (!event) {
    throw new Error("Event not found.");
  }

  return event;
}
