import express from 'express';

import quizController from '../controllers/quizController.js';

const quizRouter = express.Router();

quizRouter.get('/', quizController.getQuizzes);
quizRouter.get('/:id', quizController.getQuizById);

export default quizRouter;
