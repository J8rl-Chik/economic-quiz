import http from 'node:http';

import quizRouter from './routers/quizRouter.js';

const server = http.createServer();

server.on('request', async (request, response) => {
  const {method, url} = request;

  if (!method || !url) {
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.end('Invalid request');
    return;
  }

  if (!quizRouter.hasMethod(method)) {
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.end(`Method is not allowed: ${method}`);
    return;
  }

  const result = quizRouter.findController(method, url);

  if (!result) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Not Found');
    return;
  }

  await result.controller(request, response, result.params);
});

const SERVER_PORT = 8080;

server.on('listening', () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

server.on('error', error => {
  console.error('Server error:', error);
});

server.listen(SERVER_PORT);
