# Next.js 15 - Error Navigating Between Pages with Different Data Fetching Methods

This repository demonstrates a bug in Next.js 15 where navigating between pages that use different data fetching methods (e.g., `getServerSideProps` vs. no data fetching) can lead to unexpected errors.

## Bug Description

The `pages/about.js` component does not define `getServerSideProps` or `getStaticProps`, while `pages/index.js` does not use either.  Navigating from the index page to the about page works fine, but if `about.js` tries to use either `getServerSideProps` or `getStaticProps` without actually implementing them properly (e.g., missing return statement or throwing an error within them) the app will throw a runtime error.

## Setup

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/about`

## Solution

Ensure that if a page uses `getServerSideProps` or `getStaticProps`, the function is properly implemented and returns the correct data or a valid response.