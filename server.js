const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000; // IISNode automatically passes the port
const dev = process.env.NODE_ENV !== 'production'; // Check if the environment is development
const app = next({ dev }); // Initialize Next.js with the specified environment
const handle = app.getRequestHandler(); // Default request handler for Next.js

app.prepare().then(() => {
  // Start the HTTP server
  createServer((req, res) => {
    handle(req, res); // Handle all incoming requests with Next.js
  }).listen(port, (err) => {
    if (err) throw err; // Throw an error if the server fails to start
    console.log(`> Ready on http://localhost:${port}`); // Log the server is running
  });
});