const mongoose = require('mongoose');

// Use environment variable or fallback to localhost
const mongoURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookmyshow';

console.log('Connecting to MongoDB...');

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('✅ Connected to MongoDB successfully!');
});

module.exports = db;