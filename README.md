# Swift Loans

## Overview

The project is a web application designed to help loan brokers manage their workflow.
Loan brokers can:

- View metrics and recent activity summaries
- Create/edit/view tasks to keep track of customer communication
- Create/edit/view leads and contacts in one place, instead of entering them into a spreadsheet
- Track loan applications across the entire pipeline
- Upload and store reports for easy sharing

---

## Background

I built this to explore combining several web technologies:

- Next.js App Router
- React Server Components (RSC)
- Prisma ORM
- tRPC

RSC reduces the use-case for tRPC, because you can just use Prisma directly in RSC now. However, tRPC is still very helpful for creating a clear server-side structure. Also, the endpoints created with tRPC can be re-used for different clients, like mobile apps or API services.

---

## Prerequisites

- Node 20.x.x
- Docker

---

## Getting Started

1. Create a `.env` file in the root directory, with the following environment variables:

```properties
AUTH_SECRET="<your secure auth secret here>"
DATABASE_URL="postgresql://<username>:<password>@<host>:5432/<database>?schema=public"
EMAIL_USER="<your gmail username/email>"
EMAIL_PASSWORD="<your gmail account app password>"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> NOTE: on Windows, use "host.docker.internal" as the hostname. On Mac, use "localhost".

---

2. Install packages with `npm i`

---

3. Run the development postgres and web containers in docker:

```bash
docker compose up --build -d postgres web
```

---

4. Push the Prisma schema to the database:

```bash
prisma db push
```

---

5. Create a user account with

```bash
npx ts-node ./scripts/create-user.ts <email> <password> <first_name> <last_name>
```

---

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
