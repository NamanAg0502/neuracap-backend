import { Schema, model } from 'mongoose';

const answerOptionSchema = new Schema({
  option_id: { type: Number, required: true },
  question_id: { type: Number, ref: 'Question', required: true },
  option_text: { type: String },
  is_correct: { type: Boolean },
});

export default model('AnswerOption', answerOptionSchema);
