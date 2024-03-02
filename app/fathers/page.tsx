import { prisma } from "@/prisma/prisma"
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Heading from "../components/Heading";

async function getFathers() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("You need to be authenticated to view this page.");
  }

  const fathers = await prisma.user.findMany(
    {
      where: {
        fatherId: null,
        troopId: session.user.troopId
      },
      include: {
        sons: true,
        parish: true
      }
    }
  );
  return fathers;
}

export default async function FatherListPage() {
  const fathers = await getFathers();

  const formattedRank = (rank: string | null): string => {
    if (!rank) return '';
    return rank
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  }

  return (
    <>
      <Heading>Fathers</Heading>
      <div className="overflow-x-auto bg-base-200 rounded shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Parish</th>
              <th>Sons</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fathers.map((father) => (
              <tr key={father.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {/* <img src={father.image} alt="Avatar Tailwind CSS Component" /> */}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{father.name}</div>
                      <div className="text-sm opacity-50">{formattedRank(father.rank)}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {father.phoneNumber}
                  <br/>
                  {father.email}
                </td>
                <td>{father.parish?.name}</td>
                <td>{father.sons.length}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}