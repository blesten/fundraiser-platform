import FundraiserCard from './../../components/general/FundraiserCard'
import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'

const Fundraiser = () => {
  return (
    <>
      <HeadInfo title='Fundraiser' />

      <div className='px-24 py-7'>
        <Navbar />
        {/* <div className='w-full h-[200px] bg-primary mt-14 relative flex items-center justify-center'>
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-60 top-2 right-2 absolute' />
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-60 bottom-2 left-2 absolute rotate-180' />
          <div className='text-center text-white text-3xl'>
            <h1>Where generosity meets</h1>
            <h1 className='mt-4'>opportunity for lasting impact</h1>
          </div>
        </div> */}
        <div className='w-full flex gap-14 mt-12 items-start'>
          <div className='flex-1'>
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
          <div className='flex-[3] flex flex-col items-center gap-10'>
            <div className='grid grid-cols-3 gap-5'>
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
      </div>
    </>
  )
}

export default Fundraiser