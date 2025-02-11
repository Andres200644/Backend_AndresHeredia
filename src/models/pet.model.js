import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Pet', petSchema);
