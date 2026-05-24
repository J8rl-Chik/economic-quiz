import router from "../router.js";
import readQuizFile from "../services/readQuizFile.js";

const questions = await readQuizFile();

router.get("/api/questions", (req, res) => {
  const type = new URL(req.url, "http://localhost").searchParams.get("type");
  const result = type
    ? questions.filter(q => q.type === type)
    : questions;

  res.json(result);
});

router.get("/api/questions/:id", (req, res) => {
  const question = questions.find(q => q.id === Number(req.params.id));

  if (!question) {
    res.status(404).json({ message: "문제를 찾을 수 없습니다." });
    return;
  }

  res.json(question);
});
