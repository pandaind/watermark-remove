/**
 * Global setup — runs once before all E2E tests.
 * Builds the renderer bundle (renderer/dist/) so Electron can load the
 * production HTML file.  Skip if already built.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default async function globalSetup() {
  const indexHtml = path.join(__dirname, '..', '..', 'renderer', 'dist', 'index.html');
  if (!fs.existsSync(indexHtml)) {
    console.log('[e2e setup] Building renderer…');
    execSync('npm run build:renderer', {
      cwd: path.join(__dirname, '..', '..'),
      stdio: 'inherit',
    });
  }
}
