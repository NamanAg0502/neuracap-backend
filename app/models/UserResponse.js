import { Schema, model } from 'mongoose';

const userResponseSchema = new Schema({
  user_response_id: { type: Number, required: true },
  user_test_id: { type: Number, ref: 'UserTest', required: true },
  question_id: { type: Number, ref: 'Question', required: true },
  option_id: { type: Number, ref: 'AnswerOption' },
  answer_correct: { type: Boolean },
  confidence_level: { type: String },
  time_taken_seconds: { type: Number },
});

export default model('UserResponse', userResponseSchema);
