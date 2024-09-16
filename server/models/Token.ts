import { IToken } from './../utils/interface'
import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  token: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model<IToken>('token', tokenSchema)