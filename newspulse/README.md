NewsPulse

Hello! This project / web service is part of my ongoing journey learning full-stack development while building real, end-to-end applications that focus on clean architecture and thoughtful UI design.

NewsPulse is a modern news aggregation web app designed to surface trending stories, organize categories, and present content in a visually clean, card-driven interface. The goal is to practice building scalable frontend layouts backed by a real database and API — while keeping the UX fast, readable, and polished.

Version 0.2 (Current)

NewsPulse currently features a fully designed homepage with a hero section, trending stories, category chips, and article cards populated from a PostgreSQL database. Articles can be browsed by category, favorited, and displayed with rich previews including images, headlines, and summaries.

The UI emphasizes spacing, typography, and motion — with smooth hover states, responsive layouts, and a dark, modern aesthetic. The backend is fully connected, and articles are stored, fetched, and rendered dynamically through API routes.

Version 0.1

The initial version focused on laying the foundation: setting up the Next.js App Router, PostgreSQL integration, and a working article schema. Basic article cards were rendered from live database data, with early experiments in layout, theming, and component composition.

Frontend

Next.js 16 (App Router)

React 19

TypeScript

Tailwind CSS

Responsive card-based layout

Backend

Next.js API Routes

PostgreSQL

Connection pooling with environment-based configuration

Deployment

Render (Hosting)

PostgreSQL (Database)

Project Structure
newspulse/
├── app/                    # Next.js App Router pages
│   ├── api/               # Backend API routes
│   ├── article/[id]/      # Article detail pages
│   └── categories/        # Category views
├── components/            # React components
│   ├── cards/             # Article cards
│   ├── layout/            # Header, hero, grids
│   └── filters/           # Category chips & controls
├── lib/                   # Utilities
│   └── db.ts              # Database connection
└── public/                # Static assets

Getting Started

Clone the repository

Install dependencies

npm install


Set up environment variables

Run development server

npm run dev


Build for production

npm run build

Environment Variables
DATABASE_URL=postgresql://user:password@host:port/database
NEXT_PUBLIC_SITE_URL=https://your-domain.com

License

Private project – All rights reserved