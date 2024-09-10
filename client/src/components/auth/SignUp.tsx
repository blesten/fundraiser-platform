import { FormChanged, FormSubmitted } from './../../utils/interface'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { AuthType } from './../general/Navbar'
import Button from './../general/Button'

interface IProps {
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
}

const SignUp = ({ setAuthScreen }: IProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: FormChanged) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormSubmitted) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex items-center justify-center gap-4 bg-primary rounded-lg py-3 px-6'>
        <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-5' />
        <h1 className='quicksand font-semibold text-white'>Charity Quest</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full'>
        <h1 className='text-center font-semibold text-2xl mb-7'>Sign Up</h1>
        <div className='mb-6'>
          <label htmlFor='name' className='text-sm'>Name</label>
          <input autoComplete='off' type='text' id='name' name='name' value={formData.name} onChange={handleChange} className='outline-none border border-gray-300 rounded-lg w-full px-3 py-3 mt-3 text-sm' />
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='text-sm'>Email</label>
          <input autoComplete='off' type='text' id='email' name='email' value={formData.email} onChange={handleChange} className='outline-none border border-gray-300 rounded-lg w-full px-3 py-3 mt-3 text-sm' />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='text-sm'>Password</label>
          <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
            <input type={`${showPassword ? 'text' : 'password'}`} id='password' name='password' value={formData.password} onChange={handleChange} className='outline-none flex-1 text-sm' />
            {
              showPassword
              ? <FaEyeSlash onClick={() => setShowPassword(false)} className='text-gray-400 cursor-pointer' />
              : <FaEye onClick={() => setShowPassword(true)} className='text-gray-400 cursor-pointer' />
            }
          </div>
        </div>
        <Button className='bg-secondary hover:bg-primary transition py-3 text-white w-full outline-none' content='Sign Up' onClick={() => handleSubmit} />
        <p className='text-xs text-center mt-3 text-gray-400  '>Already have an account? Click <span onClick={() => setAuthScreen(AuthType.SignIn.toString())} className='cursor-pointer text-blue-500 underline'>here</span></p>
      </form>
    </>
  )
}

export default SignUp