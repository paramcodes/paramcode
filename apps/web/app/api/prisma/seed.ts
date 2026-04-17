import prisma from "../lib/prisma";
import problems from "../lib/blind75.json";

async function main() {
  for (const p of problems) {
    await prisma.problem.upsert({
      where: { id: p.id },
      update: {},
      create: {
        id: p.id,
        title: p.title,
        difficulty: p.difficulty,
        url: p.url,
      },
    });
  }
}

main();