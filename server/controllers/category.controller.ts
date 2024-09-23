import { Request, Response } from 'express'
import Category from '../models/Category'

const categoryController = {
  create: async(req: Request, res: Response) => {
    const { title } = req.body
    if (!title)
      return res.status(400).json({ msg: 'Please provide category title' })

    try {
      const category = await Category.findOne({ title })
      if (category)
        return res.status(400).json({ msg: `${title} category has been created before` })

      const newCategory = new Category({
        title
      })
      await newCategory.save()

      return res.status(200).json({
        msg: `${title} category has been created successfully`,
        category: newCategory
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  read: async(req: Request, res: Response) => {
    try {
      const categories = await Category.find().sort('-createdAt')
      return res.status(200).json({ categories })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  update: async(req: Request, res: Response) => {
    const { id } = req.params
    const { title } = req.body
    if (!title)
      return res.status(400).json({ msg: 'Please provide category title' })

    try {
      const category = await Category.findById(id)
      if (!category)
        return res.status(404).json({ msg: `Category with ID ${id} not found` })

      const isTitleExists = await Category.findOne({ title, _id: { $ne: id } })
      if (isTitleExists)
        return res.status(400).json({ msg: `${title} category has been created before` })

      category.title = title
      await category.save()

      return res.status(200).json({
        msg: `Category with ID ${id} has been updated successfully`,
        category
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  delete: async(req: Request, res: Response) => {
    const { id } = req.params

    try {
      await Category.findByIdAndDelete(id)
      return res.status(200).json({ msg: `Category with ID ${id} has been deleted successfully` })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

export default categoryController