import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTroops() {
  return await prisma.troop.findMany();
}

export default async function Home() {
  const troops = await getTroops();
  return (
    <main>
      <h1>Home</h1>
      {troops.map((troop) => (
        <div key={troop.id}>
          <h2>{troop.name}</h2>
        </div>
      ))}
    </main>
  );
}
