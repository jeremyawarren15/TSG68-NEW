import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Tiptap from "@/app/components/TipTap";
import { prisma } from "@/prisma/prisma"
import { getServerSession } from "next-auth";

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

export default async function EventEditPage({params}: { params: { id: string}}) {
  const event = await getEvent(params.id);

  const saveEvent = async (formData: FormData) => {
    'use server'
    const event = await prisma.event.update({
      where: {
        id: params.id
      },
      data: {
        name: formData.get('name') as string,
        content: formData.get('content') as string
      }
    })
  }

  return (
    <form action={saveEvent}>
      <div className="label">
        <span className="label-text">Title</span>
      </div>
      <input name="name" type="text" defaultValue={event.name} className="input input-bordered w-full max-w-xs" />
      <div className="divider" />
      <Tiptap content={event.content} />
      <div className="divider" />
      <button className="btn btn-primary">Save Changes</button>
    </form>
  )
}