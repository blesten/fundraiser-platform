import { Request } from 'express'
import { ObjectId, Date } from 'mongoose'

export interface IGeneralField {
  _id: string
  createdAt: Date
  updatedAt: Date
  _doc?: any
}

export interface IDecodedToken {
  id: string
}

export interface IUser extends IGeneralField {
  name: string
  avatar: string
  email: string
  password: string
  role: string
}

export interface IReqUser extends Request {
  user?: IUser
}

export interface IFundraiser extends IGeneralField {
  user: ObjectId
  requestProposal: string
  supportingDocument: string
  status: string
}

export interface ICode extends IGeneralField {
  user: ObjectId
  otp: string
  process: string
}

export interface IToken extends IGeneralField {
  user: ObjectId
  token: string
}