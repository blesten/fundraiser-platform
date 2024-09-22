import { S3 } from 'aws-sdk'
import AWS from 'aws-sdk'
import fs from 'fs'
import { promisify } from 'util'

const unlinkFile = promisify(fs.unlink)

export const uploadToBucket = async(file: Express.Multer.File) => {
  const s3 = new AWS.S3()
  const fileStream = fs.createReadStream(file.path)

  const params: S3.PutObjectRequest = {
    Bucket: `${process.env.AWS_S3_AVATAR_BUCKET_NAME}`,
    Key: `uploads/${Date.now()}_${file.originalname}`,
    Body: fileStream,
    ContentType: file.mimetype
  }

  try {
    const result = await s3.upload(params).promise()
    await unlinkFile(file.path)
    return result
  } catch (err: any) {
    console.error('Error uploading file to S3:', err)
    throw new Error('File upload to S3 failed')
  }
}