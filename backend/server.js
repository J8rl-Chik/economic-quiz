import express from "express";
import quizRouter from "./controllers/quizController.js";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

app.use("/api/questions", quizRouter);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
