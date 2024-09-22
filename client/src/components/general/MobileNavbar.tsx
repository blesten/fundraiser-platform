import { useEffect, useRef, useState } from 'react'
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillKeyFill } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { AuthType } from './Navbar'
import { FiEdit } from 'react-icons/fi'
import useStore from './../../store/store'
import NavLink from '../navbar/NavLink'
import Button from './Button'
import { getDataAPI } from '../../utils/fetchData'

interface IProps {
  openMobileNavbar: boolean
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
  setOpenMyDonation: React.Dispatch<React.SetStateAction<boolean>>
  setOpenMyProfile: React.Dispatch<React.SetStateAction<boolean>>
  setOpenChangePassword: React.Dispatch<React.SetStateAction<boolean>>
  setOpenSwitchToFundraiser: React.Dispatch<React.SetStateAction<boolean>>
  setOpenSignOut: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavbar = ({ openMobileNavbar, setOpenMobileNavbar, setAuthScreen, setOpenMyDonation, setOpenMyProfile, setOpenChangePassword, setOpenSwitchToFundraiser, setOpenSignOut }: IProps) => {
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false)

  const mobileNavbarRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const mobileProfileDropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { pathname } = useLocation()

  const { userState, initiate } = useStore()

  const navigate = useNavigate()

  const handleSwitchAccount = async() => {
    try {
      const res = await getDataAPI('fundraiser', userState.data.accessToken)

      if (Object.keys(res.data.fundraiser).length < 1) {
        setOpenSwitchToFundraiser(true)
      } else if (res.data.fundraiser.status === 'in_review' || res.data.fundraiser.status === 'rejected') {
        if (res.data.fundraiser.status === 'in_review') {
          initiate('Fundraiser account status is still in review', 'warning')
        } else {
          initiate('Fundraiser account status is rejected', 'error')
        }
      } else {
        navigate('/dashboard')
      }
    } catch (err: any) {
      initiate(err.response.data.msg, 'error')
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openMobileNavbar && mobileNavbarRef.current && !mobileNavbarRef.current.contains(e.target as Node)) {
        setOpenMobileNavbar(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openMobileNavbar, setOpenMobileNavbar])

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openProfileDropdown && mobileProfileDropdownRef.current && !mobileProfileDropdownRef.current.contains(e.target as Node)) {
        setOpenProfileDropdown(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openProfileDropdown])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 bg-[rgba(0,0,0,.8)] transition ${openMobileNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={mobileNavbarRef} className={`absolute top-0 right-0 bg-white h-screen w-[250px] transition origin-right ${openMobileNavbar ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} p-7`}>
        <div className='flex items-center justify-end'>
          <AiOutlineClose onClick={() => setOpenMobileNavbar(false)} className='cursor-pointer' />
        </div>
        <div className='mt-10 flex flex-col gap-10'>
          <NavLink to='/' content='Home' active={pathname === '/' ? true : false} />
          <NavLink to='/fundraiser' content='Donate Now' active={pathname === '/fundraiser' ? true : false} />
        </div>
        <div className='mt-10'>
          {
            userState.data.accessToken
            ? (
              <>
                <div ref={mobileProfileDropdownRef} className='relative'>
                  <div onClick={() => setOpenProfileDropdown(!openProfileDropdown)} className='flex items-center gap-3 cursor-pointer'>
                    <div className='bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center'>
                      {
                        userState.data.user?.avatar
                        ? <img src={userState.data.user.avatar} alt='Charity Quest' className='w-full h-full border border-gray-300 rounded-full' />
                        : <p className='font-medium text-lg'>{`${userState.data.user?.name.split(' ')[0][0]}${userState.data.user?.name.split(' ')[userState.data.user?.name.split(' ').length - 1][0]}`}</p>
                      }
                    </div>
                    <p className='font-medium'>{userState.data.user?.name}</p>
                  </div>
                  <div className={`absolute w-[300px] rounded-lg shadow-lg p-5 top-full right-0 mt-3 border border-gray-300 bg-white z-50 ${openProfileDropdown ? 'scale-y-100 pointer-events-auto opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'} origin-top transition`}>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div className='bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center'>
                          {
                            userState.data.user?.avatar
                            ? <img src={userState.data.user.avatar} alt='Charity Quest' className='w-full h-full border border-gray-300 rounded-full' />
                            : <p className='font-medium text-lg'>{`${userState.data.user?.name.split(' ')[0][0]}${userState.data.user?.name.split(' ')[userState.data.user?.name.split(' ').length - 1][0]}`}</p>
                          }
                        </div>
                        <div>
                          <h1 className='font-semibold'>{userState.data.user?.name}</h1>
                          <p className='text-gray-500 font-medium text-xs mt-1'>{userState.data.user?.email}</p>
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
                      <div onClick={handleSwitchAccount} className='flex items-center gap-5 cursor-pointer w-fit'>
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
              </>
            )
            : <Button className='w-full bg-secondary hover:bg-primary transition text-white px-5 py-2' content='Sign In' onClick={() => {setAuthScreen(AuthType.SignIn.toString())}} />
          }
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar