import { S3 } from 'aws-sdk'
import path from 'path'
import AWS from 'aws-sdk'
import fs from 'fs'

export const uploadToBucket = (file: Express.Multer.File) => {
  const s3 = new AWS.S3()
  const fileStream = fs.createReadStream(file.path)

  const params: S3.PutObjectRequest = {
    Bucket: `${process.env.AWS_S3_AVATAR_BUCKET_NAME}`,
    Key: `uploads/${Date.now()}_${file.originalname}`,
    Body: fileStream,
    ContentType: file.mimetype
  }

  return s3.upload(params).promise()
}