import { randomBytes } from 'node:crypto';

const TOKEN_BYTES = 16;

export function generateToken() {
  return randomBytes(TOKEN_BYTES).toString('hex');
}
