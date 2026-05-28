import loadQuizzes from '../services/loadQuizzes.js';

/** @type {import('../../types.js').HttpHandler} */
const getQuizByIdController = async (_request, response, params) => {
  try {
    const id = Number(params?.id);

    if (!Number.isInteger(id) || id <= 0) {
      response.writeHead(400, {'Content-Type': 'application/json; charset=utf-8'});
      response.end(JSON.stringify({message: '유효하지 않은 퀴즈 ID입니다.'}));
      return;
    }

    const quizzes = await loadQuizzes();
    const quiz = quizzes.find(quizz => quizz.id === id);

    if (!quiz) {
      response.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
      response.end(JSON.stringify({message: '퀴즈를 찾을 수 없습니다.'}));
      return;
    }

    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    response.end(JSON.stringify(quiz));
  } catch (error) {
    console.error('퀴즈 불러오기 에러:', error);
    response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('서버 내부 에러가 발생했습니다.');
  }
};

export default getQuizByIdController;
