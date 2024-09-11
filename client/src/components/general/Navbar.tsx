import { useState, useEffect, useRef } from 'react'
import { FaHandHoldingHeart, FaHeart } from 'react-icons/fa'
import { BsFillKeyFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import Authentication from './../auth/Authentication'
import NavLink from './../navbar/NavLink'
import Button from './Button'
import MyDonation from '../profile/MyDonation'

export enum AuthType {
  SignIn,
  SignUp,
  ForgetPassword
}

const Navbar = () => {
  const [openMyDonation, setOpenMyDonation] = useState(false)
  
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false)
  const [authScreen, setAuthScreen] = useState('')

  const { pathname } = useLocation()

  const profileDropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>

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
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-8 pointer-events-none' />
          <h1 className='quicksand text-secondary font-bold text-lg'>Charity Quest</h1>
        </div>
        <div className='flex items-center gap-7 text-sm flex-1 justify-center'>
          <NavLink to='/' content='Home' active={pathname === '/' ? true : false} />
          <div className='w-1 h-1 rounded-full bg-black' />
          <NavLink to='/' content='About Us' active={false} />
          <div className='w-1 h-1 rounded-full bg-black' />
          <NavLink to='/' content='Donate Now' active={pathname === '/fundraiser' ? true : false} />
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
              <FiEdit className='text-orange-500 text-lg' />
            </div>
            <div className='w-full h-[1px] bg-gray-300 my-5' />
            <div className='flex flex-col gap-4'>
              <div onClick={() => setOpenMyDonation(true)} className='flex items-center gap-5 cursor-pointer w-fit'>
                <FaHeart className='text-gray-500' />
                <p className='text-gray-500 font-medium text-sm'>My Donation</p>
              </div>
              <div className='flex items-center gap-5 cursor-pointer w-fit'>
                <FaHandHoldingHeart className='text-gray-500' />
                <p className='text-gray-500 font-medium text-sm'>Switch to Fundariser Account</p>
              </div>
              <div className='flex items-center gap-5 cursor-pointer w-fit'>
                <BsFillKeyFill className='text-gray-500' />
                <p className='text-gray-500 font-medium text-sm'>Change Password</p>
              </div>
            </div>
            <div className='w-full h-[1px] bg-gray-300 my-5' />
            <div className='flex items-center gap-5 cursor-pointer w-fit'>
              <MdLogout className='text-gray-500' />
              <p className='text-gray-500 font-medium text-sm'>Logout</p>
            </div>
          </div>
        </div>
        {/* <Button className='bg-secondary hover:bg-primary transition text-white px-5 py-2' content='Sign In' onClick={() => {setAuthScreen(AuthType.SignIn.toString())}} /> */}
      </div>

      <Authentication
        authScreen={authScreen}
        setAuthScreen={setAuthScreen}
      />

      <MyDonation
        openMyDonation={openMyDonation}
        setOpenMyDonation={setOpenMyDonation}
      />
    </>
  )
}

export default Navbar