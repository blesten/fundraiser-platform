import { IReqUser } from './../utils/interface'
import { Response } from 'express'

const codeController = {
  create: async(req: IReqUser, res: Response) => {
    try {
      
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

export default codeController