import { useState, useEffect, useRef } from 'react'
import { PiDotsThreeBold } from 'react-icons/pi'
import { FaHeart } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import ActivityLog from './ActivityLog'
import PaymentMethod from './PaymentMethod'

const Header = () => {
  const [openThreeDots, setOpenThreeDots] = useState(false)
  const [openActivityLog, setOpenActivityLog] = useState(false)
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false)

  const threeDotsRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openThreeDots && threeDotsRef.current && !threeDotsRef.current.contains(e.target as Node)) {
        setOpenThreeDots(false)
      }
    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openThreeDots])

  return (
    <>
      <div className='flex items-center justify-center gap-14 mt-14'>
        <div className='bg-gray-100 rounded-xl flex-1 h-[450px]'></div>
        <div className='flex-1'>
          <div className='mb-6 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-semibold'>
                <p>JD</p>
              </div>
              <p className='text-sm font-medium text-gray-500'>John Doe</p>
            </div>
            <div ref={threeDotsRef} className='relative'>
              <PiDotsThreeBold onClick={() => setOpenThreeDots(!openThreeDots)} className='text-xl cursor-pointer' />
              <div className={`absolute top-full right-0 mt-3 border border-gray-300 rounded-xl shadow-xl bg-white w-[170px] ${openThreeDots ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'} transition origin-top`}>
                <div onClick={() => setOpenActivityLog(true)} className='flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-gray-100 rounded-xl'>
                  <FiActivity />
                  <p>Activity Log</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className='font-medium text-3xl leading-relaxed'>Help Turkiye and Syria Earthquare Relief Fund</h1>
          <p className='text-gray-500 text-sm font-medum leading-relaxed mt-4'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
          <div className='flex items-center gap-3 mt-6'>
            <p className='text-3xl font-medium'>${`${20000}`.toLocaleString()}</p>
            <p className='text-sm font-medium text-gray-500'>raised of ${`${100000}`.toLocaleString()} goal</p>
          </div>
          <div className='w-full rounded-full h-2 bg-gray-200 mt-5 relative after:content-[ ] after:absolute after:h-2 after:w-1/2 after:rounded-full after:top-0 after:left-0 after:bg-secondary' />
          <div className='flex items-center justify-between mt-10'>
            <button onClick={() => setOpenPaymentMethod(true)} className='outline-none bg-secondary hover:bg-primary transition text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-4'>
              <p>Share your Kindness</p>
              <FaHeart />
            </button>
            <p className='text-sm text-gray-500 font-semibold'>10,580 supporters</p>
          </div>
        </div>
      </div>

      <ActivityLog
        openActivityLog={openActivityLog}
        setOpenActivityLog={setOpenActivityLog}
      />

      <PaymentMethod
        openPaymentMethod={openPaymentMethod}
        setOpenPaymentMethod={setOpenPaymentMethod}
      />
    </>
  )
}

export default Header