const Start = () => {
  return (
    <div className='mt-28 bg-primary rounded-2xl py-12 px-32'>
      <div className='flex items-center justify-center flex-col gap-4 text-3xl text-white'>
        <h1>Start your Donation Journey</h1>
        <h1>with <span className='quicksand font-bold'>Charity Quest</span></h1>
      </div>
      <div className='flex items-center justify-between gap-8 mt-12'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-72 h-72'>
            <img src={`${process.env.PUBLIC_URL}/images/start/sign-up.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium'>Sign Up</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-72 h-72'>
            <img src={`${process.env.PUBLIC_URL}/images/start/fundraiser.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium'>Select Fundraiser</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
        <div className='w-72 h-72'>
            <img src={`${process.env.PUBLIC_URL}/images/start/donation.svg`} alt='Charity Quest' className='w-full h-full' />
          </div>
          <p className='text-lg text-white font-medium'>Start Donation</p>
        </div>
      </div>
    </div>
  )
}

export default Start