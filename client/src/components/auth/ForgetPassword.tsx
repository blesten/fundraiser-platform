import { FormSubmitted } from './../../utils/interface'
import { useState } from 'react'
import { AuthType } from './../general/Navbar'
import Button from './../general/Button'

interface IProps {
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
}

const ForgetPassword = ({ setAuthScreen }: IProps) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormSubmitted) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex items-center justify-center gap-4 bg-primary rounded-lg py-3 px-6'>
        <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-5 pointer-events-none' />
        <h1 className='quicksand font-semibold text-white'>Charity Quest</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full'>
        <h1 className='text-center font-semibold text-2xl mb-7'>Forget Password</h1>
        <div className='mb-6'>
          <label htmlFor='email' className='text-sm'>Email</label>
          <input autoComplete='off' type='text' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} className='outline-none border border-gray-300 rounded-lg w-full px-3 py-3 mt-3 text-sm' />
        </div>
        <Button className='bg-secondary hover:bg-primary transition py-3 text-white w-full outline-none' content='Sign In' onClick={() => handleSubmit} />
        <p className='text-xs text-center mt-3 text-gray-400  '>Already have an account? Click <span onClick={() => setAuthScreen(AuthType.SignIn.toString())} className='cursor-pointer text-blue-500 underline'>here</span></p>
      </form>
    </>
  )
}

export default ForgetPassword