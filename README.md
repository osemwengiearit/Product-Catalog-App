# Product Catalog App

This is a React Product Catalog application built using Vite.

## Overview

This project demonstrates core React concepts including:

- Component creation and composition
- Passing and destructuring props
- Rendering dynamic lists using .map()
- Using the key prop correctly
- Using the children prop for layout components
- Applying React Fragments
- Inline styling in React

## Components

### 1. Navbar

Displays the application title and total number of products.
Uses React Fragment as root element.

### 2. ProductCard

Reusable card component that displays:

- Product image
- Product name
- Formatted price
- Category
- Conditional gold border if featured

### 3. CardWrapper

A layout wrapper component that:

- Accepts children
- Adds consistent box shadow and border radius

### 4. ProductGrid

- Accepts products array
- Uses .map() to render ProductCard components
- Uses key={product.id}
- Displays products in a responsive grid layout

## Data Structure

Products are defined in `src/products.js` and each object contains:

- id
- name
- price
- category
- image
- featured

## Design Decisions

- Used inline styles for simplicity.
- Used grid layout for responsiveness.
- Used spread operator {...product} for cleaner prop passing.
- Data separated from components for clean architecture.

## How to Run

```bash
npm install
npm run dev
```

## Author

Arit Bright Osemwengie
