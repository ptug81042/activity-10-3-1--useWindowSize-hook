# Responsive Window Tracker (React + TypeScript + Vite)

This project demonstrates a real-time window dimension tracker using a custom React Hook. It showcases how to use `useEffect` for lifecycle management, `useState` for dynamic updates, and TypeScript for type safety — all powered by Vite for lightning-fast development.

---

##  Features

-  Custom `useWindowSize` hook
-  React + TypeScript + Vite project setup
-  Live updates of window width & height
-  Cleanup of window event listeners on unmount
-  CSS Modules for scoped styling
-  Optional ESLint config for type-aware linting

---

## Project Overview

This application renders a component that listens to the browser window size and updates the display in real-time.

It includes:

- `useWindowSize` custom hook:
  - Stores `width` and `height` in local state
  - Listens to the `resize` event
  - Automatically cleans up the event listener
- `WindowSizeDisplay` component:
  - Calls `useWindowSize`
  - Displays dimensions to the user
- `App.tsx`: Root component rendering the display
- `App.css`: Basic styling for centered layout

Use this as a reference for responsive UI, hooks, and organizing a TypeScript React project.

---

## Setup & Usage

### Prerequisites

- Node.js ≥ 16
- npm or yarn

### Installation

```bash
git clone [https://github.com/your-username/responsive-window-tracker.git](https://github.com/ptug81042/activity-10-3-1--useWindowSize-hook/tree/main)
cd activity-10-3-1--useWindowSize-hook/tree/main
npm install
npm run dev
