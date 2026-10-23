import { createApp } from './app'
import { prisma } from './db'

const port = Number(process.env.PORT) || 3001

const server = createApp().listen(port, () => {
  console.log(`Cloud Nine API listening on http://localhost:${port}`)
})

// Close open connections cleanly on Ctrl+C or when the host stops the process.
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    server.close(async () => {
      await prisma.$disconnect()
      process.exit(0)
    })
  })
}
