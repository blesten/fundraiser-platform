import { MdFilterList } from 'react-icons/md'
import { useState } from 'react'
import FundraiserCard from './../../components/general/FundraiserCard'
import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'
import Filter from '../../components/fundraiser/Filter'
import Footer from '../../components/general/Footer'

const Fundraiser = () => {
  const [openFilter, setOpenFilter] = useState(false)
  
  return (
    <>
      <HeadInfo title='Fundraiser' />

      <div className='lg:px-24 py-7 px-6'>
        <Navbar />
        <div className='w-full h-[200px] bg-primary xl:mt-24 mt-20 relative md:flex hidden items-center justify-center'>
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-60 md:block hidden top-2 right-2 absolute' />
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-60 md:block hidden bottom-2 left-2 absolute rotate-180' />
          <div className='text-center text-white text-3xl'>
            <h1>Where generosity meets</h1>
            <h1 className='mt-4'>opportunity for lasting impact</h1>
          </div>
        </div>
        <div className='w-full flex xl:flex-row flex-col xl:gap-14 gap-10 md:mt-10 mt-20 xl:items-start items-end'>
          <div className='xl:hidden block sticky top-28 right-0 z-40'>
            <div onClick={() => setOpenFilter(true)} className='shadow-lg border border-gray-300 bg-white rounded-md flex items-center gap-4 px-4 py-3 cursor-pointer'>
              <p className='text-sm'>Filter</p>
              <MdFilterList />
            </div>
            <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
          </div>
          <div className='flex-1 xl:block hidden sticky top-28 left-0'>
            <div className='mb-7'>
              <label htmlFor='search' className='text-sm font-medium'>Search</label>
              <input type='text' id='search' name='search' placeholder='Title' autoComplete='off' className='outline-none border border-gray-400 w-full p-3 rounded-lg text-sm mt-3' />
            </div>
            <div className='mb-7'>
              <label htmlFor='category' className='text-sm font-medium'>Category</label>
              <div className='mt-5 flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Education Support</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Healthh & Wellbeing</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Environmental Protection</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Poverty Relief</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Animal Welfare</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Disaster Aid</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='checkbox' />
                  <label htmlFor='educationSupport' className='text-sm'>Other</label>
                </div>
              </div>
            </div>
            <div className='mb-7'>
              <p className='text-sm font-medium'>Sort by Date</p>
              <div className='flex items-center gap-5 mt-4'>
                <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-sm hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>A-Z (Ascending)</button>
                <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-sm hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>Z-A (Descending)</button>
              </div>
            </div>
            <div className='mb-7'>
              <p className='text-sm font-medium'>Sort by Total Funds Raised</p>
              <div className='flex items-center gap-5 mt-4'>
                <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-sm hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>A-Z (Ascending)</button>
                <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-sm hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>Z-A (Descending)</button>
              </div>
            </div>
          </div>
          <div className='flex-[3] flex flex-col items-center gap-10 w-full'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-5 gap-10 w-full'>
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
              <FundraiserCard
                title='Fundariser Title Will Goes Here'
                description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                goals={100000}
                collectedFund={20000}
                donatorCount={40500}
                image=''
              />
            </div>
            <button className='bg-secondary text-white font-semibold text-sm rounded-full px-6 py-3 hover:bg-primary transition'>Load More</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Fundraiser