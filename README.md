# Vijay Yadav — Developer Portfolio

A responsive personal portfolio built with Next.js, TypeScript and Tailwind CSS. It supports dark/light mode and is configured for a static export so it can be hosted on Cloudflare Pages free tier.

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build static website
```bash
npm run build
```
The static website is generated in `out/`.

## Deploy free on Cloudflare Pages
1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open Workers & Pages → Create → Pages → Connect to Git.
3. Select your repository.
4. Framework preset: Next.js (Static HTML Export) or None.
5. Build command: `npm run build`
6. Build output directory: `out`
7. Deploy. Cloudflare provides a `*.pages.dev` URL.

No database or backend is needed for this portfolio, so hosting can remain free within Cloudflare's current free-plan limits.

## Before publishing
Search and replace:
- `YOUR_EMAIL@example.com` in `components/Portfolio.tsx` with your public email.
- `https://www.linkedin.com/` with your LinkedIn profile URL.
- `example.pages.dev` in `app/layout.tsx` with your actual deployed domain.
- Review experience, project status and skills so every statement is accurate.
- Add approved project screenshots and public repository/demo links when available.

## Notes
- The project cards currently describe selected work and products; they do not claim public demos are live.
- The contact email is a mailto link. A working contact form would require a backend or third-party form service.
- Static export means no Next.js server runtime is required after deployment.
