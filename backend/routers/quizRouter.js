import getQuizByIdController from '../controllers/getQuizByIdController.js';
import quizController from '../controllers/quizController.js';
import createRouter from './createRouter.js';

const quizRouter = createRouter({
  GET: {
    '/quizzes': quizController,
    '/quizzes/:id': getQuizByIdController
  },
  POST: {
    '/quizzes': quizController
  },
  PUT: {
    '/quizzes': quizController
  },
  DELETE: {
    '/quizzes': quizController
  }
});

export default quizRouter;
