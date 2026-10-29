# IndiaMART Importer

A TypeScript prototype exploring a supplier-product import workflow for Shopify.

## Project status

This repository is an early prototype, not a production-ready Shopify app. The source sketches a single-product flow: submit a supplier URL, extract product fields with Puppeteer, then pass those fields to a Shopify product-creation action. Bulk imports, inventory synchronization, production deployment, and successful end-to-end imports are not demonstrated by this repository.

## Source map

| File | Purpose |
| --- | --- |
| `app/routes/_index.tsx` | Product-URL form |
| `app/routes/import.ts` | Authentication and product-creation action sketch |
| `app/scrapers/indiamart.ts` | Puppeteer extraction of title, description, price, and image URLs |
| `app/shopify.server.ts` | Shopify app and Prisma session-storage configuration |
| `prisma/schema.prisma` | PostgreSQL datasource configuration |

## Stack

TypeScript, Remix, Vite, Puppeteer, Shopify app libraries, and Prisma/PostgreSQL. `package.json` currently specifies Node.js 20.x; review dependency and runtime support before continuing development.

## Environment configuration

Copy `.env.example` to a local `.env` and supply your own development configuration. Keep real credentials in local environment variables or your deployment provider's secret store. Never commit them. The example uses PostgreSQL because that is the datasource configured in the Prisma schema.

## Work needed before a runnable demo

- Complete and verify the Remix application structure and server configuration; the current Vite configuration disables SSR while the import flow uses a server action.
- Reconcile dependencies imported by the source with `package.json`.
- Implement and verify authentication routes and the session-storage schema.
- Replace placeholder scraper selectors with tested selectors for an authorized source.
- Validate supplier URLs and extracted fields, and add failure handling before creating products.
- Update and verify the Shopify API integration and add an end-to-end development-store test.

No live store was changed as part of the documentation review.

## Credential cleanup

A tracked environment file was removed from the current branch and replaced with a blank example. This does not revoke credentials or remove copies in older Git commits. The owner must rotate any previously exposed real credentials and coordinate history cleanup as needed. No credential values are included in this documentation.

## Author

[Rahul Kashyap](https://github.com/kashyaprahul12659) · [LinkedIn](https://www.linkedin.com/in/kashyaprahul535/)
