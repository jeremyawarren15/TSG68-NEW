import Tiptap from '@/lib/tiptap/TipTap';
import { prisma } from '@/prisma/prisma';
import { getEvent } from '@/app/actions';
import { redirect } from 'next/navigation';

async function saveEvent(formData: FormData) {
  'use server';
  const event = await prisma.event.update({
    where: {
      id: formData.get('id') as string,
    },
    data: {
      name: formData.get('name') as string,
      content: formData.get('content') as string,
    },
  });

  redirect(`/events/${event.id}`);
}

export default async function EventEditPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);

  return (
    <form action={saveEvent}>
      <div className="label">
        <span className="label-text">Title</span>
      </div>
      <input name="id" type="hidden" value={event.id} />
      <input
        name="name"
        type="text"
        defaultValue={event.name}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="divider" />
      <Tiptap content={event.content} />
      <div className="divider" />
      <button className="btn btn-primary">Save Changes</button>
    </form>
  );
}
