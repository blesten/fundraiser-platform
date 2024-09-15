import { FaHandHoldingHeart } from 'react-icons/fa'
import { RiFilter3Fill } from 'react-icons/ri'
import { useState } from 'react'
import FundraiserAccount from '../components/template/FundraiserAccount'
import HeadInfo from './../utils/HeadInfo'
import FundraiserCard from '../components/general/FundraiserCard'
import Filter from '../components/fundraiser/Filter'
import NewProgram from '../components/fundraiser/NewProgram'

const CharityProgram = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const [openNewProgram, setOpenNewProgram] = useState(false)

  return (
    <>
      <HeadInfo title='Charity Program' />

      <FundraiserAccount>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium text-lg'>Charity Program</h1>
          <div className='flex items-center gap-5'>
            <button onClick={() => setOpenNewProgram(true)} className='outline-none flex items-center gap-3 justify-center bg-secondary hover:bg-primary transition text-white text-sm rounded-lg py-3 px-4'>
              <FaHandHoldingHeart />
              <p>New Program</p>
            </button>
            <RiFilter3Fill onClick={() => setOpenFilter(true)} className='cursor-pointer text-2xl' />
          </div>
        </div>
        <div className='mt-8 flex flex-col gap-8 items-center'>
          <div className='grid grid-cols-3 gap-8'>
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
          <button className='outlline-none bg-secondary text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-primary transition'>Load More</button>
        </div>
      </FundraiserAccount>

      <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} isAdmin />

      <NewProgram
        openNewProgram={openNewProgram}
        setOpenNewProgram={setOpenNewProgram}
      />
    </>
  )
}

export default CharityProgram