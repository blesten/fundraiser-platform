import FundraiserCard from './../general/FundraiserCard'

const Highlight = () => {
  return (
    <div className='mt-20'>
      <h1 className='font-semibold text-2xl'>Fundraisers in Need</h1>
      <div className='mt-8 grid grid-cols-4 gap-10'>
        <FundraiserCard
          image=''
          title='Help Turkiye and Syria Earthquake Relief Fund'
          description='Since 2006, SOIL has been working in urban country with several of impact'
          collectedFund={45000}
          goals={100000}
          donatorCount={10580}
        />
        <FundraiserCard
          image=''
          title='Help Turkiye and Syria Earthquake Relief Fund'
          description='Since 2006, SOIL has been working in urban country with several of impact'
          collectedFund={45000}
          goals={100000}
          donatorCount={10580}
        />
        <FundraiserCard
          image=''
          title='Help Turkiye and Syria Earthquake Relief Fund'
          description='Since 2006, SOIL has been working in urban country with several of impact'
          collectedFund={45000}
          goals={100000}
          donatorCount={10580}
        />
        <FundraiserCard
          image=''
          title='Help Turkiye and Syria Earthquake Relief Fund'
          description='Since 2006, SOIL has been working in urban country with several of impact'
          collectedFund={45000}
          goals={100000}
          donatorCount={10580}
        />
      </div>
    </div>
  )
}

export default Highlight