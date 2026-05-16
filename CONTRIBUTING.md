# Contributing to SwissVote EN

Thank you for helping make Swiss direct democracy more accessible, adding a new voting matter is incredibly simple.

## How to add a new voting matter:

1. **Fork this repository** to your GitHub account.
2. **Create a new Markdown file** inside the `src/content/matters/` directory. Name it logically (e.g., `geneva-tax-reform.md`).
3. **Add the Frontmatter (Metadata)** at the very top of your file. It must look exactly like this:

---
title: "Name of the Matter"
date: 2026-06-14
level: "cantonal"
canton: "GE"
order: 3
---

4. **Paste your translated HTML** directly below the frontmatter. (Use our existing files as a visual template, or use our AI Prompt Guide to generate it).
5. **Submit a Pull Request (PR)**! We will review it, ensure the formatting matches the site, and merge it.

*Note: Please ensure all HTML `<div>` tags are flush to the left margin (do not use 4 spaces to indent), as Markdown will interpret indented HTML as a code block!*
