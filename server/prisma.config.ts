import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // Read loosely (not with Prisma's strict env()) so `prisma generate` still works
    // on a fresh clone or in CI before a .env file exists.
    url: process.env.DATABASE_URL,
  },
})
