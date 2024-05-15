import mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  done: Boolean,
})