import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
    include: {
      user: true,
    },
  });
  console.log(token);
  //   data: {
  //     token: "1234567890",
  //     user: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });
  // const user = await db.sMSToken.create({
  //   data: {
  //     token: "1234567890",
  //     user: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });
}

test();

export default db;
