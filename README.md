# Solar Amplified Living

A modern website for Solar Amplified Living - sustainable solar energy solutions.

## Tech Stack

- **Framework**: [Qwik](https://qwik.dev/) with QwikCity
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Cloudflare Pages

This project is configured for Cloudflare Pages deployment.

**Option 1: GitHub Integration (Recommended)**
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Create a new Pages project
3. Connect your GitHub repository (CyberBrown/solampliving)
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy!

**Option 2: Direct Deploy (Wrangler CLI)**
```bash
# Set your API token
export CLOUDFLARE_API_TOKEN="your-token-here"

# Deploy
npm run deploy
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── routes/          # File-based routing
│   │   ├── index.tsx    # Home page
│   │   └── layout.tsx   # Root layout
│   ├── global.css       # Global styles with Tailwind
│   └── root.tsx         # App root
├── adapters/
│   └── cloudflare-pages/ # CF Pages adapter config
├── wrangler.toml        # Wrangler configuration
└── package.json
```

## Domain

Target domain: solampliving.com

## License

All rights reserved.
