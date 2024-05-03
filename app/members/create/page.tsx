import { Typography } from '@mui/material';
import CreateUserForm from './CreateUserForm';

export default async function CreateMemberPage() {
  return (
    <>
      <Typography sx={{ mt: 2 }} variant="h1">
        Create User
      </Typography>
      <CreateUserForm />
    </>
  );
}
