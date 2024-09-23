import mongoose from 'mongoose'
import { ICategory } from './../utils/interface'

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
}, {
  timestamps: true
})

export default mongoose.model<ICategory>('category', categorySchema)