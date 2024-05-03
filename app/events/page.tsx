import { getEvents } from '../actions/eventActions';
import { Grid, Stack } from '@mui/material';
import EventCard from '../components/EventCard';

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <Grid container gap={2} sx={{ mt: 2 }}>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} sm={6} md={4}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
}
