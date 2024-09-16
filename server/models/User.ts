import { IUser } from './../utils/interface'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  }
}, {
  timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)