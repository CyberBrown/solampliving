# SolAmp Living

Sustainable Solar Amplified Living Solutions - A Qwik-powered website for solar energy solutions.

## Tech Stack

- [Qwik](https://qwik.dev/) - Resumable framework
- [Qwik City](https://qwik.dev/qwikcity/overview/) - Meta-framework
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [DaisyUI](https://daisyui.com/) - Component library
- [Cloudflare Pages](https://pages.cloudflare.com/) - Edge deployment

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Building

```bash
# Build client and server
pnpm run build.client && pnpm run build.server

# Or use wrangler to serve locally
pnpm serve
```

## Deployment

Deployed to Cloudflare Pages:

```bash
pnpm deploy
```

## Project Structure

```
├── adapters/
│   └── cloudflare-pages/   # Cloudflare Pages adapter
├── public/                 # Static assets
└── src/
    ├── components/         # Reusable components
    └── routes/             # File-based routing
```

## License

All rights reserved.
