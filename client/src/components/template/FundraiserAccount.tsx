import { useState, useEffect, useRef, ReactNode } from 'react'
import { FaHandHoldingHeart, FaHeart } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { MdDashboard, MdLogout } from 'react-icons/md'
import { PiBankFill } from 'react-icons/pi'
import { FiEdit } from 'react-icons/fi'
import { BsFillKeyFill } from 'react-icons/bs'
import MyProfile from '../profile/MyProfile'
import ChangePassword from '../profile/ChangePassword'
import SignOut from '../general/SignOut'

interface IProps {
  children: ReactNode
}

const FundraiserAccount = ({ children }: IProps) => {
  const [openMyProfile, setOpenMyProfile] = useState(false)
  const [openChangePassword, setOpenChangePassword] = useState(false)
  const [openSignOut, setOpenSignOut] = useState(false)

  const [openProfileDropdown, setOpenProfileDropdown] = useState(false)
  
  const profileDropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { pathname } = useLocation()

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openProfileDropdown && profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node)) {
        setOpenProfileDropdown(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openProfileDropdown])

  return (
    <>
      <div className='flex h-screen'>
        <div className='fixed bottom-0 left-0 w-full bg-primary md:px-32 px-3 pt-3 pb-1 lg:hidden flex items-center justify-between z-30'>
          <Link to='/dashboard' className={`flex flex-col items-center w-fit hover:text-white hover:font-semibold ${pathname === '/dashboard' ? 'text-white font-semibold' : 'text-gray-400'}`}>
            <MdDashboard className='text-2xl' />
            <p className='mt-2 text-sm'>Dashboard</p>
          </Link>
          <Link to='/charity-program' className={`flex flex-col items-center w-fit hover:text-white hover:font-semibold ${pathname === '/charity-program' ? 'text-white font-semibold' : 'text-gray-400'}`}>
            <FaHandHoldingHeart className='text-2xl' />
            <p className='mt-2 text-sm text-center'>Charity Program</p>
          </Link>
          <Link to='/withdrawal-account' className={`flex flex-col items-center w-fit hover:text-white hover:font-semibold ${pathname === '/withdrawal-account' ? 'text-white font-semibold' : 'text-gray-400'}`}>
            <PiBankFill className='text-2xl' />
            <p className='mt-2 text-sm text-center'>Withdrawal Account</p>
          </Link>
        </div>
        <div className='lg:block hidden flex-1 bg-primary p-7 sticky top-0 left-0'>
          <div className='flex items-center gap-3'>
            <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-6' />
            <h1 className='text-white quicksand font-semibold'>Charity Quest</h1>
          </div>
          <div className='flex flex-col gap-8 mt-12'>
            <Link to='/dashboard' className={`outline-none flex items-center gap-3 w-fit hover:text-white ${pathname === '/dashboard' ? 'text-white font-semibold' : 'text-gray-300'}`}>
              <MdDashboard className='text-xl' />
              <p>Dashboard</p>
            </Link>
            <Link to='/charity-program' className={`outline-none flex items-center gap-3 w-fit hover:text-white ${pathname === '/charity-program' ? 'text-white font-semibold' : 'text-gray-300'}`}>
              <FaHandHoldingHeart className='text-xl' />
              <p>Charity Program</p>
            </Link>
            <Link to='/withdrawal-account' className={`outline-none flex items-center gap-3 w-fit hover:text-white ${pathname === '/withdrawal-account' ? 'text-white font-semibold' : 'text-gray-300'}`}>
              <PiBankFill className='text-xl' />
              <p>Withdrawal Account</p>
            </Link>
          </div>
        </div>
        <div className='flex-[4] flex flex-col'>
          <div className='w-full border-b border-gray-400 bg-white px-10 py-4 flex lg:justify-end justify-between sticky top-0 right-0'>
            <div className='lg:hidden flex items-center gap-4 outline-none'>
              <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-6 pointer-events-none' />
              <h1 className='quicksand text-secondary font-bold'>Charity Quest</h1>
            </div>
            <div ref={profileDropdownRef} className='relative'>
              <div onClick={() => setOpenProfileDropdown(!openProfileDropdown)} className='flex items-center gap-3 cursor-pointer'>
                <div className='bg-secondary text-white w-9 h-9 rounded-full flex items-center justify-center'>
                  <p className='font-medium'>JD</p>
                </div>
                <p className='font-medium text-sm'>John Doe</p>
              </div>
              <div className={`absolute w-[300px] rounded-lg shadow-lg p-5 top-full right-0 mt-3 border border-gray-300 bg-white z-10 ${openProfileDropdown ? 'scale-y-100 pointer-events-auto opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'} origin-top transition`}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center'>
                      <p className='font-medium text-lg'>JD</p>
                    </div>
                    <div>
                      <h1 className='font-semibold'>John Doe</h1>
                      <p className='text-gray-500 font-medium text-xs mt-1'>johndoe@gmail.com</p>
                    </div>
                  </div>
                  <FiEdit onClick={() => setOpenMyProfile(true)} className='text-orange-500 text-lg cursor-pointer' />
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5' />
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-5 cursor-pointer w-fit'>
                    <FaHeart className='text-gray-500' />
                    <p className='text-gray-500 font-medium text-sm'>Switch to Donator Account</p>
                  </div>
                  <div onClick={() => setOpenChangePassword(true)} className='flex items-center gap-5 cursor-pointer w-fit'>
                    <BsFillKeyFill className='text-gray-500' />
                    <p className='text-gray-500 font-medium text-sm'>Change Password</p>
                  </div>
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5' />
                <div onClick={() => setOpenSignOut(true)} className='flex items-center gap-5 cursor-pointer w-fit'>
                  <MdLogout className='text-gray-500' />
                  <p className='text-gray-500 font-medium text-sm'>Logout</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-7 overflow-auto hide-scrollbar flex-1'>
            {children}
          </div>
        </div>
      </div>

      <MyProfile
        openMyProfile={openMyProfile}
        setOpenMyProfile={setOpenMyProfile}
      />

      <ChangePassword
        openChangePassword={openChangePassword}
        setOpenChangePassword={setOpenChangePassword}
      />

      <SignOut
        openSignOut={openSignOut}
        setOpenSignOut={setOpenSignOut}
      />
    </>
  )
}

export default FundraiserAccount