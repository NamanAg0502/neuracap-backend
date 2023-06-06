import { Schema, model } from 'mongoose';

const userTestSchema = new Schema({
  user_test_id: { type: Number, required: true },
  user_id: { type: Number, ref: 'User', required: true },
  test_id: { type: Number, ref: 'Test', required: true },
  score: { type: Number },
  date_taken: { type: Date },
});

export default model('UserTest', userTestSchema);
