# CAMEO - Project Timeline & Changelog

This document tracks all modifications, updates, pushes, and deployments for the **CAMEO Management Consultancy** website. Use it to maintain a clear history of what was changed, when it was done, and when it was pushed/deployed.

---

## 🛠️ Technology Stack & Libraries

The website is built with a modern, high-performance web development stack:

*   **Languages**:
    *   **TypeScript (TSX / TS)**: Strongly-typed scripting to ensure error-free compilation and type safety.
    *   **HTML5 / CSS3**: Foundational semantics and layouts.
*   **Core UI Frameworks**:
    *   **React 19**: Modern component-based view rendering.
    *   **Next.js 15 (App Router)**: Framework for high-performance static rendering and serverless route handlers.
*   **Styling**:
    *   **Tailwind CSS (v4)**: Modern utility-first CSS framework for responsive layouts and premium designs.
*   **Animations**:
    *   **Framer Motion (v12)**: Used for scroll fade-ins, card lift micro-animations, and modal overlay popups.
*   **Icons**:
    *   **Lucide React**: Vector icons used throughout the interface.
*   **Email Deliverability**:
    *   **Resend API**: Powering the serverless API endpoint to forward visitor queries to `contact@cameoconsultancy.services` and send auto-replies to users.

---

## 📅 Timeline & Activity Log

| Date | Commit / Reference | Task / Description | Status / Deployment |
| :--- | :--- | :--- | :--- |
| **2026-07-03** | `Local` | Moved 'Accounting & Bookkeeping' service to the 1st position in core services, created its dedicated subpage `/services/accounting-bookkeeping` with an enquiry form, and updated all global links for subpage support | Local Changes (Verified Build) |
| **2026-07-02** | `3538391` | Implemented Next.js Serverless API Route (`/api/contact`) with Resend auto-reply & admin alerts mapped to verified domain `cameoconsultancy.services`, updated contact emails, resolved React form reset bug, and added logo/signature templates | Pushed to GitHub |
| **2026-05-15** | `c89b3ab` | Fixed JSX parsing error (closing tag mismatch) | Pushed to GitHub & Deployed |
| **2026-05-15** | `284f4bf` | Converted section links to standard anchor tags for reliable scrolling | Pushed to GitHub & Deployed |
| **2026-05-14** | `3920c40` | Fixed all navigation buttons and verified WhatsApp redirects | Pushed to GitHub & Deployed |
| **2026-05-12** | `0b9eb7c` | Fixed Netlify build error by switching to Web3Forms | Pushed to GitHub & Deployed |
| **2026-05-12** | `d1edadf` | Integrated Netlify Forms for live lead capture | Pushed to GitHub & Deployed |
| **2026-05-12** | `b2abb1f` | Updated Hero background image to visible Dubai skyline | Pushed to GitHub & Deployed |
| **2026-05-12** | `6d661ce` | Removed DWTC references, updated office address to Metropolis Tower, and removed Testimonials section | Pushed to GitHub & Deployed |
| **2026-05-12** | `2875b70` | Applied client text revisions to all sections | Pushed to GitHub & Deployed |
| **2026-05-12** | `f79aa59` | Initial commit: Production-ready CAMEO Management Consultancy website | Pushed to GitHub & Deployed |

---

## 📝 Update Guide

When adding new entries, please follow this format:
1. Add a new row to the top of the **Timeline & Activity Log** table (underneath the header/separator).
2. Set the current date, commit hash or description, what changes were made, and the deployment status (e.g., *In Progress*, *Pushed to GitHub*, *Deployed to Production*).
