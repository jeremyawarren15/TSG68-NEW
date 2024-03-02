import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/prisma/prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import EventsTable from "../components/EventsTable";
import Heading from "../components/Heading";

async function getEvents() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("You need to be authenticated to view this page.");
  }

  return await prisma.event.findMany({
    where: {
      troopId: session.user.troopId
    },
    orderBy: {
      startDate: Prisma.SortOrder.asc
    },
  })
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div>
      <Heading>Events</Heading>
      <div className="bg-base-200 shadow rounded-md">
        <EventsTable events={events} />
      </div>
    </div>
  )
}