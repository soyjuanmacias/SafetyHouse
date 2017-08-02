const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  name: String,
  lastName: String,
  password: String,
  email: String,
  telephone: Number,
  role: {
    type: String,
    enum: [
      'Admin',
      'Security',
      'User'
    ]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
