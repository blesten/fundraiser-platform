import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  openActivityLog: boolean
  setOpenActivityLog: React.Dispatch<React.SetStateAction<boolean>>
}

const ActivityLog = ({ openActivityLog, setOpenActivityLog }: IProps) => {
  const activityLogRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openActivityLog && activityLogRef.current && !activityLogRef.current.contains(e.target as Node)) {
        setOpenActivityLog(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openActivityLog, setOpenActivityLog])

  return (
    <div className={`fixed top-0 left-0 bottom-0 z-40 right-0 bg-[rgba(0,0,0,.8)] ${openActivityLog ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition`}>
      <div ref={activityLogRef} className={`sm:w-[500px] w-[300px] h-screen bg-white absolute top-0 right-0 ${openActivityLog ? 'scale-x-100 pointer-events-auto opacity-100' : 'scale-x-0 pointer-events-none opacity-0'} transition origin-right p-5 flex flex-col gap-8`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Activity Log</h1>
          <AiOutlineClose onClick={() => setOpenActivityLog(false)} className='cursor-pointer' />
        </div>
        <div className='flex-1 overflow-auto hide-scrollbar'>
          <div className='flex gap-4 pb-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full w-5 h-5 border-2 border-primary relative after:content-[ ] after:absolute after:rounded-full after:w-3 after:h-3 after:bg-primary flex items-center justify-center mt-[0.1rem] shrink-0' />
              <div className='w-[1px] h-full border border-primary border-dashed mt-2' />
            </div>
            <div className='flex-1'>
              <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-2 justify-between'>
                <p className='font-semibold text-secondary'>Charity Program Created</p>
                <p className='text-gray-500 text-xs font-medium'>12 September 2024</p>
              </div>
              <p className='text-xs text-gray-500 mt-3 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dignissimos vero dolorum?</p>
            </div>
          </div>
          <div className='flex gap-4 pb-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full w-5 h-5 border-2 border-primary relative after:content-[ ] after:absolute after:rounded-full after:w-3 after:h-3 after:bg-primary flex items-center justify-center mt-[0.1rem] shrink-0' />
              <div className='w-[1px] h-full border border-primary border-dashed mt-2' />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-secondary'>Charity Program Created</p>
                <p className='text-gray-500 text-xs font-medium'>12 September 2024</p>
              </div>
              <p className='text-xs text-gray-500 mt-3 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dignissimos vero dolorum?</p>
            </div>
          </div>
          <div className='flex gap-4 pb-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full w-5 h-5 border-2 border-primary relative after:content-[ ] after:absolute after:rounded-full after:w-3 after:h-3 after:bg-primary flex items-center justify-center mt-[0.1rem] shrink-0' />
              <div className='w-[1px] h-full border border-primary border-dashed mt-2' />
            </div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-secondary'>Charity Program Created</p>
                <p className='text-gray-500 text-xs font-medium'>12 September 2024</p>
              </div>
              <p className='text-xs text-gray-500 mt-3 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dignissimos vero dolorum?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityLog