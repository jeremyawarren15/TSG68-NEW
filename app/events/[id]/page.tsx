import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/prisma/prisma"
import { marked } from "marked";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function getEvent(eventId: string) {
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

export default async function EventPage({params}: { params: { id: string } }) {
  const event = await getEvent(params.id);
  return (
    <div>
      <div className="flex gap-2">
        <h1 className="font-bold text-4xl">{event.name}</h1>
        <Link href={`/events/${params.id}/edit`}>
          <button className="btn btn-link">Edit</button>
        </Link>
      </div>
      <div className="divider" />
      <div className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl">
        <div dangerouslySetInnerHTML={{__html: marked(event.content)}}></div>
      </div>
    </div>
  )
}