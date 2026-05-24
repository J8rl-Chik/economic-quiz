import http from "node:http";
import router from "../router.js";
import "../controllers/questionsController.js";

const SERVER = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  res.json = data => {
    res.writeHead(res.statusCode || 200);
    res.end(JSON.stringify(data));
  };

  res.status = code => {
    res.statusCode = code;
    return res;
  };

  const route = router.resolve(req.method, req.url);
  if (route) {
    req.params = route.params;
    route.handler(req, res);
    return;
  }

  res.status(404).json({ message: "Not Found" });
});

SERVER.listen(8080);

SERVER.on("listening", () => {
  console.log("Server is running on http://localhost:8080");
});

SERVER.on("error", err => {
  console.error("Server error:", err);
});
