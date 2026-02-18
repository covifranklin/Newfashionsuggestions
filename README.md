# Covi Franklin — Personal Website

Personal website for Covi Franklin, built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX** via `next-mdx-remote` + `gray-matter` for blog posts
- Deploy-ready for **Vercel**

## Project Structure

```
src/
  app/
    page.tsx          # Home / Landing
    about/page.tsx    # About
    writing/page.tsx  # Blog list
    writing/[slug]/   # Blog post detail
    contact/page.tsx  # Contact
  components/
    Header.tsx        # Site header with nav and theme toggle
    Footer.tsx        # Site footer
    ThemeProvider.tsx  # Dark/light mode context
  lib/
    mdx.ts            # MDX utilities (reading, parsing, frontmatter)
content/
  posts/              # Drop .mdx files here to add blog posts
```

## Adding Blog Posts

Create a new `.mdx` file in `content/posts/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-03-15"
excerpt: "A short description of the post."
tags:
  - AI Governance
  - Policy
---

Your markdown content here.
```

The post will appear automatically on the Writing page, sorted by date.

## Deploy

Push to a GitHub repository and connect it to [Vercel](https://vercel.com) for automatic deployments.
