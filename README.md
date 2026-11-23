# Mani Lifestyle

Production repository for **Mani Lifestyle** — Certified Cosmetics & Personal Care Manufacturer based in Changodar, Ahmedabad, Gujarat, India.

## Architecture

This repository is structured as a unified npm workspaces monorepo:

- [`frontend/`](./frontend) — Next.js 16 Customer Storefront (Port 3000) with dynamic 3D visuals, product catalog, custom quote modal, and certifications.
- [`admin/`](./admin) — Next.js 16 Enterprise Operations Admin Portal (Port 3001) featuring real-time cosmetics operations metrics, separated Home page content editor, and inquiry management.
- [`backend/`](./backend) — Express + Mongoose API Engine (Port 5000) directly connected to MongoDB Atlas.

## Quick Start

### 1. Install Dependencies
From the repository root:
```bash
npm install
```

### 2. Development Servers
Run each application independently from the root:
```bash
# Customer Storefront (http://localhost:3000)
npm run dev:frontend

# Enterprise Admin Portal (http://localhost:3001)
npm run dev:admin

# Backend REST API (http://localhost:5000)
npm run dev:backend
```

### 3. Production Builds
```bash
npm run build:frontend
npm run build:admin
npm run build:backend
```
