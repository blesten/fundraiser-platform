import { isAuthenticated } from './../middlewares/auth'
import userController from './../controllers/user.controller'
import express from 'express'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' });

router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
router.route('/refreshToken').get(userController.refreshToken)
router.route('/logout').get(userController.logout)
router.route('/editProfile').patch(isAuthenticated, upload.single('avatar'), userController.editProfile)
router.route('/changePassword').patch(isAuthenticated, userController.changePassword)
router.route('/forgetPassword').post(userController.forgetPassword)
router.route('/resetPassword').post(userController.resetPassword)

export default router