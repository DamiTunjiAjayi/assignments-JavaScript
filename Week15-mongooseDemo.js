// Week15-mongooseDemo.js
require('dotenv').config();
const mongoose = require('mongoose');

// 1) Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Mongoose connected'))
  .catch(err => {
    console.error('❌ Mongoose connection error:', err);
    process.exit(1);
  });

// 2) Define a User schema & model
const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age:   { type: Number, min: 0 },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// 3) Add and then fetch a user
async function runDemo() {
  try {
    // Upsert a single user
    const alice = await User.findOneAndUpdate(
      { email: 'alice@example.com' },
      { name: 'Alice', email: 'alice@example.com', age: 30 },
      { upsert: true, new: true }
    );
    console.log('👤 Upserted User:', alice);

    // Retrieve all users
    const allUsers = await User.find().lean();
    console.log('📋 All Users:', allUsers);
  } catch (err) {
    console.error('❌ Demo error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Mongoose disconnected');
  }
}

runDemo();
