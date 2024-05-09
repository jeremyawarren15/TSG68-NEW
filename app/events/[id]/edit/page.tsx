import Tiptap from '@/lib/tiptap/TipTap';
import { prisma } from '@/prisma/prisma';
import { getEvent } from '@/app/actions';
import { redirect } from 'next/navigation';
import { Button, Paper, TextField } from '@mui/material';

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
      <input name="id" type="hidden" value={event.id} />
      <TextField
        sx={{ my: 2 }}
        name="name"
        label="Name"
        variant="outlined"
        defaultValue={event.name}
      />
      <Paper sx={{ p: 3, mb: 2 }}>
        <Tiptap content={event.content} />
      </Paper>
      <Button variant="contained" type="submit">
        Save Event
      </Button>
    </form>
  );
}
