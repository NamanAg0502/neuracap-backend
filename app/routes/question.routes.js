import express from 'express';
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
} from '../controllers/questionController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protected admin routes
router.post('/question', authenticate, createQuestion);
router.put('/questions/:questionId', authenticate, updateQuestion);
router.delete('/questions/:questionId', authenticate, deleteQuestion);
router.get('/questions', authenticate, getAllQuestions);

export default router;
