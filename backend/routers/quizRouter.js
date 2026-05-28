import quizController from '../controllers/quizController.js';
import createRouter from './createRouter.js';

const quizRouter = createRouter({
  GET: {
    '/quizzes': quizController.getQuizzes,
    '/quizzes/:id': quizController.getQuizById
  }
});

export default quizRouter;
