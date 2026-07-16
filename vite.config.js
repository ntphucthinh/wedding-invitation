import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile, writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFile = path.resolve(__dirname, 'src/data/rsvp-submissions.json');

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-rsvp-json',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/rsvp-list' && req.method === 'GET') {
            try {
              const raw = await readFile(dataFile, 'utf-8');
              const data = JSON.parse(raw || '[]');
              res.statusCode = 200;
              res.setHeader('content-type', 'application/json');
              res.end(JSON.stringify(data));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: error.message }));
            }
            return;
          }

          if (req.url === '/api/rsvp' && req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const submission = JSON.parse(body);
                const raw = await readFile(dataFile, 'utf-8');
                const current = JSON.parse(raw || '[]');
                const next = [
                  ...current,
                  {
                    ...submission,
                    createdAt: new Date().toISOString(),
                  },
                ];
                await writeFile(dataFile, JSON.stringify(next, null, 2), 'utf-8');
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.end(JSON.stringify(next));
              } catch (error) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: error.message }));
              }
            });
            return;
          }

          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
