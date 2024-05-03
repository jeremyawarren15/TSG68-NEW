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

async function getSons() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  return prisma.user.findMany({
    where: {
      troopId: session.user.troopId,
      father: {
        isNot: null,
      },
    },
    include: {
      father: {
        include: {
          parish: true,
        },
      },
      parish: true,
    },
  });
}

export default async function SonsPage() {
  const sons = await getSons();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align={'left'}>Name</TableCell>
              <TableCell align={'left'}>Father</TableCell>
              <TableCell align={'left'}>Parish</TableCell>
              <TableCell align={'left'}>Patrol</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sons.map((son, index) => (
              <TableRow key={index}>
                <TableCell align={'left'}>{son.name}</TableCell>
                <TableCell align={'left'}>{son.father?.name}</TableCell>
                <TableCell align={'left'}>
                  {son.parish?.name || son.father?.parish?.name || 'Unknown'}
                </TableCell>
                <TableCell align={'left'}>St. Matthew's Angels</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
