import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsKeyFill } from 'react-icons/bs'
import { FormChanged, FormSubmitted } from '../../utils/interface'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../general/Button'

interface IProps {
  openChangePassword: boolean
  setOpenChangePassword: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePassword = ({ openChangePassword, setOpenChangePassword }: IProps) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
    code: ''
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] = useState(false)

  const handleChange = (e: FormChanged) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormSubmitted) => {
    e.preventDefault()
  }

  const changePasswordRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openChangePassword && changePasswordRef.current && !changePasswordRef.current.contains(e.target as Node)) {
        setOpenChangePassword(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openChangePassword, setOpenChangePassword])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] flex items-center justify-center ${openChangePassword ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition z-30`}>
      <div ref={changePasswordRef} className={`w-1/3 bg-white rounded-xl ${openChangePassword ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-20 pointer-events-none'} delay-150 transition`}>
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
          <div className='flex items-center gap-4'>
            <BsKeyFill className='text-orange-500 text-xl' />
            <h1 className='font-medium'>Change Password</h1>
          </div>
          <AiOutlineClose onClick={() => setOpenChangePassword(false)} className='text-gray-500 cursor-pointer' />
        </div>
        <form onSubmit={handleSubmit} className='px-6 py-5'>
          <div className='mb-7'>
            <label htmlFor='currentPassword' className='text-sm'>Current Password</label>
            <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
              <input type={`${showCurrentPassword ? 'text' : 'password'}`} id='currentPassword' name='currentPassword' value={formData.currentPassword} onChange={handleChange} className='outline-none flex-1 text-sm' />
              {
                showCurrentPassword
                ? <FaEyeSlash onClick={() => setShowCurrentPassword(false)} className='text-gray-400 cursor-pointer' />
                : <FaEye onClick={() => setShowCurrentPassword(true)} className='text-gray-400 cursor-pointer' />
              }
            </div>
          </div>
          <div className='mb-7'>
            <label htmlFor='newPassword' className='text-sm'>New Password</label>
            <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
              <input type={`${showNewPassword ? 'text' : 'password'}`} id='newPassword' name='newPassword' value={formData.newPassword} onChange={handleChange} className='outline-none flex-1 text-sm' />
              {
                showNewPassword
                ? <FaEyeSlash onClick={() => setShowNewPassword(false)} className='text-gray-400 cursor-pointer' />
                : <FaEye onClick={() => setShowNewPassword(true)} className='text-gray-400 cursor-pointer' />
              }
            </div>
          </div>
          <div className='mb-7'>
            <label htmlFor='newPasswordConfirmation' className='text-sm'>New Password Confirmation</label>
            <div className='mt-3 border border-gray-300 rounded-lg w-full px-3 py-3 flex items-center gap-3'>
              <input type={`${showNewPasswordConfirmation ? 'text' : 'password'}`} id='newPasswordConfirmation' name='newPasswordConfirmation' value={formData.newPasswordConfirmation} onChange={handleChange} className='outline-none flex-1 text-sm' />
              {
                showNewPasswordConfirmation
                ? <FaEyeSlash onClick={() => setShowNewPasswordConfirmation(false)} className='text-gray-400 cursor-pointer' />
                : <FaEye onClick={() => setShowNewPasswordConfirmation(true)} className='text-gray-400 cursor-pointer' />
              }
            </div>
          </div>
          <div className='mb-7'>
            <div className='flex items-end gap-4'>
              <div className='flex-1'>
                <label htmlFor='code' className='text-sm'>Code</label>
                <input type='text' id='code' name='code' value={formData.code} onChange={handleChange} className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm mt-3' />
              </div>
              <button className='bg-secondary text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary transition outline-none '>Send Code</button>
            </div>
            <p className='text-gray-400 font-medium mt-3 text-xs'>Code has been sent to stxxxxts@gmail.com</p>
          </div>
          <Button className='w-full bg-secondary text-white hover:bg-primary transition py-3' content='Save Changes' onClick={() => {}} />
        </form>
      </div>
    </div>
  )
}

export default ChangePassword