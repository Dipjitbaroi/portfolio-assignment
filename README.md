# Dip Jit Baroi — Portfolio

<p align="center">
  <strong>A modern, motion-rich developer portfolio powered by React, Vite, and Sanity.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#content-management">Content management</a> ·
  <a href="#project-structure">Project structure</a>
</p>

---

## Overview

This repository contains the personal portfolio website for **Dip Jit Baroi**. It presents a developer profile, selected work, technical skills, professional experience, testimonials, brands, and a contact form in a responsive single-page experience.

The project is split into two applications:

| Application | Purpose | Main technologies |
| --- | --- | --- |
| [`frontend/`](./frontend) | Public portfolio website | React, Vite, Sass, Framer Motion |
| [`backend/`](./backend) | Content management studio | Sanity, React, Sanity Vision |

Portfolio content is managed in Sanity and fetched by the frontend through the Sanity client. This makes it possible to update projects, skills, experiences, and testimonials without changing the UI code.

## Features

- Responsive single-page portfolio layout
- Animated sections and interactions with Framer Motion
- About, work, skills, experience, testimonial, and contact sections
- Project cards with live-demo and source-code links
- Sanity-powered content and image management
- Sanity image URL transformation for optimized content images
- Contact form that stores submissions as Sanity documents
- Local production build and preview workflows through Vite

## Tech stack

**Frontend**

- React 18
- Vite 4
- Sass
- Framer Motion
- React Icons
- Sanity Client and Image URL Builder

**Backend**

- Sanity Studio 3
- Sanity Vision
- React
- Styled Components

## Getting started

### Prerequisites

- Node.js `20.19.0` (see [`frontend/package.json`](./frontend/package.json))
- npm
- A Sanity project using the `production` dataset

### 1. Clone the repository

```bash
git clone <repository-url>
cd portfolio-assignment
```

### 2. Configure the frontend

Create `frontend/.env.local`:

```env
VITE_REACT_APP_SANITY_PROJECT_ID=a7ywbnqv
VITE_REACT_APP_SANITY_TOKEN=<your-sanity-token>
```

The project uses the `production` dataset. The token is used by the contact form to create `contact` documents, so it must have the permissions required by your Sanity project.

> **Security note:** Vite exposes variables prefixed with `VITE_` in the browser bundle. Never use a highly privileged Sanity token here. For production, prefer a server-side form endpoint or a narrowly scoped token and configure Sanity permissions accordingly. Keep `.env.local` out of version control.

### 3. Install dependencies

Install each application independently:

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 4. Start the development servers

Use two terminals from the repository root.

**Terminal 1 — Sanity Studio**

```bash
cd backend
npm run dev
```

**Terminal 2 — Portfolio frontend**

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite, then open the local Studio URL printed by Sanity to manage portfolio content.

## Content management

The Sanity Studio defines the following document types:

| Document type | Used for |
| --- | --- |
| `abouts` | About-section content and image |
| `works` | Portfolio projects, descriptions, tags, and links |
| `skills` | Skill names, icons, and background colors |
| `experiences` | Career timeline entries |
| `workExperience` | Additional work-experience content |
| `testimonials` | Client or colleague feedback |
| `brands` | Brand and company logos |
| `contact` | Messages submitted through the portfolio form |

The schemas live in [`backend/schemaTypes/`](./backend/schemaTypes), while the Sanity project and dataset are configured in [`backend/sanity.config.js`](./backend/sanity.config.js).

After adding content in Studio, refresh the frontend to see the published data. The frontend reads from Sanity's `production` dataset using the client in [`frontend/src/client.js`](./frontend/src/client.js).

## Available scripts

### Frontend

Run these commands from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with warnings treated as errors |

### Backend

Run these commands from `backend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start Sanity Studio in development mode |
| `npm run start` | Start the built Studio |
| `npm run build` | Build the Studio for production |
| `npm run deploy` | Deploy the Studio |
| `npm run deploy-graphql` | Deploy the Sanity GraphQL API |

## Production builds

Build the frontend:

```bash
cd frontend
npm run build
```

Build the Sanity Studio:

```bash
cd backend
npm run build
```

Deploy the resulting frontend `dist/` directory to a static hosting provider such as Vercel, Netlify, or GitHub Pages. Deploy the Studio separately using Sanity's hosting workflow or the `npm run deploy` command.

## Project structure

```text
portfolio-assignment/
├── frontend/
│   ├── src/
│   │   ├── components/       # Navigation and shared UI components
│   │   ├── container/        # Portfolio sections
│   │   ├── constants/        # Images and shared constants
│   │   ├── wrapper/          # Section and animation wrappers
│   │   ├── client.js         # Sanity client and image builder
│   │   └── App.jsx           # Application composition
│   └── package.json
├── backend/
│   ├── schemaTypes/          # Sanity document schemas
│   ├── sanity.config.js      # Studio configuration
│   └── package.json
└── README.md
```

## Customizing the portfolio

1. Start the backend Studio.
2. Add or update documents for the relevant section.
3. Upload images directly in Sanity where an image field is available.
4. Add project links and tags to `works` documents.
5. Publish the changes and refresh the frontend.

For layout, animation, and styling changes, edit the relevant component and Sass file under [`frontend/src/`](./frontend/src).

## License

No open-source license has been provided for this project. Unless a license is added, all rights remain with the copyright holder.

