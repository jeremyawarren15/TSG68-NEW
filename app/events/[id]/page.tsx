import { getEvent } from '@/app/actions/eventActions';
import transformHtmlToMui from '@/lib/transformHtmlToMui';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { marked } from 'marked';
import Link from 'next/link';

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);
  return (
    <Box sx={{ mt: 2 }}>
      <Stack direction="row" alignItems="center" gap={2} mb={2}>
        <Typography variant="h1">{event.name}</Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          href={`/events/${params.id}/edit`}
        >
          Edit
        </Button>
      </Stack>
      <Divider />
      <div>{transformHtmlToMui(event.content)}</div>
    </Box>
  );
}
