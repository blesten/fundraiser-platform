import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface IProps {
  image: string
  title: string
  description: string
  collectedFund: number
  goals: number
  donatorCount: number
}

const FundraiserCard = ({ image, title, description, collectedFund, goals, donatorCount }: IProps) => {
  return (
    <Link to={`/fundraiser/dad`} className='rounded-xl border border-gray-300 p-4 hover:scale-105 transition outline-none'>
      <div className='rounded-xl h-48 bg-gray-200'></div>
      <h1 className='font-medium text-lg leading-relaxed mt-4'>{title.length > 45 ? `${title.substring(0, 45)} ...` : title}</h1>
      <p className='mt-3 text-xs text-gray-400'>{description.length > 40 ? `${description.substring(0, 40)} ...` : description}</p>
      <div className='flex items-center gap-2 mt-5'>
        <p className='text-lg font-medium'>${collectedFund.toLocaleString()}</p>
        <p className='text-xs font-semibold text-gray-500'>raised of ${goals.toLocaleString()} goal</p>
      </div>
      <div className='w-full rounded-full h-2 bg-gray-200 mt-5 relative after:content-[ ] after:absolute after:h-2 after:w-1/2 after:rounded-full after:top-0 after:left-0 after:bg-secondary' />
      <div className='mt-6 flex items-center gap-2'>
        <FaHeart className='text-red-500' />
        <p className='text-xs text-gray-600 font-semibold'>{donatorCount.toLocaleString()} supporters</p>
      </div>
    </Link>
  )
}

export default FundraiserCard