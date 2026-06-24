# Sublytics

A modern SaaS-style subscription manager UI built with React and Tailwind CSS.

## Phase 2 — UI Foundation

This phase focuses on layout, reusable components, and static mock data. No business logic, state management, or API integration.

## Features

- **Dashboard layout** — Fixed sidebar + main content area
- **React Router** — `/` (Dashboard) and `/subscriptions`
- **Reusable components** — Sidebar, Navbar, SummaryCard, SubscriptionCard
- **Add Subscription modal** — Form UI only (no persistence)
- **Dark mode toggle** — Basic UI toggle (session only)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deployment (GitHub Pages)

Live site: [https://lirishatayal.github.io/Sublytics/](https://lirishatayal.github.io/Sublytics/)

Pushes to `main` deploy automatically via GitHub Actions. In the repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The Vite `base` is `/Sublytics/` so assets and React Router work under the project URL path.

## Project Structure

```
src/
├── components/
│   ├── layout/          # Dashboard shell
│   ├── ui/              # Primitives (Button, Card, Modal, etc.)
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── SummaryCard.jsx
│   ├── SubscriptionCard.jsx
│   └── AddSubscriptionModal.jsx
├── data/
│   └── mockData.js      # Static hardcoded data
└── pages/
    ├── Dashboard.jsx
    └── Subscriptions.jsx
```

## Tech Stack

- React 19
- React Router
- Tailwind CSS v4
- Vite
