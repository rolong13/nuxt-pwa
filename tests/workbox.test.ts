import { mkdtemp, writeFile, readFile, rm } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'
import { test, expect } from 'vitest'
import { generateSW } from 'workbox-build'

test('service worker precaches index for offline access', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'wb-'))
  await writeFile(join(dir, 'index.html'), '<html></html>')
  await generateSW({
    swDest: join(dir, 'sw.js'),
    globDirectory: dir,
    globPatterns: ['**/*'],
    navigateFallback: '/index.html'
  })
  const sw = await readFile(join(dir, 'sw.js'), 'utf8')
  expect(sw).toContain('index.html')
  await rm(dir, { recursive: true, force: true })
})
