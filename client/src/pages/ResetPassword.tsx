import { FormChanged, FormSubmitted } from './../utils/interface'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import HeadInfo from './../utils/HeadInfo'
import Button from './../components/general/Button'

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirmation: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

  const handleChange = (e: FormChanged) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormSubmitted) => {
    e.preventDefault()
  }

  return (
    <>
      <HeadInfo title='Reset Password' />

      <div className='flex h-screen'>
        <div className='flex-1 flex flex-col p-12'>
          <div className='flex items-center gap-4'>
            <img src={`${process.env.PUBLIC_URL}/images/logo/colored-logo.svg`} alt='Charity Quest' className='w-8 pointer-events-none' />
            <h1 className='quicksand text-secondary font-bold text-lg'>Charity Quest</h1>
          </div>
          <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-3xl font-medium'>Reset Password</h1>
            <p className='text-sm text-gray-500 mt-3'>Reset password for stxxxxxxts@gmail.com</p>
            <form onSubmit={handleSubmit} className='mt-10'>
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
              </div>
              <div className='mb-10'>
                <label htmlFor='passwordConfirmation' className='text-sm'>Password Confirmation</label>
                <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
                  <input type={`${showPasswordConfirmation ? 'text' : 'password'}`} id='passwordConfirmation' name='passwordConfirmation' value={formData.passwordConfirmation} onChange={handleChange} className='outline-none flex-1 text-sm' />
                  {
                    showPasswordConfirmation
                    ? <FaEyeSlash onClick={() => setShowPasswordConfirmation(false)} className='text-gray-400 cursor-pointer' />
                    : <FaEye onClick={() => setShowPasswordConfirmation(true)} className='text-gray-400 cursor-pointer' />
                  }
                </div>
              </div>
              <Button className='bg-secondary hover:bg-primary transition py-3 text-white w-full outline-none' content='Reset Password' onClick={() => handleSubmit} />
            </form>
          </div>
        </div>
        <div className='flex-[2] bg-primary px-12 pt-12 pb-6 flex flex-col justify-between relative'>
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-96 absolute top-2 right-2 pointer-events-none' />
          <img src={`${process.env.PUBLIC_URL}/images/reset-password/graphic.svg`} alt='Charity Quest' className='w-96 absolute bottom-2 left-2 rotate-180 pointer-events-none' />
          <div className='flex items-center gap-4'>
            <img src={`${process.env.PUBLIC_URL}/images/logo/white-logo.svg`} alt='Charity Quest' className='w-8 pointer-events-none' />
            <h1 className='quicksand text-white font-bold text-lg'>Charity Quest</h1>
          </div>
          <div className='text-center flex flex-col gap-7 font-medium text-4xl text-white'>
            <h1>Where generosity meets</h1>
            <h1>opportunity for lasting impact</h1>
          </div>
          <div className='flex justify-center mt-7'>
            <img src={`${process.env.PUBLIC_URL}/images/reset-password/content.svg`} alt='Charity Quest' className='z-10 w-[52vw] pointer-events-none' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword