import { authorizeRoles, isAuthenticated } from './../middlewares/auth'
import fundraiserController from '../controllers/fundraiser.controller'
import express from 'express'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.route('/')
  .get(isAuthenticated, fundraiserController.readByUser)
  .post(isAuthenticated, upload.single('supportingDocument'), fundraiserController.create)

router.route('/admin').get(isAuthenticated, authorizeRoles('admin'), fundraiserController.read)

router.route('/:id').patch(isAuthenticated, authorizeRoles('admin'), fundraiserController.updateStatus)

export default router