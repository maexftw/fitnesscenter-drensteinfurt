# Fitness Center Drensteinfurt - Website

This is the source code for the Fitness Center Drensteinfurt website, built with **Astro** and **TinaCMS**.

## 🚀 Project Structure

*   `src/pages/index.astro`: The main homepage component.
*   `tina/config.ts`: Configuration for TinaCMS (schema definition).
*   `public/`: Static assets (images, fonts).

## 🛠️ Development

### Prerequisites
*   Node.js (v18 or higher)
*   NPM

### Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start the development server (Astro + TinaCMS). |
| `npm run build` | Build the site for production. |
| `npm run preview` | Preview the production build locally. |

### TinaCMS Content Editing

To edit content locally:
1.  Run `npm run dev`.
2.  Navigate to `http://localhost:4321/admin`.
3.  Enter the edit mode.

## 📦 Deployment

The site is configured to build as a static site. The `dist/` folder contains the production assets.

**Note:** For the build to pass in environments without Tina Cloud credentials, fallback logic is implemented in `src/pages/index.astro` and `tina/config.ts`.
