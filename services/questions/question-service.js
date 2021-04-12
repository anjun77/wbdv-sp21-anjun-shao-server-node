const questions = require('./questions.json')

const createQuestion = () => {}


const findAllQuestions = () => {
  return questions;
}

const findQuestionsForQuiz = (qzId) => {
  return questions.filter((question) => {
    return question.quizId === qzId;
  })
}

const findQuestionById = (quid) => {
  return questions.find((question) => {
    return question._id === quid;
  })
}


const updateQuestion = () => {}


const deleteQuestion = () => {}


module.exports = {
  createQuestion, findQuestionsForQuiz,
  findAllQuestions, findQuestionById,
  updateQuestion, deleteQuestion
}