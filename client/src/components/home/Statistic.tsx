import { useNavigate } from 'react-router-dom'
import Button from './../general/Button'

const Statistic = () => {
  const navigate = useNavigate()

  return (
    <div className='md:mt-32 mt-24 relative'>
      <img src={`${process.env.PUBLIC_URL}/images/statistics/first.png`} alt='Charity Quest' className='sm:block hidden absolute xl:left-7 lg:-left-9 left-7 top-8 pointer-events-none w-[10vw]' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/second.png`} alt='Charity Quest' className='sm:block hidden absolute xl:left-40 left-24 md:top-80 top-72 pointer-events-none w-[10vw]' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/third.png`} alt='Charity Quest' className='sm:block hidden absolute xl:right-10 lg:-right-12 sm:right-5 right-2 top-2 pointer-events-none w-[10vw]' />
      <img src={`${process.env.PUBLIC_URL}/images/statistics/fourth.png`} alt='Charity Quest' className='sm:block hidden absolute xl:right-40 right-20 md:top-72 top-64 pointer-events-none w-[10vw]' />
      <div className='flex flex-col gap-6 lg:text-5xl md:text-3xl text-2xl items-center justify-center'>
        <h1 className='text-center leading-relaxed sm:block hidden'>Join Us to Make a Difference</h1>
        <h1 className='text-center leading-relaxed sm:block hidden'>and Shape the Future Together</h1>
        <h1 className='text-center leading-relaxed sm:hidden block'>Join Us to Make a Difference and Shape the Future Together</h1>
      </div>
      <p className='poltawski md:text-9xl text-7xl md:mt-20 mt-10 text-center font-medium'>112,898</p>
      <p className='md:mt-20 mt-10 text-center text-xl'>people already join</p>
      <div className='flex items-center justify-center mt-10'>
        <Button className='bg-secondary text-white py-3 px-6 font-medium hover:bg-primary transition' content='Donate Now' onClick={() => {navigate('/fundraiser')}} />
      </div>
    </div>
  )
}

export default Statistic