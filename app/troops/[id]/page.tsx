import { getTroop } from "@/app/actions";

export default async function TroopHomePage({params}: {params: {id: string}}) {
  const troop = await getTroop(params.id);

  return (
    <main>
      <h1>{troop.name}</h1>
    </main>
  );
}
