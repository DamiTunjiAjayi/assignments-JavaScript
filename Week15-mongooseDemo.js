// week15-mongooseValidation.js
require('dotenv').config();
const mongoose = require('mongoose');

// 1) Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Mongoose connected'))
  .catch(err => {
    console.error('❌ Mongoose connection error:', err);
    process.exit(1);
  });

// 2) Define User schema with validation
const userSchema = new mongoose.Schema({
  name:  { type: String, required: [true, 'Name is required'] },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    match: [/.+@.+\..+/, 'Invalid email format'] 
  },
  age:   { 
    type: Number, 
    required: [true, 'Age is required'], 
    min: [1, 'Age must be at least 1'] 
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// 3) Attempt to create two users—second should fail on unique/email or age
async function runValidationDemo() {
  try {
    // a) Valid user
    const user1 = await User.create({ name: 'Bob', email: 'bob@example.com', age: 25 });
    console.log('👤 Created:', user1.toObject());

    // b) Invalid age (should throw a validation error)
    try {
      await User.create({ name: 'Tom', email: 'tom@example.com', age: 0 });
    } catch (err) {
      console.error('❌ Age validation error:', err.message);
    }

    // c) Duplicate email (should throw a unique-index error)
    try {
      await User.create({ name: 'Bobby', email: 'bob@example.com', age: 30 });
    } catch (err) {
      console.error('❌ Unique email error:', err.message);
    }
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Mongoose disconnected');
  }
}

runValidationDemo().catch(err => console.error(err));
