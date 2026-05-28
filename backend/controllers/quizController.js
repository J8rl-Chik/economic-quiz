import express from "express";
import readQuizFile from "../services/readQuizFile.js";

const router = express.Router();
const questions = await readQuizFile();

router.get("/", (req, res) => {
  const { type } = req.query;
  const result = type ? questions.filter(q => q.type === type) : questions;
  res.json(result);
});

router.get("/:id", (req, res) => {
  const question = questions.find(q => q.id === Number(req.params.id));
  if (!question) {
    return res.status(404).json({ message: "문제를 찾을 수 없습니다." });
  }
  res.json(question);
});

export default router;
