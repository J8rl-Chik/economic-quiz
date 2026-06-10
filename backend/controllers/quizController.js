import {HTTP_STATUS} from '../constants/httpStatusCode.js';
import {SERVER} from '../constants/server.js';
import loadQuizzes from '../services/loadQuizzes.js';

/** @import {Controller} from '../types.js' */

const quizController = {
  /** @type {Controller} */
  async getQuizzes(request, response) {
    try {
      const {searchParams} = new URL(request.url ?? '/', SERVER.HOST);
      const isRandom = searchParams.get('random') === 'true';
      const countParam = searchParams.get('count');
      const count = countParam !== null ? Number(countParam) : null;
      let quizzes = await loadQuizzes();

      // count 값 검증이 없으면 전체 퀴즈 조회에 문제가 생긴다.
      if (count !== null && (!Number.isInteger(count) || quizzes.length < count || count <= 0)) {
        response.status(HTTP_STATUS.BAD_REQUEST).json({message: '유효하지 않은 count 값입니다.'});

        return;
      }

      if (isRandom) {
        quizzes = quizzes.sort(() => Math.random() - 0.5);
      }

      if (count !== null) {
        quizzes = quizzes.slice(0, count);
      }

      response.json(quizzes);
    } catch (error) {
      console.error('getQuizzes 퀴즈 불러오기 에러:', error);

      response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message: '서버 내부에 에러가 발생했습니다.'});
    }
  },

  /** @type {Controller} */
  async getQuizById(request, response) {
    try {
      const id = Number(request.params?.id);

      if (!Number.isInteger(id) || id <= 0) {
        response.status(HTTP_STATUS.BAD_REQUEST).json({message: '유효하지 않은 퀴즈 ID입니다.'});

        return;
      }

      const quizzes = await loadQuizzes();
      const quiz = quizzes.find(quizz => quizz.id === id);

      if (!quiz) {
        response.status(HTTP_STATUS.NOT_FOUND).json({message: '퀴즈를 찾을 수 없습니다.'});

        return;
      }

      response.json(quiz);
    } catch (error) {
      console.error('getQuizById 퀴즈 불러오기 에러:', error);

      response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message: '서버 내부에 에러가 발생했습니다.'});
    }
  }
};

export default quizController;
