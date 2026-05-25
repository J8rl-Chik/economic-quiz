import http from 'node:http';

import quizRouter from './routers/quizRouter.js';

const server = http.createServer();

server.on('request', async (request, response) => {
  /**
   * @param {string} method
   * @returns {method is keyof typeof quizRouter}
   */
  const isValidMethod = method => {
    return method in quizRouter;
  };

  const {method: rawMethod, url} = request;

  if (!rawMethod || !url) {
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.end('Invalid request');
    return;
  }

  const method = rawMethod.toUpperCase();

  if (!isValidMethod(method)) {
    response.writeHead(405);
    response.end('Method Not Allowed');

    return;
  }

  const forcedMethod = method;

  if (!quizRouter[forcedMethod]) {
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.end('Method Not Allowed');
    return;
  }

  const controller = quizRouter[forcedMethod][url];

  if (!controller) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Not Found');
    return;
  }

  await controller(request, response);
});

const SERVER_PORT = 8080;

server.on('listening', () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

server.on('error', error => {
  console.error('Server error:', error);
});

server.listen(SERVER_PORT);
