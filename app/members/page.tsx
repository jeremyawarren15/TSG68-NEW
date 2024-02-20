import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";

async function getMembers() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("You need to be authenticated to view this page.");
  }

  return prisma.user.findMany({
    where: {
      troopId: session.user.troopId
    }
  })
}

export default async function MembersPage() {
  const members = await getMembers();
  return (
    <>
      <h1>Members</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </>

  )
}