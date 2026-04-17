import "dotenv/config";
import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import problems from "../lib/blind75.json" with { type: "json" };

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg(connectionString);  // pass string directly, not an object

const prisma = new PrismaClient({ adapter });

async function main() {
  for (const p of problems) {
    await prisma.problem.upsert({
      where: { id: p.id },
      update: {},
      create: {
        id: p.id,
        title: p.title,
        difficulty: p.difficulty!,
        url: p.url!,
      },
    });
  }
}

main().catch(console.error);
