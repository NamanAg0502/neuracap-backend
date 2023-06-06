import { Schema, model } from 'mongoose';

const questionStatementSchema = new Schema({
  statement_id: { type: Number, required: true },
  question_id: { type: Number, ref: 'Question', required: true },
  statement: { type: String },
  sequence: { type: Number },
});

export default model('QuestionStatement', questionStatementSchema);
