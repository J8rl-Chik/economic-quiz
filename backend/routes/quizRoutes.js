import http from "node:http";

// 테스트 서버
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello, World!</h1>");
  res.end("<h1>Hello, World!</h1><p>This is a simple quiz application.</p>");
});
server.listen(8080);

server.on("listening", () => {
  console.log("Server is running on http://localhost:8080");
});
server.on("error", (err) => {
  console.error("Server error:", err);
});
