import { BsFillBalloonHeartFill } from 'react-icons/bs'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'
import Button from '../general/Button'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='mt-24'>
      <div className='flex flex-col items-center gap-10'>
        <div className='text-center flex flex-col gap-8 font-medium lg:text-5xl text-3xl'>
          <h1 className='sm:block hidden'>Where generosity meets</h1>
          <h1 className='sm:block hidden'>opportunity for lasting impact</h1>
          <h1 className='sm:hidden block leading-relaxed'>Where generosity meets opportunity for lating impact</h1>
        </div>
        <Button className='bg-secondary hover:bg-primary transition text-white px-6 py-3' content='Donate Now' onClick={() => navigate('/fundraiser')} />
      </div>
      <div className='sm:grid hidden lg:grid-cols-5 grid-cols-3 gap-10 -mt-6 items-end'>
        <div className='h-[375px] flex flex-col gap-5'>
          <div className='flex-[2] bg-gray-100 rounded-xl relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[ ] after:bg-gradient-to-t after:from-[#376145] after:to-[rgba(0,0,0,.3)] after:rounded-xl'>
            <img src={`${process.env.PUBLIC_URL}/images/banner/first.png`} alt='Charity Quest' className='w-full h-full object-cover rounded-xl' />
            <p className='absolute top-full xl:-mt-20 -mt-16 z-10 xl:left-6 left-4 xl:text-xl text-white font-medium leading-relaxed'>Fight global <br /> hunger with us</p>
          </div>
          <div className='flex-1 bg-[#282828] rounded-xl flex items-center justify-between gap-3 px-5 lg:py-0 md:py-3 py-1'>
            <BsFillBalloonHeartFill className='text-white text-7xl' />
            <p className='font-medium text-white text-lg leading-relaxed'>Give Hope Spread Love</p>
          </div>
        </div>
        <div className='lg:block hidden h-[295px] bg-gray-100 rounded-xl relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[ ] after:bg-gradient-to-t after:from-[#376145] after:to-[rgba(0,0,0,.3)] after:rounded-xl'>
          <img src={`${process.env.PUBLIC_URL}/images/banner/second.png`} alt='Charity Quest' className='w-full h-full object-cover rounded-xl' />
          <p className='absolute top-full -mt-20 z-10 xl:left-6 left-4 xl:text-xl text-white font-medium leading-relaxed'>1 in 9 people <br /> face hunger daily</p>
        </div>
        <div className='h-[175px] bg-[#C0DCCA] rounded-xl flex flex-col xl:p-5 p-3 items-center justify-center gap-5'>
          <p className='leading-relaxed font-medium xl:text-xl text-center'>Collaborate with <br /> Our Community</p>
          <Link to='/fundraiser' className='w-full bg-[#F1F1F1] rounded-full py-3 flex items-center justify-between xl:px-5 px-3'>
            <p className='font-medium xl:text-lg'>Donate</p>
            <div className='xl:w-8 xl:h-8 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0'>
              <MdArrowOutward className='xl:text-2xl' />
            </div>
          </Link>
        </div>
        <div className='lg:block hidden h-[295px] bg-gray-100 rounded-xl relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[ ] after:bg-gradient-to-t after:from-[#376145] after:to-[rgba(0,0,0,.3)] after:rounded-xl'>
          <img src={`${process.env.PUBLIC_URL}/images/banner/third.png`} alt='Charity Quest' className='w-full h-full object-cover rounded-xl' />
          <p className='absolute top-full xl:-mt-20 -mt-16 z-10 xl:left-6 left-4 xl:text-xl text-white font-medium leading-relaxed'>Every donation <br /> saves lives</p>
        </div>
        <div className='h-[375px] flex flex-col gap-5'>
          <div className='flex-[2] bg-gray-100 rounded-xl relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[ ] after:bg-gradient-to-t after:from-[#376145] after:to-[rgba(0,0,0,.3)] after:rounded-xl'>
            <img src={`${process.env.PUBLIC_URL}/images/banner/fourth.png`} alt='Charity Quest' className='w-full h-full object-cover rounded-xl' />
            <p className='absolute top-full xl:-mt-20 -mt-24 z-10 xl:left-6 left-4 xl:text-xl text-white font-medium leading-relaxed'>Every dollar <br /> supports families</p>
          </div>
          <div className='flex-1 bg-[#282828] rounded-xl flex items-center justify-between gap-5 px-5 lg:py-0 md:py-3 py-1'>
            <FaHandHoldingHeart className='text-white text-7xl' />
            <p className='font-medium text-white text-lg leading-relaxed'>Make Giving Your Legacy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner