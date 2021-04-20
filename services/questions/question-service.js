// const questions = require('./questions.json')
// const questionsModel = require("../../models/questions/questions-model")
//
// const createQuestion = () => {}
//
//
// const findAllQuestions = () => {
//   // return questions;
//   return questionsModel.find()
// }
//
// const findQuestionsForQuiz = (qzId) => {
//   // return questions.filter((question) => {
//   //   return question.quizId === qzId;
//   // })
//   return questionsModel.find({quizId: qzId})
// }
//
// const findQuestionById = (quid) => {
//   // return questions.find((question) => {
//   //   return question._id === quid;
//   // })
//   return questionsModel.findById(quid)
// }
//
//
// const updateQuestion = () => {}
//
//
// const deleteQuestion = () => {}
//
//
// module.exports = {
//   createQuestion, findQuestionsForQuiz,
//   findAllQuestions, findQuestionById,
//   updateQuestion, deleteQuestion
// }

const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }
