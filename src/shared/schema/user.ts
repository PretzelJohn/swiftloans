import type { Role, User } from '@prisma/client';

export type AppUser = Omit<User, 'created_at' | 'updated_at' | 'password_hash'> & {
  roles: Role[];
}
