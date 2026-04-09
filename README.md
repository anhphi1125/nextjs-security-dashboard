This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Next.js Security Dashboard

A modern frontend dashboard project built with Next.js, TypeScript, and Tailwind CSS to simulate a security monitoring platform.

## Overview

This project demonstrates a production-style dashboard with:

* Shared dashboard layout (sidebar + header)
* Asset monitoring page
* Data fetching with React Query
* Skeleton loading states
* Add Asset form with validation
* Optimistic UI updates
* Simulated real-time alerts

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* React Query
* React Hook Form
* Zod

## Features

### Dashboard Layout

* Responsive sidebar and header
* Nested routing with shared layout

### Asset Management

* Fetch fake asset data from API route
* Display assets in table format
* Loading skeleton while fetching
* Error handling and retry support

### Add Asset Form

* Add new assets instantly
* Form validation with Zod
* Clean and reusable form component

### Optimistic UI

* New assets appear immediately without page reload
* React Query cache update

### Real-time Alerts

* Simulated live alerts using setInterval
* Dynamic alert list updates

## Project Structure

```txt
app/
 ├── dashboard/
 │   ├── layout.tsx
 │   ├── page.tsx
 │   └── assets/
 │       └── page.tsx
 ├── api/
 │   └── assets/
 │       └── route.ts
 └── lib/
     └── schema.ts

components/
 ├── Sidebar.tsx
 ├── Header.tsx
 ├── AddAssetForm.tsx
 ├── AssetsTable.tsx
 ├── AssetsTableSkeleton.tsx
 └── RealTimeAlerts.tsx
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Open in browser

```bash
http://localhost:3000/dashboard
```

## Key Learning Outcomes

* Built reusable UI components
* Improved state management with React Query
* Practiced form validation and clean architecture
* Simulated real-time frontend behavior
* Applied modern frontend best practices

## Author

Đào Thị Ánh Phi

* GitHub: [https://github.com/anhphi1125](https://github.com/anhphi1125)


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
