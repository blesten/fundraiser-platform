import mongoose from 'mongoose'

const codeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  otp: {
    type: String,
    required: true,
    trim: true,
    min: 6
  },
  process: {
    type: String,
    enum: ['change_password', 'withdraw_funds']
  }
}, {
  timestamps: true
})

export default mongoose.model('code', codeSchema)