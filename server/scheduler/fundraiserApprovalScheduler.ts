import cron from 'node-cron'
import Fundraiser from '../models/Fundraiser'

async function deleteRejectedFundraiser() {
  await Fundraiser.deleteMany({ status: 'rejected' })
}

cron.schedule('0 0 * * *', () => {
  deleteRejectedFundraiser()
})