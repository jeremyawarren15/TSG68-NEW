import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { Event } from '@prisma/client';
import DateDisplay from './DateDisplay';
import Link from 'next/link';

interface Props {
  event: Event;
}

export default async function EventCard({
  event: { name, startDate, endDate, id },
}: Props) {
  return (
    <Box>
      <Card
        sx={{
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 2,
          },
        }}
        variant="outlined"
      >
        <CardContent>
          <Typography gutterBottom>{name}</Typography>
          <Typography color="text.secondary">
            Starts: <DateDisplay date={startDate} />
          </Typography>
          <Typography color="text.secondary">
            Ends: <DateDisplay date={endDate} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            LinkComponent={Link}
            href={`/events/${id}`}
            variant="outlined"
          >
            More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
