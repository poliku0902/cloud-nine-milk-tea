# Cloud Nine Milk Tea

An online ordering system for a (fictional) boba shop. Customers browse the menu, customize drinks
(size, sugar, ice, add-ons) and order for pickup. Staff run the order queue from an admin dashboard.

> **Status:** in progress. The storefront is live, and the backend is being built in phases (see the roadmap below).

| Folder | What it is | Stack |
|---|---|---|
| [`client/`](client/) | Customer storefront | React 19, Vite, Tailwind CSS 4 |
| [`server/`](server/) | REST API + database | Node, Express 5, TypeScript, Prisma 7, PostgreSQL |

## Running it locally

Requires Node 22+.

```bash
# 1. Database + API
cd server
npm install                      # also generates the Prisma client
cp .env.example .env             # Windows: copy .env.example .env
npm run db:dev                   # starts a local Postgres (leave this terminal open)

# in a second terminal, still in server/
npm run db:migrate               # creates the tables
npm run db:seed                  # loads the starting menu
npm run dev                      # API on http://localhost:3001

# 2. Storefront (third terminal)
cd client
npm install
npm run dev                      # http://localhost:5173
```

Other server scripts: `npm test` (integration tests, needs a seeded DB), `npm run typecheck`,
`npm run db:studio` (browse the data in Prisma Studio).

## API

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Checks that the API can reach the database |
| GET | `/api/menu` | Categories, available drinks, sizes, sugar and ice levels, add-ons |

## Design notes

- **Money is stored as integer cents** (`650` = $6.50), so prices never pick up floating-point
  rounding errors such as `0.1 + 0.2 = 0.30000000000000004`.
- **Sold-out items are switched off, not deleted** (`available = false`). They disappear from the
  public menu, but past orders that reference them stay valid.
- **The seed script is idempotent.** Rows are matched by slug and updated in place, so running it
  twice never creates duplicates.
- **The Express app is built separately from the server** (`createApp()` in `server/src/app.ts`),
  so tests can call it with Supertest without opening a port.

## Roadmap

- [x] **1. Backend setup:** Express + Prisma + Postgres, menu tables, seed, `GET /api/menu`, tests
- [ ] **2. Real menu:** storefront loads the menu from the API; cart survives a page refresh
- [ ] **3. Real checkout:** `POST /api/orders` with prices recalculated on the server, order status page
- [ ] **4. Admin + auth:** staff login, live order queue (pending → preparing → ready → completed)
- [ ] **5. Menu management:** add, edit and remove drinks, sold-out toggle, image upload
- [ ] **6. Reports:** daily sales, best sellers, CSV export
- [ ] **7. Polish:** end-to-end tests, rate limiting, deployment, demo admin account
