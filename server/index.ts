import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db'
import routers from './routes'
import AWS from 'aws-sdk'

dotenv.config({
  path: 'config/.env'
})

const app = express()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/v1/fundraiser', routers.fundraiser)
app.use('/api/v1/user', routers.user)
app.use('/api/v1/code', routers.code)
app.use('/api/v1/category', routers.category)

connectDB()
require('./scheduler/fundraiserApprovalScheduler')

app.listen(process.env.PORT, () => console.log(`Server is running on PORT ${process.env.PORT}`))