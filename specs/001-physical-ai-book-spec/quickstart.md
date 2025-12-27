# Quickstart: Physical AI Book

**Date**: 2025-12-27

## Summary

This guide provides the steps to set up the Docusaurus project and run it locally for development and content authoring.

## Prerequisites

- Node.js (v16.14 or later)
- npm or yarn

## Local Setup and Development

### 1. Install Dependencies

Navigate to the `book` directory and install the necessary dependencies:

```bash
cd book
npm install
```
or
```bash
cd book
yarn install
```

### 2. Run the Development Server

Start the local development server to see the site in action:

```bash
npm run start
```
or
```bash
yarn start
```

This will open a browser window with the Docusaurus site running at `http://localhost:3000`. The site will automatically reload as you make changes to the content.

## Content Development

- **Adding new lessons**: Create new Markdown files in the appropriate chapter directory under `book/docs/`.
- **Modifying content**: Edit the existing Markdown files in the `book/docs/` directory.
- **Updating sidebar**: The sidebar is automatically generated from the file structure in the `book/docs/` directory. To change the order or structure, modify the file and directory names accordingly.
