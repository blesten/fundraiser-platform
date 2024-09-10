import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Authentication from './../auth/Authentication'
import NavLink from './../navbar/NavLink'
import Button from './Button'

export enum AuthType {
  SignIn,
  SignUp,
  ForgetPassword
}

const Navbar = () => {
  const [authScreen, setAuthScreen] = useState('')

  const { pathname } = useLocation()

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-8' />
          <h1 className='quicksand text-secondary font-bold text-lg'>Charity Quest</h1>
        </div>
        <div className='flex items-center gap-7 text-sm flex-1 justify-center'>
          <NavLink to='/' content='Home' active={pathname === '/' ? true : false} />
          <div className='w-1 h-1 rounded-full bg-black' />
          <NavLink to='/' content='About Us' active={false} />
          <div className='w-1 h-1 rounded-full bg-black' />
          <NavLink to='/' content='Donate Now' active={pathname === '/fundraiser' ? true : false} />
        </div>
        <Button className='bg-secondary hover:bg-primary transition text-white px-5 py-2' content='Sign In' onClick={() => {setAuthScreen(AuthType.SignIn.toString())}} />
      </div>

      <Authentication
        authScreen={authScreen}
        setAuthScreen={setAuthScreen}
      />
    </>
  )
}

export default Navbar