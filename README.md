# OpenClaw Workflow Visualizer Skill

This is a premium, web-based dashboard designed to be uploaded as a "skill" for Clawhub/OpenClaw. It provides a visual, real-time flowchart representation (similar to n8n) of agentic workflows defined in Markdown.

## Features

- **Halaman Utama (Dashboard):** Overview of your OpenClaw agent stats, active workflows, and system status.
- **Halaman Skill (Skills Page):** A grid view of all the skills currently installed or available on your OpenClaw account.
- **Halaman Flow (Workflow Visualizer):** 
  - Dynamic Markdown-to-Flowchart parsing.
  - Dropdown to select and load different workflows.
  - Tabs to quickly switch between active workflow views.
  - Real-time step tracking with API Polling (auto-updates every 3 seconds to see exactly where the bot is currently working).
- **Premium Aesthetics:** Uses modern Vanilla CSS with dark mode, glassmorphism, and smooth micro-animations.

## How to Connect to Your Clawhub Account

This dashboard is built to be **plug-and-play**. By default, if no API is configured, it will run using simulated Mock Data so you can see how it works instantly.

To connect it to your live OpenClaw backend:
1. Rename the `.env.example` file to `.env`.
2. Open `.env` and fill in your OpenClaw backend URL and API Key:
   ```env
   VITE_CLAWHUB_API_URL=https://api.your-clawhub-instance.com
   VITE_CLAWHUB_API_KEY=your_secret_token
   ```
3. The application will automatically detect these settings and start fetching live data and polling for real-time workflow status!

## How to Run Locally

1. Make sure you have Node.js installed.
2. Run `npm install` to install dependencies (Vite, React, React Router, React Flow).
3. Run `npm run dev` to start the development server.
4. Open your browser to the local URL provided (usually `http://localhost:5173`).

## How to Upload to Clawhub

1. Ensure your `.env` is configured correctly for your production environment (or set the environment variables in your build platform).
2. Build the project using `npm run build`. This will generate a `dist` folder containing the optimized, static production files.
3. Upload the contents of the `dist` folder to Clawhub as your custom dashboard/GUI skill.

---
*Built with Vite, React, and React Flow.*
