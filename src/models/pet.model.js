import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
});

export default mongoose.model('Pet', petSchema);
