# WP Headless Client

A React.js frontend that consumes a WordPress.com site as a headless CMS using the WordPress REST API.

## Demo

[https://nazaninhashemian.github.io/wp-headless-client](https://nazaninhashemian.github.io/wp-headless-client)

## Features

- Fetches and displays blog posts from a WordPress.com site.
- Filters posts by categories fetched dynamically from WordPress.
- Responsive and simple UI.
- Fully client-side, deployed as a static site on GitHub Pages.

## Technologies Used

- React.js
- WordPress REST API (public WordPress.com API)
- GitHub Pages for deployment

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/nazaninhashemian/wp-headless-client.git
cd wp-headless-client
npm install

Development
npm start
Runs the app locally at http://localhost:3000.

Deployment
npm run build
npm run deploy
Builds the app and deploys to GitHub Pages.

Configuration
The app fetches data from this WordPress.com site via its public API:
https://public-api.wordpress.com/wp/v2/sites/nazanin46.wordpress.com/