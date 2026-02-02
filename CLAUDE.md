# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a high-performance, server-rendered Next.js 15 e-commerce application built with the App Router, based on Vercel's Next.js Commerce template. It integrates with Shopify as a headless CMS using the Shopify Storefront API.

**Tech Stack:**
- Next.js 15.1.11 with App Router
- React 19.2.1 with Server Components
- TypeScript (strict mode enabled)
- Tailwind CSS with custom configuration
- Shopify Storefront API (GraphQL)
- pnpm as package manager

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Format code with Prettier
pnpm prettier

# Check code formatting
pnpm prettier:check

# Run tests (currently just prettier:check)
pnpm test
```

**Node Requirements:** Node.js >=20, pnpm >=9

## Environment Configuration

Required environment variables in `.env.local`:
- `SHOPIFY_STORE_DOMAIN` - Your Shopify store domain (e.g., "yourstore.myshopify.com")
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Shopify Storefront API access token
- `SHOPIFY_REVALIDATION_SECRET` - Secret for webhook revalidation
- `COMPANY_NAME` - Company name for metadata
- `SITE_NAME` - Site name for metadata
- `TWITTER_CREATOR` - Twitter handle for metadata
- `TWITTER_SITE` - Twitter site URL for metadata

## Architecture

### Directory Structure

```
app/
  ├── [page]/         # Dynamic pages from Shopify
  ├── product/        # Product detail pages
  │   └── [handle]/   # Dynamic product routes
  ├── search/         # Search and collection pages
  │   └── [collection]/ # Dynamic collection routes
  ├── api/
  │   └── revalidate/ # Shopify webhook endpoint for cache revalidation
  ├── layout.tsx      # Root layout with CartProvider and Navbar
  └── page.tsx        # Homepage

components/
  ├── cart/           # Cart functionality (modal, actions, context)
  ├── layout/         # Layout components (navbar, footer, search)
  ├── product/        # Product display components
  ├── grid/           # Grid layouts for products
  ├── home/           # Homepage sections
  ├── categories/     # Category navigation
  ├── features/       # Feature sections
  └── ui/             # Reusable UI components

lib/
  ├── shopify/        # Shopify integration layer
  │   ├── index.ts    # Main Shopify API functions
  │   ├── types.ts    # TypeScript types for Shopify data
  │   ├── queries/    # GraphQL queries
  │   ├── mutations/  # GraphQL mutations
  │   └── fragments/  # GraphQL fragments
  ├── constants.ts    # App constants (sorting, tags, etc.)
  ├── utils.ts        # Utility functions
  └── type-guards.ts  # TypeScript type guards
```

### Key Architectural Patterns

**1. Shopify Integration Layer (`lib/shopify/`)**

All Shopify API interactions go through `lib/shopify/index.ts`, which provides:
- `shopifyFetch()` - Core GraphQL fetch wrapper
- Data reshaping functions that transform Shopify's edge/node structure into flat arrays
- Export functions for carts, products, collections, pages, and menus
- Automatic cache tagging for Next.js revalidation

**2. Server Components & Server Actions**

The app heavily uses React Server Components:
- Pages and layouts are Server Components by default
- Cart actions (`components/cart/actions.ts`) use `'use server'` directive
- Server Actions handle cart mutations (add, remove, update) and cookie management
- Client components are marked with `'use client'` (e.g., cart context, interactive UI)

**3. Optimistic UI with Cart Context**

Cart state management uses React's `useOptimistic` hook:
- `CartProvider` wraps the app in `app/layout.tsx`
- `useOptimistic` provides instant UI updates before server confirmation
- Cart context (`components/cart/cart-context.tsx`) manages local cart state
- Server Actions (`components/cart/actions.ts`) sync with Shopify backend

**4. Cache Strategy**

- Products and collections use `force-cache` with tag-based revalidation
- Cart operations use `no-store` to prevent caching
- Shopify webhooks trigger revalidation via `/api/revalidate` endpoint
- Cache tags: `TAGS.cart`, `TAGS.products`, `TAGS.collections` (defined in `lib/constants.ts`)

**5. Dynamic Routes**

- `/product/[handle]` - Product detail pages
- `/search/[collection]` - Collection/search pages
- `/[page]` - Custom Shopify pages
- All use Next.js 15 dynamic routes with ISR

## Important Implementation Details

### TypeScript Configuration

- Path aliases configured: `@/*`, `@/components/*`, `@/lib/*`
- Strict mode enabled with `noUncheckedIndexedAccess: true`
- Target: ES2015 with downlevel iteration support

### Tailwind CSS

- Custom screen breakpoints: `sm: 460px`, `md: 768px`, `lg: 1024px`
- Dark mode uses media query strategy
- Custom animations: `fadeIn`, `marquee`, `blink`
- Shadcn/ui integration with CSS variables for theming
- Plugins: `@tailwindcss/container-queries`, `@tailwindcss/typography`, `tailwindcss-animate`

### Image Optimization

Next.js Image component configured for Shopify CDN:
- Formats: AVIF and WebP
- Remote pattern: `https://cdn.shopify.com/s/files/**`

### Data Fetching Patterns

When fetching from Shopify:
1. Use functions from `lib/shopify/index.ts` (never call `shopifyFetch` directly from components)
2. Products tagged with `nextjs-frontend-hidden` are automatically filtered
3. Collections starting with `hidden-` are excluded from navigation
4. All fetched data is automatically reshaped to remove GraphQL edge/node structures

### Cart Implementation

- Cart ID stored in cookies (`cartId`)
- Cart creation happens on first add-to-cart action
- Cart provider accepts a `cartPromise` and uses React's `use()` hook
- Optimistic updates handled via `useOptimistic` reducer pattern
- Server Actions revalidate the cart tag after mutations

## Common Workflows

### Adding New Shopify Queries

1. Define GraphQL query in `lib/shopify/queries/`
2. Add TypeScript types in `lib/shopify/types.ts`
3. Create reshaping function in `lib/shopify/index.ts`
4. Export public function with appropriate cache tags

### Working with Cart

- Import `useCart()` hook in client components
- Use `addCartItem()` for optimistic adds
- Use `updateCartItem()` for quantity changes
- Server Actions in `components/cart/actions.ts` handle backend sync

### Styling Components

- Use Tailwind utility classes
- Reference theme colors via CSS variables (e.g., `bg-primary`, `text-foreground`)
- Dark mode classes apply automatically via media query
- UI components in `components/ui/` follow Shadcn/ui patterns

### Adding New Routes

- Product pages: Add to `app/product/[handle]/`
- Collection pages: Add to `app/search/[collection]/`
- Static pages: Add directly to `app/` directory
- Use Server Components by default, add `'use client'` only when needed
