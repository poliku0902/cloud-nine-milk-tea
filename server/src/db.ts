import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env and fill it in.')
}

/** One shared Prisma client for the whole server (it manages its own connection pool). */
export const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
})
