import { useEffect, useRef } from 'react'
import { MdQuestionMark } from 'react-icons/md'
import useStore from './../../store/store'

interface IProps {
  openSignOut: boolean
  setOpenSignOut: React.Dispatch<React.SetStateAction<boolean>>
}

const SignOut = ({ openSignOut, setOpenSignOut }: IProps) => {
  const signOutRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const { logout } = useStore()

  const signOut = async() => {
    await logout()
    setOpenSignOut(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openSignOut && signOutRef.current && !signOutRef.current.contains(e.target as Node)) {
        setOpenSignOut(false)
      }
    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openSignOut, setOpenSignOut])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] z-50 transition ${openSignOut ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex items-center justify-center md:p-0 p-10`}>
      <div ref={signOutRef} className='lg:w-1/3 md:w-1/2 w-full rounded-lg md:p-10 px-3 py-8 flex flex-col items-center justify-center bg-white gap-8'>
        <div className='bg-orange-500 w-28 h-28 rounded-full flex items-center justify-center'>
          <MdQuestionMark className='text-white text-7xl' />
        </div>
        <p className='text-center text-gray-600'>Are you sure want to sign out?</p>
        <div className='flex items-center gap-6 justify-center'>
          <button onClick={() => setOpenSignOut(false)} className='bg-gray-100 outline-none px-6 py-3 rounded-lg text-sm text-gray-400'>No, I&apos;m not</button>
          <button onClick={signOut} className='bg-red-500 outline-none px-6 py-3 hover:bg-red-600 transition rounded-lg text-sm text-white'>Yes, I&apos;m sure</button>
        </div>
      </div>
    </div>
  )
}

export default SignOut