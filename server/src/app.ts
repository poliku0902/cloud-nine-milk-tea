import cors from 'cors'
import express, { type ErrorRequestHandler } from 'express'
import helmet from 'helmet'
import { prisma } from './db'
import { menuRouter } from './routes/menu'

/** Builds the Express app without starting it, so tests can call it directly. */
export function createApp() {
  const app = express()

  // Comma-separated list, e.g. "http://localhost:5173,https://cloud-nine.vercel.app"
  const allowedOrigins = (process.env.CLIENT_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)

  app.use(helmet())
  app.use(cors({ origin: allowedOrigins }))
  app.use(express.json({ limit: '100kb' }))

  app.get('/api/health', async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok' })
  })

  app.use('/api/menu', menuRouter)

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' })
  })

  // Express 5 forwards errors thrown in async handlers here automatically.
  const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    const status = Number(err?.status ?? err?.statusCode) || 500
    if (status >= 500) console.error(err)
    // Only show the real message for client errors (e.g. malformed JSON); hide internals otherwise.
    res.status(status).json({ error: status < 500 ? err.message : 'Something went wrong' })
  }
  app.use(errorHandler)

  return app
}
