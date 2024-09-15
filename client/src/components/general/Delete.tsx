import { useEffect, useRef } from 'react'
import { MdQuestionMark } from 'react-icons/md'

interface IProps {
  openDelete: boolean
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>
}

const Delete = ({ openDelete, setOpenDelete }: IProps) => {
  const deleteRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openDelete && deleteRef.current && !deleteRef.current.contains(e.target as Node)) {
        setOpenDelete(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openDelete, setOpenDelete])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 bg-[rgba(0,0,0,.8)] transition ${openDelete ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex items-center justify-center`}>
      <div ref={deleteRef} className='w-1/3 bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-6'>
        <div className='bg-orange-500 w-28 h-28 rounded-full flex items-center justify-center'>
          <MdQuestionMark className='text-white text-7xl' />
        </div>
        <p className='text-gray-700'>Are you sure to delete data?</p>
        <div className='flex items-center gap-4'>
          <button onClick={() => setOpenDelete(false)} className='bg-gray-100 outline-none px-6 py-3 rounded-lg text-sm text-gray-400'>No, I&apos;m not</button>
          <button className='bg-red-500 outline-none px-6 py-3 hover:bg-red-600 transition rounded-lg text-sm text-white'>Yes, I&apos;m sure</button>
        </div>
      </div>
    </div>
  )
}

export default Delete