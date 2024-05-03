'use client';
import { useQuery } from 'react-query';
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { getFathers } from './actions';
import { User } from '@prisma/client';
import SearchParams from '@/types/SearchParams';
import Link from 'next/link';

interface Props {
  fathers: User[];
}

export default function CreateUserForm({ fathers }: Props) {
  const search = useSearchParams();
  const router = useRouter();
  const name = search.get('name') || '';
  const birthday = search.get('birthday') || '';
  const fatherId = search.get('fatherId') || '';

  const getSearchParams = (overrides: SearchParams) => {
    return `?${new URLSearchParams({
      name,
      birthday,
      fatherId,
      ...overrides,
    })}`;
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Box component="form" noValidate>
        <Grid container spacing={2} maxWidth={500}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              defaultValue={name}
              onChange={(e) =>
                router.replace(getSearchParams({ name: e.target.value }))
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="birthday"
              label="Birthday"
              defaultValue={birthday}
              onChange={(e) =>
                router.replace(getSearchParams({ birthday: e.target.value }))
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="father-label">Father</InputLabel>
              <Select
                defaultValue={fatherId}
                labelId="father-label"
                id="fatherId"
                label="Father"
                onChange={(e) =>
                  router.replace(getSearchParams({ fatherId: e.target.value }))
                }
              >
                <MenuItem value={''}>None</MenuItem>
                {fathers?.map((father) => (
                  <MenuItem key={father.id} value={father.id}>
                    {father.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item display={'flex'} gap={1}>
            <Button variant="contained">Create</Button>
            <Button LinkComponent={Link} href="/members" variant="outlined">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
