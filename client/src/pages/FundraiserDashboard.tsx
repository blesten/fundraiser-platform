import { FaDonate, FaHandHoldingHeart, FaHeart } from 'react-icons/fa'
import FundraiserAccount from '../components/template/FundraiserAccount'
import HeadInfo from './../utils/HeadInfo'
import FundraiserCard from '../components/general/FundraiserCard'

const FundraiserDashboard = () => {
  return (
    <>
      <HeadInfo title='Dashboard' />

      <FundraiserAccount>
        <div className='md:flex-row flex-col flex items-center md:gap-10 gap-4'>
          <div className='rounded-lg text-white bg-blue-500 p-4 flex items-center md:justify-start justify-between gap-7 md:w-fit w-full'>
            <FaHeart className='text-blue-700 text-4xl' />
            <div>
              <h1 className='text-sm'>Charity Program</h1>
              <p className='text-3xl text-right mt-3 font-medium'>5</p>
            </div>
          </div>
          <div className='rounded-lg text-white bg-secondary p-4 flex items-center md:justify-start justify-between gap-7 md:w-fit w-full'>
            <FaDonate className='text-primary text-4xl' />
            <div>
              <h1 className='text-sm'>Received Funds</h1>
              <p className='text-3xl text-right mt-3 font-medium'>$80,000</p>
            </div>
          </div>
          <div className='rounded-lg text-white bg-orange-500 p-4 flex items-center md:justify-start justify-between gap-7 md:w-fit w-full'>
            <FaHandHoldingHeart className='text-orange-700 text-4xl' />
            <div>
              <h1 className='text-sm'>Withdrawed Amount</h1>
              <p className='text-3xl text-right mt-3 font-medium'>$40,000</p>
            </div>
          </div>
        </div>
        <div className='mt-8 lg:mb-0 mb-20'>
          <h1 className='font-medium text-lg'>Recent Charity Program</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-4'>
            <FundraiserCard
              title='Fundraiser Title Will Goes Here Later'
              collectedFund={10000}
              goals={100000}
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              donatorCount={20000}
              image=''
              isAdmin={true}
            />
            <FundraiserCard
              title='Fundraiser Title Will Goes Here Later'
              collectedFund={10000}
              goals={100000}
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              donatorCount={20000}
              image=''
              isAdmin={true}
            />
            <FundraiserCard
              title='Fundraiser Title Will Goes Here Later'
              collectedFund={10000}
              goals={100000}
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              donatorCount={20000}
              image=''
              isAdmin={true}
            />
          </div>
        </div>
      </FundraiserAccount>
    </>
  )
}

export default FundraiserDashboard