import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  question_id: { type: Number, required: true },
  test_id: { type: Number, ref: 'Test', required: true },
  question_text: { type: String },
  question_image: { type: String },
  answer_explanation: { type: String },
  answer_explanation_image: { type: String },
  examName: { type: String },
  subject: { type: String },
  subcategory: { type: String },
  source: { type: String },
  typeOfQuestion: { type: String },
  DifficultyLevel: { type: String },
  DiscriminatingFactor: { type: String },
});

export default model('Question', questionSchema);
