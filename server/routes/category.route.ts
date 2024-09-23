import express from 'express'
import categoryController from './../controllers/category.controller'
import { isAuthenticated, authorizeRoles } from './../middlewares/auth'

const router = express.Router()

router.route('/')
  .get(categoryController.read)
  .post(isAuthenticated, authorizeRoles('admin'), categoryController.create)

router.route('/:id')
  .patch(isAuthenticated, authorizeRoles('admin'), categoryController.update)
  .delete(isAuthenticated, authorizeRoles('admin'), categoryController.delete)

export default router