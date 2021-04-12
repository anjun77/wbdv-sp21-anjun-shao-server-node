module.exports = (app) => {
  const questionService = require("../services/questions/question-service")

  const findAllQuestions = (req, res) => {
    const questions = questionService.findAllQuestions()
    res.send(questions)
  }

  const findQuestionsForQuiz = (req, res) => {
    const qzid = req.params.qzid;
    const questions = questionService.findQuestionsForQuiz(qzid)
    res.send(questions)
  }

  app.get("/api/questions", findAllQuestions())
  app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz())
}

