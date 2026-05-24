import quizController from '../controllers/quizController.js';

/**
 * @type {import('../../types.js').QuizRouter}
 * */
const quizRouter = {
  GET: {
    '/': quizController,
    '/quizzes': quizController
  }
};

export default quizRouter;
