# 13_feb_2_3 — Express Tutorial Server

A minimal Node.js tutorial server built with [Express](https://expressjs.com/) 5. It hosts two HTTP `GET` endpoints that return plaintext greetings, demonstrating how to declare routes and start an Express application.

## Prerequisites

- **Node.js `>= 18`** — required by Express 5. (Validated on Node `v22.22.2` with npm `11.1.0`.)
- **npm** — ships with Node.js and is used to install dependencies and run the server.

## Installation

```bash
npm install
```

This installs Express (`express@^5.2.1`) into `node_modules/` using the versions pinned in the committed `package-lock.json`.

## Usage

```bash
npm start
```

This runs `node index.js`. The server then listens on `http://localhost:3000` by default.

To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

Example requests:

```bash
curl http://localhost:3000/
curl http://localhost:3000/good-evening
```
