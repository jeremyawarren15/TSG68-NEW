import CreateUserForm from './CreateUserForm';
import { getFathers } from './actions';

export default async function CreateMemberPage() {
  const fathers = await getFathers();
  return <CreateUserForm fathers={fathers} />;
}
