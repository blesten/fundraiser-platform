import { Request, Response } from 'express'
import { IDecodedToken, IReqUser } from '../utils/interface'
import { validEmail, validPassword } from '../utils/validator'
import { generateToken } from '../utils/token'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcrypt'

const userController = {
  register: async(req: Request, res: Response) => {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      return res.status(400).json({ msg: 'Please provide required field to sign up' })

    if (!validEmail(email))
      return res.status(400).json({ msg: 'Please provide valid email address to sign up' })

    if (!validPassword(password))
      return res.status(400).json({ msg: 'Password should be at least 8 characters and combination of lowercase, uppercase, number, and symbol' })

    try {
      const user = await User.findOne({ email })
      if (user)
        return res.status(400).json({ msg: `${email} was registered at our system, please use another email` })

      const passwordHash = await bcrypt.hash(password, 12)

      const newUser = new User({
        name,
        email,
        password: passwordHash
      })
      await newUser.save()

      return res.status(200).json({
        msg: `${email} has been registered at our system successfully`,
        user: {
          ...newUser._doc,
          password: ''
        }
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  login: async(req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(400).json({ msg: 'Please provide required field to sign in' })

    if (!validEmail(email))
      return res.status(400).json({ msg: 'Please provide valid email address to sign in' })

    try {
      const user = await User.findOne({ email })
      if (!user)
        return res.status(403).json({ msg: 'Invalid credential' })

      const isPwMatched = await bcrypt.compare(password, user.password)
      if (!isPwMatched)
        return res.status(403).json({ msg: 'Invalid credential' })

      const accessToken = generateToken({ id: user._id }, 'accessToken')
      const refreshToken = generateToken({ id: user._id }, 'refreshToken')

      res.cookie('fpc', refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: '/api/v1/user/refreshToken'
      })

      return res.status(200).json({
        msg: `Authenticated as ${user.name}`,
        accessToken,
        user: {
          ...user._doc,
          password: ''
        }
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  refreshToken: async(req: Request, res: Response) => {
    const { fpc: token } = req.cookies

    try {
      if (!token)
        return res.status(401).json({ msg: `${process.env.IGNORE_ERR}` })

      const decoded = <IDecodedToken>jwt.verify(token, `${process.env.REFRESH_TOKEN_SECRET}`)
      if (!decoded.id)
        return res.status(401).json({ msg: `${process.env.IGNORE_ERR}`})

      const user = await User.findById(decoded.id)
      if (!user)
        return res.status(401).json({ msg: `${process.env.IGNORE_ERR}` })

      const accessToken = generateToken({ id: user._id }, 'accessToken')
      const refreshToken = generateToken({ id: user._id }, 'refreshToken')

      res.cookie('fpc', refreshToken, {
        path: '/api/v1/user/refresh_token',
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      return res.status(200).json({
        accessToken,
        user: {
          ...user._doc,
          password: ''
        }
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  logout: async(req: Request, res: Response) => {
    try {
      res.clearCookie('fpc', {
        path: '/api/v1/user/refreshToken'
      })

      return res.status(200).json({ msg: 'Logout success' })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  editProfile: async(req: IReqUser, res: Response) => {
    const { name, avatar } = req.body
    if (!name)
      return res.status(400).json({ msg: 'Name should be filled' })

    try {
      const user = await User.findById(req.user?._id)
      if (!user)
        return res.status(401).json({ msg: 'Access denied' })

      user.name = name
      user.avatar = avatar
      await user.save()

      return res.status(200).json({
        msg: `${user.email} profile has been updated successfully`,
        user: {
          ...user._doc,
          password: ''
        }
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  changePassword: async(req: IReqUser, res: Response) => {
    const { currentPassword, newPassword } = req.body
    if (!currentPassword || !newPassword)
      return res.status(400).json({ msg: 'Please provide required field to change password' })

    if (!validPassword(newPassword))
      return res.status(400).json({ msg: 'Password should be at least 8 characters and combination of lowercase, uppercase, number, and symbol' })

    try {
      const user = await User.findById(req.user?._id)
      if (!user)
        return res.status(401).json({ msg: 'Access denied' })

      const isCurrentPwMatched = await bcrypt.compare(currentPassword, user.password)
      if (!isCurrentPwMatched)
        return res.status(400).json({ msg: 'Current password is incorrect' })

      const newPasswordHash = await bcrypt.hash(newPassword, 12)

      user.password = newPasswordHash
      await user.save()

      return res.status(200).json({ msg: 'Password has been changed successfully' })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  forgetPassword: async(req: Request, res: Response) => {
    try {
      
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  resetPassword: async(req: Request, res: Response) => {
    try {
      
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

export default userController