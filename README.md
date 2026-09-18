# Shop!

A React shopping cart application built with Vite. Browse products, select quantities, add items to a persistent cart and review cart totals in Kenyan shillings.

## Features

- Product catalogue loaded from the [Fake Store API](https://fakestoreapi.com/).
- Product quantity controls before adding an item to the cart.
- Cart quantity controls, item removal and grand totals.
- Cart persistence with `localStorage`.
- USD-to-Ksh price conversion using a shared exchange-rate helper.
- Client-side routing with React Router.
- Responsive homepage gallery using local SVG assets.
- Netlify SPA fallback for direct navigation to application routes.

## Built With

- React 19
- Vite
- React Router
- Material Design Icons
- CSS Modules

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```text
src/
	components/       Reusable shop and cart components
	modules/          Shared helpers, including currency conversion
	pages/            Homepage, shop and cart route views
	routes/           React Router route configuration
	App.jsx           Shared layout and cart state owner
	main.jsx          Application entry point
public/
	_redirects        Netlify fallback for client-side routes
```

## Currency Conversion

The Fake Store API provides prices in USD. Displayed prices are converted to Ksh using the `USD_TO_KSH` value in [`src/modules/currency.js`](src/modules/currency.js). Update that value when the exchange rate changes.

Cart state keeps the original API price for calculations and converts values only when displaying them.

## Deployment

The `public/_redirects` file contains the Netlify SPA fallback:

```text
/* /index.html 200
```

This sends unknown routes to the React entry point so React Router can handle navigation.
