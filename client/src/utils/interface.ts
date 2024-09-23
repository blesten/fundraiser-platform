import { ChangeEvent, FormEvent } from 'react'

export type FormChanged = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

export type FormSubmitted = FormEvent<HTMLFormElement>

export interface IGeneralField {
  _id: string
  createdAt: string
}

export interface GlobalStoreState {
  alertState: IAlertState
  userState: IUserState
  fundraiserApprovalState: IFundraiserApprovalState
  categoryState: ICategoryState
}

export interface IAlertState {
  message: string
  type: string
}

export interface IUserState {
  data: Partial<ILoginResponse>
  loading: boolean
}

export interface IUser extends IGeneralField {
  name: string
  email: string
  password: string
  avatar: string
  role: string
}

export interface ILoginResponse {
  user: IUser
  accessToken: string
}

export interface IFundraiserApprovalState {
  data: IFundraiserApproval[]
  totalPage: number
  loading: boolean
}

export interface IFundraiserApproval extends IGeneralField {
  user: IUser
  requestProposal: string
  supportingDocument: string
  status: string
}

export interface ICategoryState {
  data: ICategory[]
  loading: boolean
}

export interface ICategory extends IGeneralField {
  title: string
}