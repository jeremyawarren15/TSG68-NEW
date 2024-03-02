import { prisma } from "@/prisma/prisma"
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import EventsTable from "@/app/components/EventsTable";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import Heading from "../components/Heading";

async function getSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("You need to be authenticated to view this page.");
  }
  return session;
}

async function getEvents() {
  const session = await getSession();
  const currentDate = new Date();

  // Get the next 5 events
  return await prisma.event.findMany({
    where: {
      troopId: session.user.troopId,
      startDate: {
        gt: currentDate
      }
    },
    orderBy: {
      startDate: Prisma.SortOrder.asc
    },
    take: 5
  })
}

async function getAnnouncements() {
  const session = await getSession();
  const getAnnouncements = await prisma.announcement
}

export default async function DashboardPage() {
  const events = await getEvents();
  return (
    <>
      <div className="mb-4">
        <Link href="/events">
          <Heading>Events</Heading>
        </Link>
        <div className="bg-base-200 shadow rounded-md">
          <EventsTable events={events} />
        </div>
      </div>

      <div>
        <Link href="/announcements">
          <Heading>Announcements</Heading>
        </Link>
        <div className="bg-base-200 shadow rounded-md">
          <div className="p-4">
            <p>No announcements yet.</p>
          </div>
        </div>
      </div>
    </>
  )
}