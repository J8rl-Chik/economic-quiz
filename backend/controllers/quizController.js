import http from "node:http";

import loadQuizzes from "../services/loadQuizzes.js";

let quizzes = [];

try {
  quizzes = await loadQuizzes();
} catch (error) {
  console.error(error);
  process.exit(1);
}

const server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(quizzes));
});

const SERVER_PORT = 8080;

server.on("listening", () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

server.on("error", error => {
  console.error("Server error:", error);
});

server.listen(SERVER_PORT);
