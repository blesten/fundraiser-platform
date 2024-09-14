import { useState, useEffect, useRef } from 'react'
import { FaHandHoldingHeart, FaHeart } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsFillKeyFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import Authentication from './../auth/Authentication'
import NavLink from './../navbar/NavLink'
import Button from './Button'
import MyDonation from '../profile/MyDonation'
import MyProfile from '../profile/MyProfile'
import ChangePassword from '../profile/ChangePassword'
import SignOut from './SignOut'
import SwitchToFundraiser from '../profile/SwitchToFundraiser'
import MobileNavbar from './MobileNavbar'

export enum AuthType {
  SignIn,
  SignUp,
  ForgetPassword
}

const Navbar = () => {
  const [openMyDonation, setOpenMyDonation] = useState(false)
  const [openMyProfile, setOpenMyProfile] = useState(false)
  const [openChangePassword, setOpenChangePassword] = useState(false)
  const [openSwitchToFundraiser, setOpenSwitchToFundraiser] = useState(false)
  const [openSignOut, setOpenSignOut] = useState(false)
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false)

  const [authScreen, setAuthScreen] = useState('')
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false)

  const [isFloating, setIsFloating] = useState(false)

  const { pathname } = useLocation()

  const profileDropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70)
        setIsFloating(true)
      else
        setIsFloating(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className={`fixed top-0 left-0 w-full flex lg:px-24 py-7 px-6 items-center justify-between bg-white z-40 ${isFloating ? 'shadow-lg' : ''}`}>
        <Link to='/' className='flex items-center gap-4 outline-none'>
          <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-8 pointer-events-none' />
          <h1 className='quicksand text-secondary font-bold text-lg'>Charity Quest</h1>
        </Link>
        <div className='md:hidden block'>
          <RxHamburgerMenu onClick={() => setOpenMobileNavbar(true)} className='text-xl cursor-pointer' />
          <MobileNavbar openMobileNavbar={openMobileNavbar} setOpenMobileNavbar={setOpenMobileNavbar} setAuthScreen={setAuthScreen} />
        </div>
        <div className='md:flex hidden items-center justify-between flex-1'>
          <div className='flex items-center gap-7 text-sm flex-1 justify-center'>
            <NavLink to='/' content='Home' active={pathname === '/' ? true : false} />
            <div className='w-1 h-1 rounded-full bg-black' />
            <NavLink to='/fundraiser' content='Donate Now' active={pathname === '/fundraiser' ? true : false} />
          </div>
          <div ref={profileDropdownRef} className='relative'>
            <div onClick={() => setOpenProfileDropdown(!openProfileDropdown)} className='flex items-center gap-3 cursor-pointer'>
              <div className='bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center'>
                <p className='font-medium text-lg'>JD</p>
              </div>
              <p className='font-medium'>John Doe</p>
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
                <div onClick={() => setOpenMyDonation(true)} className='flex items-center gap-5 cursor-pointer w-fit'>
                  <FaHeart className='text-gray-500' />
                  <p className='text-gray-500 font-medium text-sm'>My Donation</p>
                </div>
                <div onClick={() => setOpenSwitchToFundraiser(true)} className='flex items-center gap-5 cursor-pointer w-fit'>
                  <FaHandHoldingHeart className='text-gray-500' />
                  <p className='text-gray-500 font-medium text-sm'>Switch to Fundariser Account</p>
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
          {/* <Button className='bg-secondary hover:bg-primary transition text-white px-5 py-2' content='Sign In' onClick={() => {setAuthScreen(AuthType.SignIn.toString())}} /> */}
        </div>
      </div>

      <Authentication
        authScreen={authScreen}
        setAuthScreen={setAuthScreen}
      />

      <MyDonation
        openMyDonation={openMyDonation}
        setOpenMyDonation={setOpenMyDonation}
      />

      <MyProfile
        openMyProfile={openMyProfile}
        setOpenMyProfile={setOpenMyProfile}
      />

      <ChangePassword
        openChangePassword={openChangePassword}
        setOpenChangePassword={setOpenChangePassword}
      />

      <SwitchToFundraiser
        openSwitchToFundraiser={openSwitchToFundraiser}
        setOpenSwitchToFundraiser={setOpenSwitchToFundraiser}
      />

      <SignOut
        openSignOut={openSignOut}
        setOpenSignOut={setOpenSignOut}
      />
    </>
  )
}

export default Navbar