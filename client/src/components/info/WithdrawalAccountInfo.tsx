import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  openWithdrawalAccountInfo: boolean
  setOpenWithdrawalAccountInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const WithdrawalAccountInfo = ({ openWithdrawalAccountInfo, setOpenWithdrawalAccountInfo }: IProps) => {
  const withdrawalAccountInfoRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openWithdrawalAccountInfo && withdrawalAccountInfoRef.current && !withdrawalAccountInfoRef.current.contains(e.target as Node)) {
        setOpenWithdrawalAccountInfo(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openWithdrawalAccountInfo, setOpenWithdrawalAccountInfo])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 transition z-40 bg-[rgba(0,0,0,.8)] ${openWithdrawalAccountInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={withdrawalAccountInfoRef} className={`absolute top-0 right-0 h-full sm:w-[450px] w-[320px] transition origin-right bg-white p-6 ${openWithdrawalAccountInfo ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} overflow-auto hide-scrollbar`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Withdrawal Account Info</h1>
          <AiOutlineClose onClick={() => setOpenWithdrawalAccountInfo(false)} className='cursor-pointer' />
        </div>
        <div className='mt-8'>
          <div className='flex sm:flex-row flex-col sm:items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='bg-secondary rounded-full w-10 h-10 text-white flex items-center justify-center font-medium'>
                <p>JD</p>
              </div>
              <div>
                <h1 className='font-medium'>John Doe</h1>
                <p className='text-gray-400 text-xs font-medium mt-1'>john.doe@gmail.com</p>
              </div>
            </div>
            <p className='text-gray-500 text-xs sm:mt-0 mt-5'>12 September 2024</p>
          </div>
          <div className='mt-10'>
            <p className='text-sm font-medium'>Issuing Bank</p>
            <p className='mt-3 text-sm text-gray-500'>Bank of ABC</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Account Number</p>
            <p className='mt-3 text-sm text-gray-500'>1234567890</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Cardholder Name</p>
            <p className='mt-3 text-sm text-gray-500'>Doe John</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Exp. Date</p>
            <p className='mt-3 text-sm text-gray-500'>15 September 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawalAccountInfo