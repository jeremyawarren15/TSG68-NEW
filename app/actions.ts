import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";

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