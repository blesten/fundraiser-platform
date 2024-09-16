import { IFundraiser } from './../utils/interface'
import mongoose from 'mongoose'

const fundraiserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  requestProposal: {
    type: String,
    required: true,
    trim: true
  },
  supportingDocument: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    default: 'in_review',
    enum: ['active', 'in_review', 'rejected']
  }
}, {
  timestamps: true
})

export default mongoose.model<IFundraiser>('fundraiser', fundraiserSchema)