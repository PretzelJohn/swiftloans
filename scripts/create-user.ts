import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main(args: string[]) {
  const [email, password, first_name, last_name, phone] = args.slice(2);

  if (args.length < 4 || !email || !password || !first_name || !last_name) {
    console.log(`Usage: <email> <password> <first_name> <last_name> phone`);
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      password_hash: hash,
      first_name,
      last_name,
      phone: phone ?? null,
    },
  });

  console.log(user);
}

main(process.argv)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
