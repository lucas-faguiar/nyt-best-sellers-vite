# New York Times Best Sellers

## Overview

This application fetches and displays latest data about the New York Times Best Sellers Books. It also provides search tools.

## Data

All data is fetched from The New York Times official [Books API](https://developer.nytimes.com/docs/books-product/1/overview). According to their documentation some Book lists are published weekly and others monthly.

For the scope of this project the endpoint [/lists/best-sellers/history.json](https://developer.nytimes.com/docs/books-product/1/routes/lists/best-sellers/history.json/get) is being used.

## Arquitecture

The applcaitions consists of a React frontend using [Vite](https://vitejs.dev/) framework. The intention when using Vite is to improve Developer experience through a light weight setup.

Upon application openning a first fetch is made to the API without any search parameter. This result is storede on browser's local storage for improved performance.

## Running the application

### 1. Clone the repo

`git clone https://github.com/lucas-faguiar/nyt-best-sellers-vite`

### 2. Install dependencies

`npm install`

### 3. Run the application

`npm run dev`

### 4. Navigate the application

Open your browser at `http://localhost:5173/`

## Features

- Best sellers are fetched from NYT API and displayed in an ordered list.
- Book details are displayed upon item click.
- Loading component for better UX.
- Fade in, hover and box-shadow effects to avoid jarring changes on UI.
- Pagination on the bottom of the page to see more items, 20 per load.
- Total items found count.
- Search input to filter by text.
- Search types by title, author, publisher and ISBN.
- Responsiveness for mobile devices.
