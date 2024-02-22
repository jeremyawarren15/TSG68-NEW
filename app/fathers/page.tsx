import { prisma } from "@/prisma/prisma"
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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
      }
    }
  );
  return fathers;
}

export default async function FatherListPage() {
  const fathers = await getFathers();
  return (
    <>
      <h1>Fathers</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="no-wrap">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {fathers.map((father) => (
            <tr key={father.id}>
              <td className="whitespace-nowrap">{father.name}</td>
              <td>{father.email}</td>
              <td className="whitespace-nowrap">317-306-6750</td>
              <td>
                <Link href={`/fathers/${father.id}`}>View</Link>
              </td>
            </tr>

          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}