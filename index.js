/**
 * index.js — Express application entry point.
 *
 * Runtime entry point for the "13_feb_2_3" tutorial server. It instantiates a
 * single Express (v5) application, registers two `GET` routes that return
 * plaintext greetings, and starts an HTTP listener.
 *
 * This file is referenced by `package.json` `main` and is launched by
 * `npm start` (which runs `node index.js`).
 *
 * Endpoints:
 *   - GET /              -> "Hello world"   (baseline endpoint, preserved)
 *   - GET /good-evening  -> "Good evening"  (new endpoint, added feature)
 *   - Any unmatched route falls through to Express's built-in 404 handler.
 *
 * Module system: CommonJS (`require`). The project's `package.json` does not
 * declare `"type": "module"`, so ESM `import` syntax is intentionally not used.
 *
 * Dependency: express@^5.2.1 (resolved from `node_modules/` per
 * `package.json` / `package-lock.json`; run `npm install` first).
 */

'use strict';

// Express is the minimalist web framework that powers routing and the
// HTTP request/response handling for both endpoints. Imported via CommonJS.
const express = require('express');

// Instantiate the Express application. All routes and the HTTP listener are
// registered on this single application object.
const app = express();

// Port the HTTP server binds to. Reads the optional `PORT` environment
// variable so the port can be overridden without code changes, falling back
// to 3000 when `PORT` is not set.
const PORT = process.env.PORT || 3000;

/**
 * Baseline endpoint (preserved): GET / -> "Hello world".
 *
 * Responds to HTTP GET requests at the root path with the exact plaintext
 * greeting "Hello world".
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * New endpoint (added feature): GET /good-evening -> "Good evening".
 *
 * Responds to HTTP GET requests at `/good-evening` with the exact plaintext
 * greeting "Good evening".
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and begin accepting connections on the configured
// port. The startup callback logs a single line indicating the server is
// listening, which aids local development and confirms a successful boot.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
