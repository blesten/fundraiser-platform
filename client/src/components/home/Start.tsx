const Start = () => {
  return (
    <div className='sm:mt-28 mt-16 bg-primary rounded-2xl py-12 xl:px-32 px-10'>
      <div className='md:flex hidden items-center justify-center flex-col gap-4 text-3xl text-white'>
        <h1 className='text-center'>Start your Donation Journey</h1>
        <h1>with <span className='quicksand font-bold'>Charity Quest</span></h1>
      </div>
      <h1 className='md:hidden block text-3xl text-white text-center leading-relaxed'>Start your Donation Journey with <span className='quicksand font-bold'>Charity Quest</span></h1>
      <div className='flex md:flex-row flex-col items-center justify-between md:gap-8 gap-16 mt-12'>
        <div className='flex flex-col items-center gap-4'>
          <div className='xl:w-72 xl:h-72 lg:w-52 lg:h-52 md:w-40 md:h-40'>
            <img src={`${process.env.PUBLIC_URL}/images/start/sign-up.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium text-center'>Sign Up</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='xl:w-72 xl:h-72 lg:w-52 lg:h-52 md:w-40 md:h-40'>
            <img src={`${process.env.PUBLIC_URL}/images/start/fundraiser.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium text-center'>Select Fundraiser</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
        <div className='xl:w-72 xl:h-72 lg:w-52 lg:h-52 md:w-40 md:h-40'>
            <img src={`${process.env.PUBLIC_URL}/images/start/donation.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium text-center'>Start Donation</p>
        </div>
      </div>
    </div>
  )
}

export default Start