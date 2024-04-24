import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';

async function getFather(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You need to be authenticated to view this page.');
  }

  const father = await prisma.user.findFirst({
    where: { id: id },
    include: { sons: true },
  });

  if (!father) {
    throw new Error('Father not found.');
  }

  if (session.user.troopId !== father.troopId) {
    throw new Error('You are not authorized to view this page.');
  }

  return father;
}

interface Params {
  params: {
    id: string;
  };
}

export default async function FatherDetailPage({ params: { id } }: Params) {
  const father = await getFather(id);

  return (
    <>
      <div className="p-5">
        <h1>{father.name}</h1>
        <p>{father.email}</p>
      </div>
      <div className="border-box bg-neutral p-5">
        {father.sons.map((son) => (
          <div key={son.id} className="">
            <h3>{son.name}</h3>
            <p>{son.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
