import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const publicFiles = [
  'index.html', '404.html', 'styles.css', 'script.js', 'manifest.json',
  'robots.txt', 'sitemap.xml', 'resume.pdf', 'favicon.png', 'favicon.ico',
  'logo192.png', 'logo512.png', 'og.png'
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist/client', { recursive: true });
await mkdir('dist/server', { recursive: true });

await Promise.all(publicFiles.map((file) => cp(file, `dist/client/${file}`)));

await writeFile('dist/server/index.js', `export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;

    const acceptsHtml = request.headers.get('accept')?.includes('text/html');
    if (request.method === 'GET' && acceptsHtml) {
      const notFoundUrl = new URL('/404.html', request.url);
      return env.ASSETS.fetch(new Request(notFoundUrl, request));
    }

    return assetResponse;
  }
};
`);

console.log(`Built ${publicFiles.length} static assets and the Sites worker.`);
