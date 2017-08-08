const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  lastName: String,
  street: String,
  number: Number,
  email: String,
  telephone: Number,
  role: {
    type: String,
    enum: [
      'Admin',
      'Security',
      'User'
    ],
    default: 'User'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
