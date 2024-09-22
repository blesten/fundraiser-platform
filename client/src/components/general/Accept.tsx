import { useEffect, useRef } from 'react'
import { MdQuestionMark } from 'react-icons/md'

interface IProps {
  openAccept: boolean
  setOpenAccept: React.Dispatch<React.SetStateAction<boolean>>
  onSuccess?: () => {}
}

const Accept = ({ openAccept, setOpenAccept, onSuccess }: IProps) => {
  const acceptRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleConfirm = () => {
    onSuccess!()
    setOpenAccept(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openAccept && acceptRef.current && !acceptRef.current.contains(e.target as Node)) {
        setOpenAccept(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openAccept, setOpenAccept])
  
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] z-50 transition ${openAccept ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex items-center justify-center md:p-0 p-10`}>
      <div ref={acceptRef} className='lg:w-1/3 md:w-1/2 w-full rounded-lg md:p-10 px-3 py-8 flex flex-col items-center justify-center bg-white gap-8'>
        <div className='bg-secondary w-28 h-28 rounded-full flex items-center justify-center'>
          <MdQuestionMark className='text-white text-7xl' />
        </div>
        <p className='text-center text-gray-600'>Are you sure to accept?</p>
        <div className='flex items-center gap-6 justify-center'>
          <button onClick={() => setOpenAccept(false)} className='bg-gray-100 outline-none px-6 py-3 rounded-lg text-sm text-gray-400'>No, I&apos;m not</button>
          <button onClick={handleConfirm} className='bg-secondary outline-none px-6 py-3 hover:bg-primary transition rounded-lg text-sm text-white'>Yes, I&apos;m sure</button>
        </div>
      </div>
    </div>
  )
}

export default Accept