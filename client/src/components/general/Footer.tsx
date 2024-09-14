import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20 rounded-xl bg-primary sm:px-10 px-5 py-8'>
      <div className='flex gap-16 sm:flex-row flex-col'>
        <div className='flex-1'>
          <div className='flex items-center gap-5'> 
            <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-7' />
            <h1 className='quicksand font-semibold text-white text-xl'>Charity Quest</h1>
          </div>
          <p className='text-gray-200 mt-6 leading-relaxed'>Together, We Make a Difference</p>
        </div>
        <div className='flex gap-16'>
          <div className='flex flex-col gap-5'>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>Donate</Link>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>Careers</Link>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>Internship</Link>
          </div>
          <div className='flex flex-col gap-5 sm:items-end items-start'>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>Instagram</Link>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>WhatsApp</Link>
            <Link to='/fundraiser' className='text-white hover:underline outline-none'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-between items-center sm:flex-row flex-col-reverse'>
        <p className='leading-relaxed sm:mt-0 mt-5 text-center text-gray-400 text-xs'>&copy; 2024 Copyright. Byte Craft Studio Sample Project.</p>
        <Link to='/fundraiser' className='bg-white py-3 px-6 rounded-full flex items-center justify-center gap-3 group hover:bg-secondary transition sm:w-auto w-full'>
          <p className='text-secondary font-semibold group-hover:text-white transition'>Donate Now</p>
          <div className='w-8 h-8 bg-secondary group-hover:bg-white group-hover:text-secondary transition text-white flex items-center justify-center rounded-full'>
            <MdArrowOutward className='text-xl' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer