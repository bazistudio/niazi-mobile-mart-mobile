# Niazi Mobile Mart Mobile

## Project Purpose
This is the mobile application for Niazi Mobile Mart, designed to connect to the existing `niazi-server` backend. It serves as a modern, online-only mobile interface for the platform.

## Technology Stack
- **Framework**: React Native (Android-first)
- **Language**: TypeScript
- **Navigation**: React Navigation
- **State Management**: TanStack Query (server state), Zustand (client state)
- **Forms**: React Hook Form + Zod
- **Networking**: Axios

## Architecture
- **Online-Only**: This application requires an active connection to the backend. There is NO offline transaction system, NO local SQLite database, and NO sync engine.
- **Backend Boundary**: The existing `niazi-server` is the business authority. The mobile app MUST NOT duplicate business logic, inventory calculations, or financial rules. It purely consumes the API.
- **Design System**: Built around semantic tokens (`colors.primary`, etc.) avoiding raw color hexes in components.

## Setup Instructions
1. Install Node.js (v18+)
2. Install dependencies: `npm install`
3. Configure environment variables (copy `.env.example` to `.env` when available)

### Android Development
Ensure Android Studio, Android SDK, and Java are installed and configured according to the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup).
Start the Metro bundler:
```bash
npm start
```
Run on Android emulator/device:
```bash
npm run android
```

## Available Scripts
- `npm run lint`: Run ESLint to find code issues.
- `npm run typecheck`: Run TypeScript compiler to check for type errors.
- `npm test`: Run Jest tests.

## Git Workflow
Always branch off from `main` (e.g., `feature/module-name`).
Ensure `npm run lint` and `npm run typecheck` pass before committing.

## Current M0 Scope
- React Native repository foundation.
- Architecture and folder structure setup.
- Core dependencies integration.
- Design tokens and theme foundation.
- Authentication state placeholder.
- API client foundation.

## Future Scope
- 93+ screen UI implementation based on Stitch designs.
- Authentication flow.
- POS and Sales.
- Inventory management.
- Customer/Supplier management.
- Reports and Settings.
- Play Store publishing.
