import loadQuizzes from '../services/loadQuizzes.js';

/** @type {import('../../types.js').HttpHandler} */
const quizController = (request, response) => {
  loadQuizzes()
    .then(quizzes => {
      response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
      response.end(JSON.stringify(quizzes));
    })
    .catch(error => {
      console.error('퀴즈 불러오기 에러:', error);
      response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
      response.end('서버 내부 에러가 발생했습니다.');
    });
};

export default quizController;
