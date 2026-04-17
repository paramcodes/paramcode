import prisma from "../lib/prisma";
import { getServerSession } from "next-auth";
import {authOptions} from "../lib/auth.ts"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { problemId, completed } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  await prisma.progress.upsert({
    where: {
      userId_problemId: {
        userId: user!.id,
        problemId,
      },
    },
    update: { completed },
    create: {
      userId: user!.id,
      problemId,
      completed,
    },
  });

  return Response.json({ success: true });
}

export async function GET() {
  const session = await getServerSession(authOptions);
   if (!session || !session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const problems = await prisma.problem.findMany({
    include: {
      progress: {
        where: { userId: user!.id },
      },
    },
  });

  return Response.json(problems);
}
