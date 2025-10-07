# Router MFE Config - Turborepo Monorepo

This is a Turborepo monorepo with React 18, React Router 7.9.1, and webpack module federation setup.

## Structure

- **Host App** (port 3000): Main application that consumes remote apps
- **Remote 1** (port 3001): Dashboard and profile pages
- **Remote 2** (port 3002): Products and orders pages
- **Remote 3** (port 3003): Settings and analytics pages

## Getting Started

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install dependencies for all apps
cd apps/host && npm install
cd ../remote1 && npm install
cd ../remote2 && npm install
cd ../remote3 && npm install
```

### 2. Development

To run all apps in development mode, you need to start each app in a separate terminal:

```bash
# Terminal 1 - Start Remote 1
cd apps/remote1
npm run dev

# Terminal 2 - Start Remote 2
cd apps/remote2
npm run dev

# Terminal 3 - Start Remote 3
cd apps/remote3
npm run dev

# Terminal 4 - Start Host App
cd apps/host
npm run dev
```

Or use Turbo to start all apps:

```bash
npm run dev
```

### 3. Access the Applications

- **Host App**: http://localhost:3000
- **Remote 1**: http://localhost:3001
- **Remote 2**: http://localhost:3002
- **Remote 3**: http://localhost:3003

## Features

### Host App
- Home page with navigation
- About page with information about the setup
- Integration with all remote apps via module federation

### Remote 1
- Dashboard with widgets
- Profile page with user information

### Remote 2
- Products page with product listing
- Orders page with order history table

### Remote 3
- Settings page with form controls
- Analytics page with metrics dashboard

## Module Federation

The apps use Webpack Module Federation to share components:

- Each remote app exposes its `App` component
- Host app consumes all remote apps
- Shared dependencies: React, React DOM, React Router
- Each app can run independently for development

## Build

```bash
# Build all apps
npm run build

# Build specific app
cd apps/host && npm run build
```

## Type Checking

```bash
# Type check all apps
npm run type-check

# Type check specific app
cd apps/host && npm run type-check
```