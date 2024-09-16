import fundraiserController from '../controllers/fundraiser.controller'
import { authorizeRoles, isAuthenticated } from './../middlewares/auth'
import express from 'express'

const router = express.Router()

router.route('/').post(isAuthenticated, fundraiserController.create)
router.route('/:id').patch(isAuthenticated, authorizeRoles('admin'), fundraiserController.updateStatus)

export default router