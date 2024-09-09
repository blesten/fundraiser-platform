import Button from "../general/Button"

const Statistic = () => {
  return (
    <div className='mt-32 relative'>
      <img src={`${process.env.PUBLIC_URL}/images/statistics/first.png`} alt='Charity Quest' className='absolute left-7 top-8 pointer-events-none w-36' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/second.png`} alt='Charity Quest' className='absolute left-40 top-80 pointer-events-none w-36' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/third.png`} alt='Charity Quest' className='absolute right-10 top-2 pointer-events-none w-36' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/fourth.png`} alt='Charity Quest' className='absolute right-40 top-72 pointer-events-none w-36' />
      <div className='flex flex-col gap-8 text-5xl items-center justify-center'>
        <h1>Join Us to Make a Difference</h1>
        <h1>and Shape the Future Together</h1>
      </div>
      <p className='poltawski text-9xl mt-20 text-center font-medium'>112,898</p>
      <p className='mt-20 text-center text-xl'>people already join</p>
      <div className='flex items-center justify-center mt-10'>
        <Button className='bg-secondary text-white py-3 px-6 font-medium hover:bg-primary transition' content='Yes, sign me up' onClick={() => {}} />
      </div>
    </div>
  )
}

export default Statistic