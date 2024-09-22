import Fundraiser from '../models/Fundraiser'
import { uploadToBucket } from '../utils/helper'
import { pagination } from '../utils/pagination'
import { IReqUser } from './../utils/interface'
import { Request, Response } from 'express'

const fundraiserController = {
  create: async(req: IReqUser, res: Response) => {
    const file = req.file

    const { requestProposal } = req.body
    if (!requestProposal || !file)
      return res.status(400).json({ msg: 'Please provide required field to create fundraiser account' })
    
    try {
      const isFundraiserExists = await Fundraiser.findOne({ user: req.user?._id })
      if (isFundraiserExists)
        return res.status(400).json({ msg: `${req.user?.email} account was already registered as a fundraiser` })

      const result = await uploadToBucket(file)

      const fundraiser = new Fundraiser({
        user: req.user?._id,
        requestProposal,
        supportingDocument: result.Location
      })
      await fundraiser.save()

      return res.status(200).json({ msg: 'Fundraiser account proposal has been submitted successfully' })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  read: async(req: Request, res: Response) => {
    try {
      const { skip, limit } = pagination(req)
      
      const dataAggregation: any[] = [
        {
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          }
        },
        { $unwind: '$user' },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit }
      ]

      const countAggregation: any[] = [
        { $count: 'count' }
      ]

      const data = await Fundraiser.aggregate([
        {
          $facet: {
            totalData: dataAggregation,
            totalCount: countAggregation
          }
        },
        {
          $project: {
            count: { $arrayElemAt: ['$totalCount.count', 0] },
            totalData: 1
          }
        }
      ])

      const fundraisers = data[0].totalData
      const totalFundraisers = data[0].count
      let totalPage = 0

      if (fundraisers.length === 0) {
        totalPage = 0
      } else {
        if (totalFundraisers % limit === 0) {
          totalPage = totalFundraisers / limit
        } else {
          totalPage = Math.floor(totalFundraisers / limit) + 1
        }
      }

      return res.status(200).json({
        fundraisers,
        totalPage
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  readByUser: async(req: IReqUser, res: Response) => {
    try {
      const fundraiser = await Fundraiser.findOne({ user: req.user?._id }).select('user status')
      return res.status(200).json({ fundraiser: fundraiser || {} })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
  updateStatus: async(req: IReqUser, res: Response) => {
    const { id } = req.params
    const { status } = req.body

    if (!status)
      return res.status(400).json({ msg: 'Please provide fundraiser status' })

    if (status !== 'active' && status !== 'in_review' && status !== 'rejected')
      return res.status(400).json({ msg: 'Please provide valid fundraiser status' })

    try {
      const fundraiser = await Fundraiser.findById(id)
      if (!fundraiser)
        return res.status(404).json({ msg: `Fundraiser with ID ${id} not found` })

      fundraiser.status = status
      await fundraiser.save()

      return res.status(200).json({
        msg: `Fundraiser status with ID ${id} has been updated successfully`,
        fundraiser
      })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

export default fundraiserController