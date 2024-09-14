import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import NavLink from '../navbar/NavLink'
import Button from './Button'
import { AuthType } from './Navbar'

interface IProps {
  openMobileNavbar: boolean
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
}

const MobileNavbar = ({ openMobileNavbar, setOpenMobileNavbar, setAuthScreen }: IProps) => {
  const mobileNavbarRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { pathname } = useLocation()

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openMobileNavbar && mobileNavbarRef.current && !mobileNavbarRef.current.contains(e.target as Node)) {
        setOpenMobileNavbar(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openMobileNavbar, setOpenMobileNavbar])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-30 bg-[rgba(0,0,0,.8)] transition ${openMobileNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={mobileNavbarRef} className={`absolute top-0 right-0 bg-white h-screen w-[250px] transition origin-right ${openMobileNavbar ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} p-7`}>
        <div className='flex items-center justify-end'>
          <AiOutlineClose onClick={() => setOpenMobileNavbar(false)} className='cursor-pointer' />
        </div>
        <div className='mt-10 flex flex-col gap-10'>
          <NavLink to='/' content='Home' active={pathname === '/' ? true : false} />
          <NavLink to='/fundraiser' content='Donate Now' active={pathname === '/fundraiser' ? true : false} />
        </div>
        <div className='mt-10'>
          <Button className='w-full bg-secondary hover:bg-primary transition text-white px-5 py-2' content='Sign In' onClick={() => {setAuthScreen(AuthType.SignIn.toString())}} />
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar