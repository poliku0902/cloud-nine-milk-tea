import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    // Tests share one database, so run files one after another.
    fileParallelism: false,
  },
})
