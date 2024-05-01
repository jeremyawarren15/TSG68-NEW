import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/prisma/prisma';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

async function getFathers() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  return prisma.user.findMany({
    where: {
      troopId: session.user.troopId,
      father: null,
    },
  });
}

export default async function FathersPage() {
  const fathers = await getFathers();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align={'left'}>Name</TableCell>
              <TableCell align={'left'}>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fathers.map((father, index) => (
              <TableRow key={index}>
                <TableCell align={'left'}>{father.name}</TableCell>
                <TableCell align={'left'}>{father.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
