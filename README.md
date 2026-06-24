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
