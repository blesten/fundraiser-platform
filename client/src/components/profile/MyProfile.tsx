import { useState, useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosCamera } from 'react-icons/io'
import { FormChanged } from '../../utils/interface'
import { HiUser } from 'react-icons/hi'
import Button from '../general/Button'

interface IProps {
  openMyProfile: boolean
  setOpenMyProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const MyProfile = ({ openMyProfile, setOpenMyProfile }: IProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState<File[]>([])

  const myProfileRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleChangeImage = (e: FormChanged) => {
    const target = e.target as HTMLInputElement
    const files = [...Object.values(target.files!)]
    setAvatar([...files])
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openMyProfile && myProfileRef.current && !myProfileRef.current.contains(e.target as Node)) {
        setOpenMyProfile(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openMyProfile, setOpenMyProfile])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] flex items-center justify-center ${openMyProfile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition z-50 md:p-0 p-10`}>
      <div ref={myProfileRef} className={`lg:w-1/3 md:w-1/2 w-full bg-white rounded-xl ${openMyProfile ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-20 pointer-events-none'} delay-150 transition`}>
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
          <div className='flex items-center gap-4'>
            <HiUser className='text-secondary text-xl' />
            <h1 className='font-medium'>My Profile</h1>
          </div>
          <AiOutlineClose onClick={() => setOpenMyProfile(false)} className='text-gray-500 cursor-pointer' />
        </div>
        <form className='px-6 py-5'>
          <div className='flex items-center justify-center mb-5'>
            <div className='rounded-full bg-secondary text-white w-16 h-16 flex items-center justify-center font-medium text-2xl cursor-pointer relative group'>
              {
                avatar.length !== 0
                ? <img src={URL.createObjectURL(avatar[0])} alt='Charity Quest' className='rounded-full w-full h-full object-cover border bg-white border-gray-400' />
                : <p>JD</p>
              }
              <div onClick={() => fileInputRef.current.click()} className='absolute top-0 left-0 rounded-full bg-gray-300 w-full h-full flex items-center justify-center text-gray-500 text-4xl group-hover:opacity-100 opacity-0 transition border border-gray-400'>
                <IoIosCamera />
                <input ref={fileInputRef} onChange={handleChangeImage} type='file' className='hidden' multiple={false} accept='image/*' />
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <label htmlFor='name' className='text-sm font-medium'>Name</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)} className='outline-none border border-gray-300 rounded-lg px-3 py-3 text-sm w-full mt-3' autoComplete='off' />
          </div>
          <div className='mb-7'>
            <label htmlFor='email' className='text-sm font-medium'>Email</label>
            <input type='text' value={email} className='outline-none border border-gray-300 rounded-lg bg-gray-100 px-3 py-3 text-sm w-full mt-3 cursor-not-allowed' readOnly autoComplete='off' />
          </div>
          <Button className='text-white bg-secondary w-full py-3 hover:bg-primary transition' content='Save Changes' onClick={() => {}} />
        </form>
      </div>
    </div>
  )
}

export default MyProfile