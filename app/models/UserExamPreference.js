import { Schema, model } from 'mongoose';

const userExamPreferenceSchema = new Schema({
  user_exam_pref_id: { type: Number, required: true },
  user_id: { type: Number, ref: 'User', required: true },
  exam_type: { type: String },
});

export default model('UserExamPreference', userExamPreferenceSchema);
