import quizController from '../controllers/quizController.js';

/**
 * @type {import('../../types.js').QuizRouter}
 * */
const quizRouter = {
  GET: {
    '/': quizController,
    '/quizzes': quizController
  },
  POST: {
    '/': quizController,
    '/quizzes': quizController
  },
  PUT: {
    '/': quizController,
    '/quizzes': quizController
  },
  DELETE: {
    '/': quizController,
    '/quizzes': quizController
  }
};

export default quizRouter;
