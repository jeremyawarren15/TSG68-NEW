import { getEvent } from '@/app/actions/eventActions';
import transformHtmlToMui from '@/lib/transformHtmlToMui';
import ExploreIcon from '@mui/icons-material/Explore';
import EventIcon from '@mui/icons-material/Event';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid xs={12}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="h1">{event.name}</Typography>
          <Button
            size="small"
            variant="text"
            LinkComponent={Link}
            href={`/events/${params.id}/edit`}
          >
            Edit
          </Button>
        </Stack>
      </Grid>
      <Grid xs={12} sm={8} order={{ xs: 3, sm: 2 }}>
        <Paper sx={{ p: 3 }}>{transformHtmlToMui(event.content)}</Paper>
      </Grid>
      <Grid xs={12} sm={4} order={{ xs: 2, sm: 3 }}>
        <Paper sx={{}}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EventIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Start Date"
                secondary={event.startDate.toLocaleString()}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EventBusyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="End Date"
                secondary={event.endDate.toLocaleString()}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ExploreIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Location" secondary="The Woods" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
