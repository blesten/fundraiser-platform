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
}

export interface IAlertState {
  message: string
  type: string
}

export interface IUserState {
  data: Partial<ILoginResponse>
  loading: boolean
}

export interface IUser {
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