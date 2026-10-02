# Niazi Mobile Mart Mobile - AI Guidelines

## Identity
This is the **Niazi Mobile Mart Mobile** application. It is a completely separate repository from the desktop application.

## Core Directives
- **Stack**: React Native + TypeScript.
- **Online-Only**: This app operates entirely online. DO NOT implement offline transaction queues, SQLite databases, or sync engines.
- **Backend Authority**: The existing `niazi-server` is the business authority. DO NOT duplicate backend business logic (stock calculations, financials, ledger math) in the mobile app.
- **Design System**: Use semantic design tokens from `src/design/tokens.ts`. DO NOT scatter raw hex colors across the app. Use the established architecture.
- **Gated Implementation**: Follow gated implementation phases. Do not implement future features outside of the explicitly requested phase.
- **Safety**: 
  - Inspect before editing.
  - Do not use broad Git staging (`git add .`).
  - Commit only the requested phase.
  - Stop immediately after phase completion.
  - Do not modify unrelated systems (desktop app, backend, etc.).
