import { FormChanged, FormSubmitted } from './../../utils/interface'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { AuthType } from './../general/Navbar'
import Button from './../general/Button'
import Loader from '../general/Loader'
import useStore from './../../store/store'

interface IProps {
  setAuthScreen: React.Dispatch<React.SetStateAction<string>>
}

const SignIn = ({ setAuthScreen }: IProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { login } = useStore()

  const handleChange = (e: FormChanged) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async(e: FormSubmitted) => {
    setLoading(true)
    e.preventDefault()
    await login(formData)
    setAuthScreen('')
    setLoading(false)
  }
  
  return (
    <>
      <div className='flex items-center justify-center gap-4 bg-primary rounded-lg py-3 px-6'>
        <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-5 pointer-events-none' />
        <h1 className='quicksand font-semibold text-white'>Charity Quest</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full'>
        <h1 className='text-center font-semibold text-2xl mb-7'>Sign In</h1>
        <div className='mb-6'>
          <label htmlFor='email' className='text-sm'>Email</label>
          <input autoComplete='off' type='text' id='email' name='email' value={formData.email} onChange={handleChange} className='outline-none border border-gray-300 rounded-lg w-full px-3 py-3 mt-3 text-sm' />
        </div>
        <div className='mb-7'>
          <label htmlFor='password' className='text-sm'>Password</label>
          <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
            <input type={`${showPassword ? 'text' : 'password'}`} id='password' name='password' value={formData.password} onChange={handleChange} className='outline-none flex-1 text-sm' />
            {
              showPassword
              ? <FaEyeSlash onClick={() => setShowPassword(false)} className='text-gray-400 cursor-pointer' />
              : <FaEye onClick={() => setShowPassword(true)} className='text-gray-400 cursor-pointer' />
            }
          </div>
          <p onClick={() => setAuthScreen(AuthType.ForgetPassword.toString())} className='text-blue-500 underline text-xs text-right mt-2 cursor-pointer'>Forget password?</p>
        </div>
        <Button
          disabled={loading || !formData.email || !formData.password}
          className={`${loading || !formData.email || !formData.password ? 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed' : 'bg-secondary hover:bg-primary cursor-pointer'} transition py-3 text-white w-full outline-none`}
          content={loading ? <Loader /> : 'Sign In'}
          onClick={() => handleSubmit}
        />
        <p className='text-xs text-center mt-3 text-gray-400  '>Don&apos;t have an account yet? Click <span onClick={() => setAuthScreen(AuthType.SignUp.toString())} className='cursor-pointer text-blue-500 underline'>here</span></p>
      </form>
    </>
  )
}

export default SignIn