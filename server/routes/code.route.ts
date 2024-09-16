import { isAuthenticated } from './../middlewares/auth'
import codeController from './../controllers/code.controller'
import express from 'express'

const router = express.Router()

router.route('/').post(isAuthenticated, codeController.create)

export default router